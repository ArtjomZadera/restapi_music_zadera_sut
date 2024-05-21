const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/database');

// Загружаем переменные среды из файла .env
dotenv.config();

// Инициализируем Express
const app = express();

// Middleware для парсинга JSON
app.use(express.json());

// Импортируем маршруты
const musicRoutes = require('./routes/musicRoutes.js');
const playlistRoutes = require('./routes/playlistRoutes.js');
const userRoutes = require('./routes/userRoutes.js');

// Используем маршруты
app.use((req, res, next) => {
  req.db = db;
  next();
});
app.use('/music', musicRoutes);
app.use('/playlists', playlistRoutes);
app.use('/users', userRoutes);

// Определяем порт
const PORT = process.env.PORT || 5000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер работает на порту ${PORT}`);
});
