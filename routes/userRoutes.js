const express = require('express');
const router = express.Router();
const userController = require('../controllers/userController');
const authController = require('../controllers/authController');
const authJwt = require('../middleware/authJwt');

router.get('/users', userController.findAll);
router.get('/users/:id', userController.findOne);
router.put('/users/:id',authJwt.verifyToken, authJwt.checkUserId, userController.update);
router.delete('/users/:id',authJwt.verifyToken, authJwt.checkUserId, userController.delete);
router.get('/users/username/:username', userController.findUsersByUsername);

router.post('/register', authController.register);
router.post('/login', authController.login);

module.exports = router;
