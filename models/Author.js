const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Music = sequelize.define('Music', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  music_group_name: {
    type: DataTypes.string,
    allowNull: false
  },
  music_group_image: {
    type: DataTypes.STRING, // Путь к файлу на сервере или URL-адрес
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'musics',
  
});

module.exports = Music;
