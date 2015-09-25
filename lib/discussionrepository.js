var io;
var rp = require('request-promise');

module.exports.connection = function (theIo, socket) {

	socket.on('createmessage', function (message) {
		//dummyMessages.unshift(message);
		socket.broadcast.emit('messagecreated', message);
	});

}

module.exports.getDiscussion = function(id, callback) {
	var discussion = null;

		var options = {
	    uri : 'http://continueelsewhere.azurewebsites.net/api/discussions/' + id,
	    method : 'GET'
	};

	rp(options)
	    .then(function(data) {
				var parsed = JSON.parse(data);
				var discussion = {
					id : id,
					messages: parsed.Items
				};
				callback(discussion);
			})
	    .catch(console.error);
	}
/*
	http.get({
			host: 'continueelsewhere.azurewebsites.net',
			path: '/api/discussions/' + id
    }, function(response) {
        // Continuously update stream with data
        var body = '';
        response.on('data', function(d) {
            body += d;
        });
        response.on('end', function() {
						var parsed = JSON.parse(body);

					  discussion = {
							id : id,
							messages: parsed.Items
						};

						callback(discussion);
        });
				response.on('error', function(e) {
				    console.log("Got error: " + e.message);
				})
    });*/
