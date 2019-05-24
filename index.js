var express = require('express');
var todoController = require('./controllers/todoController');

var app = express();

// set up template
app.set('view engine', 'ejs');

// static files
app.use(express.static('./public'));

// fire todo controller
todoController(app);

// listen to p:3000
app.listen('3000');
console.log('Listening to port 3000');

