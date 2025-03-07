const express = require('express');
const app = express();
const port = 80;

app.get('/', (req, res) => {
  res.send('this is the sample application!...');
});

app.listen(port, () => {
  console.log(`App listening on port ${port}`);
});

