const User = require('./user');
const Landmark = require('./landmark');
const Photo = require('./photo');
const Rating = require('./rating');

// Один пользователь может добавлять много фотографий и рейтингов
User.hasMany(Photo, { foreignKey: 'userId' });
User.hasMany(Rating, { foreignKey: 'userId' });
// Одна достопримечательность может иметь много фотографий и рейтингов
Landmark.hasMany(Photo, { foreignKey: 'landmarkId' });
Landmark.hasMany(Rating, { foreignKey: 'landmarkId' });
// Фотография принадлежит одной достопримечательности и одному пользователю
Photo.belongsTo(User, { foreignKey: 'userId' });
Photo.belongsTo(Landmark, { foreignKey: 'landmarkId' });
// Рейтинг принадлежит одной достопримечательности и одному пользователю
Rating.belongsTo(User, { foreignKey: 'userId' });
Rating.belongsTo(Landmark, { foreignKey: 'landmarkId' });

module.exports = {User, Rating, Photo, Landmark}