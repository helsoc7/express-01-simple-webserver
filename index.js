const express = require('express');
const app = express();
const PORT = 3000;


app.get('/', (req, res) => {
  res.send('Willkommen bei meinem ersten Express-Server!');
});


app.listen(PORT, () => {
  console.log(`Server läuft auf http://localhost:${PORT}`);
});