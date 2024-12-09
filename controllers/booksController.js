const connectDB = require('../db');
const { ObjectId } = require('mongodb');

async function createBook(req, res) {
    try {
        const { title, author, genre, type } = req.body;
        const db = await connectDB();
        const result = await db.collection('books').insertOne({ title, author, genre, type });
        res.status(201).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function getBooks(req, res) {
    try {
        const db = await connectDB();
        const books = await db.collection('books').find().toArray();
        res.status(200).json(books);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function updateBook(req, res) {
    try {
        const { id } = req.params;
        const updates = req.body;
        const db = await connectDB();
        const result = await db.collection('books').updateOne({ _id: new ObjectId(id) }, { $set: updates });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

async function deleteBook(req, res) {
    try {
        const { id } = req.params;
        const db = await connectDB();
        const result = await db.collection('books').deleteOne({ _id: new ObjectId(id) });
        res.status(200).json(result);
    } catch (err) {
        res.status(500).json({ error: err.message });
    }
}

module.exports = { createBook, getBooks, updateBook, deleteBook };
