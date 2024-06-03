const { DataTypes } = require('sequelize');
const sequelize = require('../config/database');
const bcrypt = require('bcrypt');
const User = sequelize.define('User', {
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  username: {
    type: DataTypes.STRING(30),
    allowNull: false
  },
  email: {
    type: DataTypes.STRING(100),
    allowNull: false,
    unique: true,
    validate: {
      isEmail: true
    }
  },
  password: {
    type: DataTypes.STRING(255),
    allowNull: false
  }
}, {
  timestamps: false,
  tableName: 'users',
  hooks: {
    beforeCreate: async (user) => {
      try {
        const salt = await bcrypt.genSalt(10);
        user.password = await bcrypt.hash(user.password, salt);
      } catch (error) {
        throw new Error('Error hashing password');
      }
    },
    beforeUpdate: async (user) => {
      try {
        if (user.changed('password')) {
          const salt = await bcrypt.genSalt(10);
          user.password = await bcrypt.hash(user.password, salt);
        }
      } catch (error) {
        throw new Error('Error hashing password');
      }
    }
  }
});


bcrypt.genSalt(10, function(err, salt) {
  if (err) {
    console.error('Ошибка при генерации соли:', err);
  } else {
    console.log('Сгенерированная соль:', salt);
  }
});


module.exports = User;
