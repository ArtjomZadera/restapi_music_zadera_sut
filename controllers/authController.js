const User = require('../models/user');
const bcrypt = require('bcrypt');
const { generateToken } = require('../middleware/authJwt'); // Импортируем функцию для генерации токена

const authController = {
  register: async (req, res) => {
    try {
      const { username, email, password } = req.body;

      const existingUser = await User.findOne({ where: { email } });
      if (existingUser) {
        return res.status(400).json({ error: 'Пользователь с таким адресом электронной почты уже существует' });
      }

      //const hashedPassword = await bcrypt.hash(password, 10);

      const newUser = await User.create({
        username,
        email,
        password
      });

      res.status(201).json(newUser);
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  },

  login: async (req, res) => {
    try {
      const { email, password } = req.body;

      const user = await User.findOne({ where: { email } });
      if (!user) {
        return res.status(401).json({ error: 'Неверный адрес электронной почты или пароль' });
      }

      const passwordMatch = await bcrypt.compare(password, user.password);
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Неверный адрес электронной почты или пароль' });
      }

      const authToken = generateToken(user); // Генерируем токен
      res.status(200).json({ token: authToken });
    } catch (error) {
      console.error(error);
      res.status(500).json({ error: 'Ошибка сервера' });
    }
  },
}

module.exports = authController;
