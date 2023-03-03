import express from 'express';

const server = express();

server.get('/', (_, res) => {
  res.status(200).json({ date: new Date() });
});

server.listen(8080);
