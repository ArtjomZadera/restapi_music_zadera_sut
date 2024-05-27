const express = require('express');
const router = express.Router();
const playlistController = require('../controllers/playlistController');
const authJwt = require('../middleware/authJwt');

router.get('/playlists', playlistController.getAllPlaylists);
router.get('/playlists/:id', playlistController.getPlaylistById);

router.post('/playlists',authJwt.verifyToken,authJwt.checkUserId, playlistController.createPlaylist);
router.put('/playlists/:id',authJwt.verifyToken,authJwt.checkUserId, playlistController.updatePlaylist);
router.delete('/playlists/:id',authJwt.verifyToken,authJwt.checkUserId, playlistController.deletePlaylist);

module.exports = router;
