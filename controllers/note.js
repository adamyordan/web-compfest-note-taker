'use strict';

const Note = require('../models/Note');
var path = require('path');

/**
 * GET /
 * Home page.
 */
exports.index = (req, res) => {
  res.sendFile(path.resolve('views/index.html'));
};

/**
 * GET /notes/:key
 */
exports.getNotes = (req, res) => {
  Note.findOne({ 'key': req.params.key }, (err, note) => {
    if (!note) {
      const newNote = new Note({ key: req.params.key });
      newNote.save();
      note = newNote;
    }
    res.send(note.value || '');
  });
};

/**
 * GET /notes/:key/write/:value
 */
exports.writeNotes = (req, res) => {
  Note.findOneAndUpdate({ 'key': req.params.key }, 
    { 'value': req.params.value }, 
    { upsert: true, new: true }, 
    (err, updatedNote) => {
      if (err) return res.send(500, { throw: err });
      res.send(updatedNote.value || '');
  });
};

/**
 * GET /notes/:key/append/:value
 */
exports.appendNotes = (req, res) => {
  Note.findOne({ 'key': req.params.key }, (err, previousNote) => {
    let previousValue = '';
    if (previousNote) {
      previousValue = previousNote.value ? previousNote.value : '';
    }
    Note.findOneAndUpdate({ 'key': req.params.key }, 
      { 'value': previousValue + req.params.value }, 
      { upsert: true, new: true }, 
      (err, updatedNote) => {
        if (err) return res.send(500, { throw: err });
        res.send(updatedNote.value || '');
    });
  });
};