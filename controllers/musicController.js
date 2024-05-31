const Music = require('../models/music');
const generateCRUDControllers = require('./generateCRUDControllers');


const musicCRUDControllers = generateCRUDControllers(Music);

const musicController = {
  ...musicCRUDControllers, 


  showMusicList: async (req, res) => {
    try {
      const musicList = await Music.findAll();
      res.status(200).json(musicList);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve music list' });
    }
  },


  findMusicById: async (req, res) => {
    const { id } = req.params;
    try {
      const music = await Music.findByPk(id);
      if (music) {
        res.status(200).json(music);
      } else {
        res.status(404).json({ error: 'Music not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve music' });
    }
  },


  findMusicByName: async (req, res) => {
    const { name } = req.query;
    try {
      const music = await Music.findAll({ like: { musicname: name } });
      if (music) {
        res.status(200).json(music);
      } else {
        res.status(404).json({ error: 'Music not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve music' });
    }
  },


  createMusic: async (req, res) => {
    
    const { musicname, music_group_id, filepath, duration, music_image } = req.body;
    try {
      const newMusic = await Music.create({  musicname, music_group_id, filepath, duration, music_image });
      res.status(201).json(newMusic);
    } catch (error) {
      res.status(500).json({ error: 'Failed to create music' });
    }
  },

  updateMusic: async (req, res) => {
    const { id } = req.params;
    const {  musicname, music_group_id, filepath, duration, music_image } = req.body;
    try {
      const music = await Music.findByPk(id);
      if (music) {
        music.musicname = musicname;
        music.music_group_id = music_group_id;
        music.duration = duration;
        music.music_image = music_image;
        music.filepath = filepath;
        await music.save();
        res.status(200).json(music);
      } else {
        res.status(404).json({ error: 'Music not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update music' });
    }
  },


  deleteMusic: async (req, res) => {
    const { id } = req.params;
    try {
      const music = await Music.findByPk(id);
      if (music) {
        await music.destroy();
        res.status(200).json({ message: 'Music deleted successfully' });
      } else {
        res.status(404).json({ error: 'Music not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete music' });
    }
  }
};

module.exports = musicController;
