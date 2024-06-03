const SharedUser = require('../models/shared_user');
const User = require('../models/user');
const Playlist = require('../models/playlist');
const generateCRUDControllers = require('./generateCRUDControllers');

const sharedCRUDControllers = generateCRUDControllers(SharedUser);

const userSharedController = {
  ...sharedCRUDControllers,

  getAllSharedPlaylists: async (req, res) => {
    try {
      const sharedPlaylists = await SharedUser.findAll({
        include: [
          { model: User, as: 'Owner', attributes: ['id', 'username', 'email'] },
          { model: Playlist, attributes: ['id', 'playlistname'] },
          { model: User, as: 'Friend', attributes: ['id', 'username', 'email'] },
        ],
      });
      res.status(200).json(sharedPlaylists);
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve shared playlists' });
    }
  },

  getSharedPlaylistById: async (req, res) => {
    const { id } = req.params;
    try {
      const sharedPlaylist = await SharedUser.findByPk(id, {
        include: [
          { model: User, as: 'Owner', attributes: ['id', 'username', 'email'] },
          { model: Playlist, attributes: ['id', 'playlistname'] },
          { model: User, as: 'Friend', attributes: ['id', 'username', 'email'] },
        ],
      });
      if (sharedPlaylist) {
        res.status(200).json(sharedPlaylist);
      } else {
        res.status(404).json({ error: 'Shared playlist not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to retrieve shared playlist' });
    }
  },

  createSharedPlaylist: async (req, res) => {
    const { ownerId, playlistId, friendId } = req.body;
    try {
      const newSharedPlaylist = await SharedUser.create({ ownerId, playlistId, friendId });
      res.status(201).json(newSharedPlaylist);
    } catch (error) {
      res.status(500).json({ error: 'Failed to share playlist' });
    }
  },

  updateSharedPlaylist: async (req, res) => {
    const { id } = req.params;
    const { ownerId, playlistId, friendId } = req.body;
    try {
      const sharedPlaylist = await SharedUser.findByPk(id);
      if (sharedPlaylist) {
        sharedPlaylist.ownerId = ownerId;
        sharedPlaylist.playlistId = playlistId;
        sharedPlaylist.friendId = friendId;
        await sharedPlaylist.save();
        res.status(200).json(sharedPlaylist);
      } else {
        res.status(404).json({ error: 'Shared playlist not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to update shared playlist' });
    }
  },

  deleteSharedPlaylist: async (req, res) => {
    const { id } = req.params;
    try {
      const sharedPlaylist = await SharedUser.findByPk(id);
      if (sharedPlaylist) {
        await sharedPlaylist.destroy();
        res.status(200).json({ message: 'Shared playlist deleted successfully' });
      } else {
        res.status(404).json({ error: 'Shared playlist not found' });
      }
    } catch (error) {
      res.status(500).json({ error: 'Failed to delete shared playlist' });
    }
  },
};

module.exports = userSharedController;
