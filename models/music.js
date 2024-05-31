const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const Author = require('./Author');

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
  music_group_id: {
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
    allowNull: true
  },
  filepath: {
    type: DataTypes.STRING,
    allowNull: false,
  },
}, {
  timestamps: false,
  tableName: 'musics',
});

Author.hasMany(Music, { foreignKey: 'music_group_id' });
Music.belongsTo(Author, { foreignKey: 'music_group_id' });

module.exports = Music;
