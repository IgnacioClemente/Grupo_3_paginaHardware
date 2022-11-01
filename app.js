const express = require('express');
const app = express();

//app.get('/', function (req, res) {
//  res.send('views/index.html');
//});
app.get('views/index');
app.listen(3000, () => console.log('http://localhost:3000'))

const path = require('path'); // UNE DIRECTORIOS

app.set('views', path.resolve(__dirname, 'views')); 

app.use(express.static(path.resolve(__dirname, '../public')));