const express = require('express');
const app = express();

app.use(express.static('../frontend'));

app.get('/api/message', (req, res) => {
  const data = { message: 'Hello from the backend!' };
  res.json(data);
});

const port = 3000;
app.listen(port, () => {
  console.log(`Server listening on port ${port}.`);
});
