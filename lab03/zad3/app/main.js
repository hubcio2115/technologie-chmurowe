import express from 'express';

const server = express();

server.get('/', async (_, res) => {
  return res.status(200).send('Hello from Express!');
});

server.listen(3000);
