const { MongoClient } = require('mongodb');

const uri = 'mongodb://localhost:27017'; // Replace if using MongoDB Atlas
let client;

async function connectDB() {
    if (!client) {
        client = new MongoClient(uri);
        await client.connect();
        console.log('Connected to MongoDB');
    }
    return client.db('LibraryLedger');
}

module.exports = connectDB;
