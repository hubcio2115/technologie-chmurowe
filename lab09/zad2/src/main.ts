import express from 'express';
import { MongoClient } from 'mongodb';

const app = express();
app.use(express.json());

app.get('/test', async (req, res) => {
  res.status(200).json({ message: 'Status: Live' });
});

const url = 'mongodb://lab09zad2-db:27017';
const client = new MongoClient(url);

app.get('/clients', async (req, res) => {
  await client.connect();
  const users = await client.db('test').collection('clients').find().toArray();

  res.send(users);
  client.close();
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
