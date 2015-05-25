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

// Routing
app.get('/', routes.search);
app.get('/discussions/:id', routes.discussion);

var appPort = Number(process.env.PORT || 4444);
app.listen(appPort);
console.log('Listening on port ' + appPort);