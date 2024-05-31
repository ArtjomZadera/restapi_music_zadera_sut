const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Author = sequelize.define('Author', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  music_group_name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  music_group_image: {
    type: DataTypes.STRING, // Путь к файлу на сервере или URL-адрес
    allowNull: true,
  },
}, {
  timestamps: false,
  tableName: 'authors',
  
});

module.exports = Author;
