const express = require('express');
const router = express.Router();
const favoriteController = require('../controllers/favorite.Controller');
const authMiddleware = require('../middleware/authMiddleware');

router.post('/', authMiddleware.protect('user', 'admin'), favoriteController.addFavorite);
router.delete('/', authMiddleware.protect('user', 'admin'), favoriteController.removeFavorite);
router.get('/:userId', authMiddleware.protect('user', 'admin'), favoriteController.getFavoritesByUser);

module.exports = router;
