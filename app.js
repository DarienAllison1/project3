const express = require('express');
const app = express();

app.use(express.json()); // Middleware to parse JSON

// Import routes
const bookRoutes = require('./routes/books');

app.use('/books', bookRoutes);

module.exports = app;
