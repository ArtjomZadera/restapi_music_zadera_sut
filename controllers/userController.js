const { User } = require('../models');
const generateCRUDControllers = require('./generateCRUDControllers');
const jwt = require("jsonwebtoken");
const bcrypt = require("bcryptjs");
require('dotenv').config();

const userCRUDControllers = generateCRUDControllers(User);

// Добавление новых методов
const userController = {
    ...userCRUDControllers, // Включаем все стандартные CRUD операции
    findUsersByUsername: async (req, res) => {
        try {
            const users = await User.findAll({
                where: {
                    username: req.params.username
                }
            });
            res.status(200).json(users);
        } catch (error) {
            res.status(500).json(error);
        }
    },
    signin: async (req, res) => {
        try {
            const { username, password } = req.body;
            const user = await User.findOne({ where: { username } });
            if (!user) {
                return res.status(401).json({ error: "Invalid username or password" });
            }

            const isMatch = await bcrypt.compare(password, user.password);
            if (!isMatch) {
                return res.status(401).json({ error: "Invalid username or password" });
            }
            const token = jwt.sign({ userId: user.id }, process.env.SECRET_WORD, { expiresIn: '2m' });
            res.json({ message: "Authentication successful", token });
        } catch (error) {
            res.status(500).json({ error: "User login failed" });
        }
    }
};



module.exports = userController;