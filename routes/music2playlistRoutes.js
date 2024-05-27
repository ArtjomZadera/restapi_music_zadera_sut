const express = require('express');
const router = express.Router();
const music2playlistController = require('../controllers/music2playlistController');
const authJwt = require('../middleware/authJwt');

router.get('/playlist/:id', music2playlistController.showMusicList);
router.post('/playlist/:id',authJwt.verifyToken,authJwt.checkUserId, music2playlistController.addMusic);
router.put('/playlist/:id',authJwt.verifyToken,authJwt.checkUserId, music2playlistController.updateMusic);
router.delete('/playlist/:id',authJwt.verifyToken,authJwt.checkUserId, music2playlistController.deleteMusic);

module.exports = router;
