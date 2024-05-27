const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');
const authJwt = require('../middleware/authJwt');

router.get('/music', musicController.showMusicList);
router.get('/music/:id', musicController.findMusicById);
router.get('/music/search/:name', musicController.findMusicByName);

router.post('/music',authJwt.verifyToken,authJwt.checkUserId, musicController.createMusic);
router.put('/music/:id',authJwt.verifyToken,authJwt.checkUserId, musicController.updateMusic);
router.delete('/music/:id',authJwt.verifyToken,authJwt.checkUserId, musicController.deleteMusic);

module.exports = router;
