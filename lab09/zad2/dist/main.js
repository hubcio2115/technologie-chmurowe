import express from 'express';
import { MongoClient } from 'mongodb';
const url = 'mongodb://db:27017';
const client = new MongoClient(url);
const app = express();
app.get('/users', async (req, res) => {
    await client.connect();
    const db = client.db('users');
    const result = await db.collection('users').findOne({ name: 'user' });
    return res.status(200).json({ result });
});
app.listen(3000, () => {
    console.log('Server is running on port 3000');
});
