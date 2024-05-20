const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');

const Playlist = sequelize.define('Playlist', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  playlistname: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  userId: {
    type: DataTypes.STRING(100),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'playlists',
  
});

Playlist.belongsTo(User, { foreignKey: 'userId' });

module.exports = Playlist;
