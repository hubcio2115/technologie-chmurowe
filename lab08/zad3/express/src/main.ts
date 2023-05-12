import express from 'express';
import { createClient } from 'redis';
import pg from 'pg';
const { Client } = pg;

const redis = createClient({
  socket: { port: 6379, host: 'lab08zad3-redis' },
});
redis.on('error', (err) => console.error('Redis Client Error', err));

const postgres = new Client({
  host: 'lab08zad3-postgres',
  port: 5432,
  user: 'postgres',
  password: 'postgres',
});

const app = express();

app.get('/hello', async (req, res) => {
  return res.status(200).json({ message: 'Hello' });
});

app.get('/redis', async (req, res) => {
  await redis.connect();

  res.status(200).json({ message: await redis.ping() });

  await redis.quit();
});

app.get('/postgres/:id', async (req, res) => {
  await postgres.connect();

  const queryResult = await postgres.query('SELECT $1::text as message', [
    'Hello world!',
  ]);
  res.status(200).json({ message: queryResult.rows[0].message });

  await postgres.end();
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
