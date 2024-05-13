const crypto = require('node:crypto');
const express = require('express');
const router = express.Router();

router.post('/', (req, res) => {
  res.status(201).json({
    status: 'success',
    data: {
      note: {
        id: crypto.randomBytes(4).toString('hex')
      }
    }
  });
});

router.get('/:id', (req, res) => {
  res
    .status(200)
    .json({ status: 'success', data: { note: { id: req.params.id } } });
});

module.exports = router;
