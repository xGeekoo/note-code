const crypto = require('node:crypto');
const express = require('express');
const router = express.Router();

const noteController = require('../controllers/noteController');

router.post('/', noteController.createNote);
router.get('/:id', noteController.getNote);

module.exports = router;
