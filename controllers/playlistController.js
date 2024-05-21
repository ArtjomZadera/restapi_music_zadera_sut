const Playlist = require('../models/playlist');

exports.createPlaylist = async (req, res) => {
  const { playlistname, userId } = req.body;
  try {
    const newPlaylist = await Playlist.create({ playlistname, userId });
    res.status(201).json(newPlaylist);
  } catch (error) {
    res.status(500).json({ error: 'Failed to create playlist' });
  }
};

exports.getAllPlaylists = async (req, res) => {
  try {
    const playlists = await Playlist.findAll();
    res.status(200).json(playlists);
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve playlists' });
  }
};

exports.getPlaylistById = async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await Playlist.findByPk(id);
    if (playlist) {
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to retrieve playlist' });
  }
};

exports.updatePlaylist = async (req, res) => {
  const { id } = req.params;
  const { playlistname } = req.body;
  try {
    const playlist = await Playlist.findByPk(id);
    if (playlist) {
      playlist.playlistname = playlistname;
      await playlist.save();
      res.status(200).json(playlist);
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to update playlist' });
  }
};

exports.deletePlaylist = async (req, res) => {
  const { id } = req.params;
  try {
    const playlist = await Playlist.findByPk(id);
    if (playlist) {
      await playlist.destroy();
      res.status(200).json({ message: 'Playlist deleted successfully' });
    } else {
      res.status(404).json({ error: 'Playlist not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Failed to delete playlist' });
  }
};
