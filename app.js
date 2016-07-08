'use strict';

/**
 * Module dependencies.
 */
const express = require('express');
const dotenv = require('dotenv');
const mongoose = require('mongoose');

/**
 * Load environment variables from .env file..
 */
dotenv.load({ path: '.env' });

/**
 * Controllers (route handlers).
 */
const noteController = require('./controllers/note');

/**
 * Create Express server.
 */
const app = express();

/**
 * Connect to MongoDB.
 */
mongoose.connect(process.env.MONGODB_URI);
const db = mongoose.connection;
db.on('error', () => {
  console.error('MongoDB Connection Error');
  process.exit(1);
})
db.once('open', function() {});

/**
 * Express configuration.
 */
app.set('port', process.env.PORT || 3000);

/**
 * App routes
 */
app.get('/', noteController.index);
app.get('/notes', noteController.index);
app.get('/notes/:key', noteController.getNotes);
app.get('/notes/:key/write/:value', noteController.writeNotes);
app.get('/notes/:key/append/:value', noteController.appendNotes);

/**
 * Start Express server
 */
app.listen(app.get('port'), () => {
  console.log('Express server listening on port %d', app.get('port'));
});

module.exports = app;