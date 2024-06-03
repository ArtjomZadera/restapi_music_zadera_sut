const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const User = require('./user');
const Playlist = require('./playlist');

const SharedUser = sequelize.define('SharedUser', {
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
  tableName: 'shared_users',
});

SharedUser.belongsTo(User, { as: 'Owner', foreignKey: 'ownerId' });
SharedUser.belongsTo(Playlist, { foreignKey: 'playlistId' });
SharedUser.belongsTo(User, { as: 'Friend', foreignKey: 'friendId' });


User.hasMany(SharedUser, { as: 'OwnedShares', foreignKey: 'ownerId' });
User.hasMany(SharedUser, { as: 'ReceivedShares', foreignKey: 'friendId' });
Playlist.hasMany(SharedUser, { foreignKey: 'playlistId' });

module.exports = SharedUser;
