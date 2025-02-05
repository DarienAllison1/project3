const express = require('express');
const router = express.Router();
const { createBook, getBooks, updateBook, deleteBook } = require('../controllers/booksController');

router.post('/', createBook);
router.get('/', getBooks);
router.put('/:id', updateBook);
router.delete('/:id', deleteBook);

module.exports = router;
