const express = require('express');
const router = express.Router();
const authorController = require('../controllers/authorController');
const authJwt = require('../middleware/authJwt');

router.get('/authors', authorController.showAuthorList);
router.get('/authors/:id', authorController.findAuthorById);
router.get('/authors/search/:name', authorController.findAuthorByName);

router.post('/authors', authJwt.verifyToken, authJwt.checkUserId, authorController.createAuthor);
router.put('/authors/:id', authJwt.verifyToken, authJwt.checkUserId, authorController.updateAuthor);
router.delete('/authors/:id', authJwt.verifyToken, authJwt.checkUserId, authorController.deleteAuthor);

module.exports = router;