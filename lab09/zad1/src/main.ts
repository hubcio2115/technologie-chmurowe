import express from 'express';

const app = express();

app.get('/test', async (req, res) => {
  res.status(200).json({ message: 'Status: Live' });
});

app.listen(3000, () => {
  console.log('Server is running on port 3000');
});
