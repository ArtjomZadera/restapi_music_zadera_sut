const Music2Playlist = require('../models/music2playlist');
const Playlist = require('../models/playlist');
const generateCRUDControllers = require('./generateCRUDControllers');


const musicCRUDControllers = generateCRUDControllers(Music2Playlist);

const musicController = {
  ...musicCRUDControllers, 


  showMusicList: async (req, res) => {
    try {
      const { id } = req.params;
      const musicList = await Music2Playlist.findAll({ where: { playlistId: id } });
      res.status(200).json(musicList);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve music list' });
    }
  },

  addMusic: async (req, res) => {
    const { id } = req.params;
    const { musicId } = req.body;
    try {
      const newMusic = await Music2Playlist.create({ musicId, playlistId: id });
      res.status(201).json(newMusic);
    } catch (error) {
      res.status(500).json({ error: 'Failed to add music' });
    }
  },

  updateMusic: async (req, res) => {
    const { id } = req.params;
    const { musicId, playlistId } = req.body;
    try {
      const music = await Music2Playlist.findByPk(id);
      if (music) {
        music.musicId = musicId;
        music.playlistId = playlistId;
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
    const { id } = req.params; // Это id плейлиста
    const { musicId } = req.body; // Это id музыки

    try {
        // Найти запись по musicId и playlistId
        const music = await Music2Playlist.findOne({
            where: {
                playlistId: id,
                musicId: musicId
            }
        });

        if (music) {
            // Удалить найденную запись
            await music.destroy();
            res.status(200).json({ message: 'Music deleted successfully' });
        } else {
            res.status(404).json({ error: 'Music not found in this playlist' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Failed to delete music' });
    }
  }
};

module.exports = musicController;
