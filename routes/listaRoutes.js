const express = require('express');
const router = express.Router();
const agendaController = require('../controllers/agendaController');

router.get('/', agendaController.listEntries);
router.get('/:id', agendaController.getEntryById);
router.post('/', agendaController.createEntry);
router.put('/:id', agendaController.updateEntry);
router.delete('/:id', agendaController.deleteEntry);

module.exports = router;
