const Note = require('../models/noteModel');
const AppError = require('../utils/AppError');
const catchAsync = require('../utils/catchAsync');

exports.getNote = catchAsync(async (req, res) => {
  const note = await Note.findById(req.params.id);
  if (!note) throw new AppError('The requested item does not exist.', 404);
  res.status(200).json({ status: 'success', data: { note } });
});

exports.createNote = catchAsync(async (req, res) => {
  const { message, code } = req.body;
  const note = new Note({ message, code });
  await note.save();
  res.status(201).json({ status: 'success', data: { note } });
});
