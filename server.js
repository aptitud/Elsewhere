var express = require('express');
var exphbs = require('express-handlebars');
var bodyParser = require('body-parser');
var app = express();
var path = require('path');
var routes = require('./routes');
var discussionrepository = require('./lib/discussionrepository.js');

// Set /public as our static content dir
app.use("/", express.static(__dirname + "/public/"));

// Set handlebars as the templating engine
app.engine('handlebars', exphbs({ defaultLayout: 'main'}));
app.set('view engine', 'handlebars');

// Parse application/x-www-form-urlencoded and application/json
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json())

// Routing
app.get('/', routes.search);
app.get('/discussions/:id', routes.getDiscussion);

var appPort = Number(process.env.PORT || 4444);
var server = app.listen(appPort);
console.log('Listening on port ' + appPort);

// Initialize socket.io
var io = require('socket.io').listen(server);
io.on('connection', function (socket) {
    discussionrepository.connection(io, socket);
});
