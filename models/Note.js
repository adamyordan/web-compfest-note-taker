'use strict';

const mongoose = require('mongoose');

const noteSchema = new mongoose.Schema({
  key: { type: String, unique: true },
  value: String
}, { timestamps: true });

const Note = mongoose.model('Note', noteSchema);

module.exports = Note;