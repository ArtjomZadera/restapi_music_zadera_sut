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
const musicRoutes = require('./routes/musicRoutes');

// Используем маршруты
app.use((req, res, next) => {
  req.db = db;
  next();
});
app.use('/api', musicRoutes);

// Определяем порт
const PORT = process.env.PORT || 5000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер работает на http://localhost:${PORT}/`);
});
