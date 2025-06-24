const express = require('express');
const router = express.Router();
const peopleController = require('../controllers/people.Controller');
const authMiddleware = require('../middleware/authMiddleware');

router.get('/', peopleController.getAll);
router.get('/:id', peopleController.getById);
router.post('/', authMiddleware.protect('admin', 'moderator'), peopleController.create);
router.put('/:id', authMiddleware.protect('admin', 'moderator'), peopleController.update);
router.put('/update-profile/:id', authMiddleware.protect('admin', 'moderator'), peopleController.updateProfile);
router.delete('/:id', authMiddleware.protect('admin'), peopleController.delete);

module.exports = router;