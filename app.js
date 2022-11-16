const express = require('express');
const app = express();
const path = require('path'); // UNE DIRECTORIOS

app.use(express.static(path.resolve(__dirname, 'public')));

app.get('/', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/index.html'));
});

app.get('/login', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/login.html'));
});

app.get('/register', (req, res) => {
  res.sendFile(path.resolve(__dirname, 'views/register.html'));
});

app.listen(3000, () => {
    console.log("Server Running on port",3000);
});