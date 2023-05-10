import express from 'express';
import { createClient } from 'redis';

const db = createClient({
  socket: { port: 6379, host: 'lab08zad2-db' },
});
db.on('error', (err) => console.error('Redis Client Error', err));

const app = express();

app.get('/hello', async (req, res) => {
  return res.status(200).json({ message: 'Hello' });
});

app.get('/', async (req, res) => {
  await db.connect();

  res.status(200).json({ message: await db.ping() });

  await db.quit();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
