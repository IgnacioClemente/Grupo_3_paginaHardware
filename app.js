const express = require('express');
const app = express();

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.listen(3000, () => {
    console.log("Server Running on port",3000);
});

const path = require('path'); // UNE DIRECTORIOS

app.set('views', path.resolve(__dirname, 'views')); 

app.use(express.static(path.resolve(__dirname, '../public')));