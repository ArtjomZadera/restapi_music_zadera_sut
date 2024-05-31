const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Music = sequelize.define('Music', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  musicname: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  author: {
    type: DataTypes.INTEGER,
    references: {
      model: Author,
      key: 'id',
    },
    allowNull: false
  },
  duration: {
    type: DataTypes.STRING,
    allowNull: false
  },
  music_image: {
    type: DataTypes.STRING,
    allowNull: false
  },
  filepath: {
    type: DataTypes.STRING, // Путь к файлу на сервере или URL-адрес
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'musics',
  
});

module.exports = Music;
