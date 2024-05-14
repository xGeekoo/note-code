const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please provide a code snippet.']
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
