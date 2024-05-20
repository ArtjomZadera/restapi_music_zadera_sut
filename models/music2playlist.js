const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Music = require('./music');
const Playlist = require('./playlist');

const Music2Playlist = sequelize.define('Music2Playlist', {
    musicId: {
      type: DataTypes.INTEGER,
      references: {
        model: Music,
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

Music.belongsToMany(Playlist, { through: Music2Playlist, foreignKey: 'musicId' });
Playlist.belongsToMany(Music, { through: Music2Playlist, foreignKey: 'playlistId' });

module.exports = Music2Playlist;