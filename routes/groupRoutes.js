const express = require('express');
const router = express.Router();
const groupController = require('../controllers/groupController');
const authJwt = require('../middleware/authJwt');

router.get('/groups', groupController.showGroupList);
router.get('/groups/:id', groupController.findGroupById);
router.get('/groups/search/:name', groupController.findGroupByName);

router.post('/groups', authJwt.verifyToken, authJwt.checkUserId, groupController.createGroup);
router.put('/groups/:id', authJwt.verifyToken, authJwt.checkUserId, groupController.updateGroup);
router.delete('/groups/:id', authJwt.verifyToken, authJwt.checkUserId, groupController.deleteGroup);

module.exports = router;