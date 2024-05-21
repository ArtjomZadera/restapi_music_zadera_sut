const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authJwt = require('../middleware/authJwt');

router.get('/', userController.findAll);
router.get('/:id', userController.findOne);
router.put('/:id',authJwt.verifyToken, authJwt.checkUserId, userController.update);
router.delete('/:id',authJwt.verifyToken, authJwt.checkUserId, userController.delete);
router.get('/username/:username', userController.findUsersByUsername);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
