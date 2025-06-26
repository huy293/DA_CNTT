const express = require('express');
const router = express.Router();
const editorsPickListController = require('../controllers/editorsPickList.Controller');

router.get('/', editorsPickListController.getAll);
router.get('/with-seasons', editorsPickListController.getAllWithSeasons);
router.get('/:id', editorsPickListController.getById);
router.post('/', editorsPickListController.create);
router.post('/seasons', editorsPickListController.getSeasonsByMovieIds);
router.put('/:id', editorsPickListController.update);
router.delete('/:id', editorsPickListController.remove);

module.exports = router; 