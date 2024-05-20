const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Playlist = require('./playlist');
const User = require('./user');

const User2Playlist = sequelize.define('User2Playlist', {
    userId: {
      type: DataTypes.INTEGER,
      references: {
        model: User,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
    playlistId: {
      type: DataTypes.INTEGER,
      references: {
        model: Playlist,
        key: 'id',
      },
      onDelete: 'CASCADE',
    },
  }, {
    timestamps: false,
  });

User.belongsToMany(Playlist, { through: User2Playlist, foreignKey: 'userId' });
Playlist.belongsToMany(User, { through: User2Playlist, foreignKey: 'playlistId' });

module.exports = User2Playlist;