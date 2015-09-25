var io;
var rp = require('request-promise');

module.exports.connection = function (theIo, socket) {

	console.log("Connected on server");

	socket.on('createmessage', function (message) {

		var options = {
		    uri: 'http://continueelsewhere.azurewebsites.net/api/discussions/1/items',
		    method: 'POST',
		    json: true,
		    body: {
		        Item: {
		            Channel: "Web",
		            Text: message.content,
		            CreatedBy: "@per_jansson",
		            CreatedAt: "2015-09-26T09:30:57.9065989+00:00"
		        },
		        MessageContext: {
		            Version: 1,
		            MessageType: "DiscussionItem"
		        }
		    }
		};

		console.log("### Creating discussion item: " + JSON.stringify(options));

		rp(options)
		    .then(function (data) {
		        console.log("### Got data: " + data)
		        socket.broadcast.emit('messagecreated', message);
		    })
		    .catch(function (error) {
		        console.log("### Got error: " + error)
		    });

	});

}

module.exports.getDiscussion = function(id, callback) {
	var discussion = null;

	var options = {
    uri : 'http://continueelsewhere.azurewebsites.net/api/discussions/' + id,
    method : 'GET'
	};

	console.log("### Getting discussions: " + options)

	rp(options)
	    .then(function(data) {
				console.log("### Got data: " + data)
				var parsed = JSON.parse(data);
				var discussion = {
					id : parsed.Discussion.Id,
					messages: parsed.Discussion.Items
				};
				callback(discussion);
			})
	    .catch(function(error) {
				console.log("### Got error: " + error)
				callback(error);
			});
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
