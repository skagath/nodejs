const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('Hello from bitcot!...');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

