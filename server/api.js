const express = require('express');
const router = express.Router();
const MongoClient = require('mongodb').MongoClient;
const uri = 'mongodb+srv://cerimay:TMMdavJN6eSfZlmo@cmportfolio.jcg4twl.mongodb.net/projects'; // Replace with your MongoDB connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

router.get('/data', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('projects'); // Replace with your database name
    const collection = db.collection('projects'); // Replace with your collection name
    const data = await collection.find({}).toArray();
    res.json(data);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: 'An error occurred while fetching data from the database' });
  }
});
module.exports = router;