const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  message: {
    type: String,
    required: [true, 'Please provide a code snippet.']
  },
  code: {
    type: String,
    trim: true,
    lowercase: true,
    enum: {
      values: ['html', 'css', 'javascript'],
      message: 'Please provide a valid programming language.'
    },
    required: [true, 'Please specified a programming language.']
  }
});

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;
