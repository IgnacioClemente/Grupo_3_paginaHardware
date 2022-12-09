const express = require('express');
const app = express();
const path = require('path'); // UNE DIRECTORIOS


const mainRoutes = require('./routes/mainRoutes');
const usersRoutes = require('./routes/usersRoutes');

app.set('views', path.join(__dirname, 'views'));
app.set('view engine', 'ejs');

app.use(express.static(path.join(__dirname, 'public')));

app.use('/', mainRoutes);

app.use('/users', usersRoutes);

// app.get('/', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'views/index.html'));
// });

// app.get('/login', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'views/login.html'));
// });

// app.get('/register', (req, res) => {
//   res.sendFile(path.resolve(__dirname, 'views/register.html'));
// });

app.listen(3000, () => {
  console.log('listening on http://localhost:3000');
});