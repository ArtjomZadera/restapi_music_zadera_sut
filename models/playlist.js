const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const SharedUser = require('./shared_user');
const Playlist = sequelize.define('Playlist', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  playlistname: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  userId: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: User,
      key: 'id',
    },
  },
});

Playlist.belongsTo(User, { foreignKey: 'userId' });
module.exports = Playlist;
