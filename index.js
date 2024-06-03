const express = require('express');
const dotenv = require('dotenv');
const db = require('./config/database');

dotenv.config();
const app = express();
app.use(express.json());

const swaggerUi = require('swagger-ui-express');
const swaggerDoc = require('./swagger.json');

// Импортируем маршруты
const authorRoutes = require('./routes/authorRoutes.js');
const musicRoutes = require('./routes/musicRoutes.js');
const playlistRoutes = require('./routes/playlistRoutes.js');
const userRoutes = require('./routes/userRoutes.js');
const music2playlistRoutes = require('./routes/music2playlistRoutes.js');

// Используем маршруты
app.use((req, res, next) => {
  req.db = db;
  next();
});

app.use('/api', authorRoutes);
app.use('/api', musicRoutes);
app.use('/api', playlistRoutes);
app.use('/api', userRoutes);
app.use('/api', music2playlistRoutes);
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerDoc));

// Определяем порт
const PORT = process.env.PORT || 5000;

// Запускаем сервер
app.listen(PORT, () => {
  console.log(`Сервер работает на порту http://localhost:${PORT}/api-docs`);
});
