const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Playlist = require('./playlist');

const SharedUser = sequelize.define('Shared', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true,
  },
  ownerId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
  playlistId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Playlist,
      key: 'id',
    },
  },
  friendId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
}, {
  timestamps: false,
  tableName: 'shared',
});


module.exports = SharedUser;
