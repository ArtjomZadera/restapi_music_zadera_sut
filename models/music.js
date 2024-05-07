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
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'musics',
  
});

module.exports = Music;
