var express = require('express');
var exphbs = require('express-handlebars');
var app = express();
var path = require('path');
var routes = require('./routes');

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Index Route
app.get('/:id', routes.index);

app.listen(4444);
console.log('Listening on port 4444');