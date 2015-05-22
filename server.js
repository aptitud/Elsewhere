var express = require('express');
var app = express();
var path = require('path');
var dbAccess = require('./lib/dbAccess');
var config = require('./config')();

// hardcode right now
var mapper = require('./lib/twitterToDiscussionMapper');

app.use(express.static(path.join(__dirname, 'public')));

dbAccess.connectToDb(config.mongodbConnectionString);

// API
app.post('/api/discussions', function(req, res){
	var fulldata = "";
	req.on('data', function(chunk){
		console.log("data mottaget");
		fulldata += chunk.toString();
	});

	req.on('end', function(){
		var result = JSON.parse(fulldata);
		console.log("persisting data");
		var discussion = mapper.map(result);
		
		dbAccess.createDiscussion(discussion, function() {
			// ??
		});
		
		res.send(200);
	});
});

app.listen(config.appPort);
console.log('Listening on port ' + config.appPort);