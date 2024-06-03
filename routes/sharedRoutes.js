const express = require('express');
const router = express.Router();
const userSharedController = require('../controllers/sharedController');
const authJwt = require('../middleware/authJwt');


router.get('/shared', userSharedController.getAllSharedPlaylists);
router.get('/shared/:id', userSharedController.getSharedPlaylistById);

router.post('/shared', authJwt.verifyToken, authJwt.checkUserId, userSharedController.createSharedPlaylist);
router.put('/shared/:id', authJwt.verifyToken, authJwt.checkUserId, userSharedController.updateSharedPlaylist);
router.delete('/shared/:id', authJwt.verifyToken, authJwt.checkUserId, userSharedController.deleteSharedPlaylist);

module.exports = router;
