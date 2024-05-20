const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/music', musicController.showMusicList);
router.get('/music/:id', musicController.findMusicById);
router.get('/music/search', musicController.findMusicByName);

router.post('/music', musicController.createMusic);
router.put('/music/:id', musicController.updateMusic);
router.delete('/music/:id', musicController.deleteMusic);

module.exports = router;
