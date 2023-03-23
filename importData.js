const { MongoClient } = require('mongodb');
const fs = require('fs');
const uri = 'mongodb+srv://cerimay:TMMdavJN6eSfZlmo@cmportfolio.jcg4twl.mongodb.net/projects'; // Replace <password> with your actual password
const dbName = 'projects'; // Replace with your MongoDB Atlas connection string
const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true });

async function importData() {
  try {
    await client.connect();
    const db = client.db(dbName);
    const data = JSON.parse(fs.readFileSync('db.json', 'utf8'));
    for (const [collectionName, documents] of Object.entries(data)) {
      const collection = db.collection(collectionName);
      await collection.insertMany(documents);
      console.log(`Inserted ${documents.length} documents into collection '${collectionName}'`);
    }
    console.log('Data import completed.');
  } catch (err) {
    console.error('Error importing data:', err);
  } finally {
    await client.close();
  }
}
importData();