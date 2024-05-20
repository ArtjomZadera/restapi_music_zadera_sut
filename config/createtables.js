const sequelize = require('../config/database');
const path = require('path');

const User = require(path.join(__dirname, '../models/user'));
const Music = require(path.join(__dirname, '../models/music'));
const Playlist = require(path.join(__dirname, '../models/playlist'));
const Music2Playlist = require(path.join(__dirname, '../models/music2playlist'));

sequelize.sync({ force: true })
  .then(async () => {
    console.log("Database and tables created!");

    // Add users
    const user1 = await User.create({
      username: 'user1',
      email: 'user1@example.com',
      password: 'user1_123'
    });
    console.log('User 1 created:', user1.toJSON());

    const user2 = await User.create({
      username: 'user2',
      email: 'user2@example.com',
      password: 'user2_123'
    });
    console.log('User 2 created:', user2.toJSON());

    const music1 = await Music.create({
      musicname: 'Bones',
      author: 'Imagine Dragons',
    });
    console.log('Music 1 created:', music1.toJSON());

    const music2 = await Music.create({
      musicname: 'The Real Slim Shady',
      author: 'Eminem',
    });
    console.log('Music 2 created:', music2.toJSON());

    const music3 = await Music.create({
      musicname: 'Группа крови',
      author: 'Кино',
    });
    console.log('Music 3 created:', music3.toJSON());

    const music4 = await Music.create({
      musicname: 'Sex With My Ex',
      author: 'LiL PEEP',
    });
    console.log('Music 4 created:', music4.toJSON());

    const playlist1 = await Playlist.create({
      playlistname: 'some staff',
      userId: 1,
    });
    console.log('Playlist 1 created:', playlist1.toJSON());

    const music2playlist1 = await Music2Playlist.create({
      musicId: 1,
      playlistId: 1,
    });
    console.log('Playlist 1 updated:', music2playlist1.toJSON());
    
    const music2playlist2 = await Music2Playlist.create({
      musicId: 2,
      playlistId: 1,
    });
    console.log('Playlist 1 updated:', music2playlist2.toJSON());
    
  })
  .catch(error => {
    console.error('Error creating database:', error);
  });
