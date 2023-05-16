import express from 'express';
import { MongoClient, ObjectId } from 'mongodb';
import { createClient } from 'redis';

const app = express();
app.use(express.json());

const url = 'mongodb://mongo:27017';
const client = new MongoClient(url);

const redis = createClient({
  socket: { port: 6379, host: 'redis' },
});
redis.on('error', (err) => console.error('Redis Client Error', err));

app.get('/tasks', async (req, res) => {
  await client.connect();
  const tasks = await client.db('test').collection('tasks').find().toArray();

  res.send(tasks);
  client.close();
});

app.post('/tasks', async (req, res) => {
  await client.connect();
  const result = await client
    .db('test')
    .collection('tasks')
    .insertOne(req.body);

  res.send(result);
  client.close();
});

app.put('/tasks/:id', async (req, res) => {
  await client.connect();
  const result = await client
    .db('test')
    .collection('tasks')
    .updateOne({ _id: new ObjectId(req.params.id) }, { $set: req.body });

  await redis.connect();

  const oldValue = await redis.get('zaktualizowane');
  const newValue = oldValue ? parseInt(oldValue) + 1 : 1;
  await redis.set('zaktualizowane', newValue);

  res.send(result);
  redis.quit();
  client.close();
});

app.listen(3000, () => {
  console.log(`Example app listening at http://localhost:${3000}`);
});
