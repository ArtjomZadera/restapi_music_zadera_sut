const express = require('express');
const router = express.Router();
const musicController = require('../controllers/musicController');

router.get('/', musicController.showMusicList);
router.get('/:id', musicController.findMusicById);
router.get('/search', musicController.findMusicByName);

router.post('/', musicController.createMusic);
router.put('/:id', musicController.updateMusic);
router.delete('/:id', musicController.deleteMusic);

module.exports = router;
