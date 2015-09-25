var io;
var rp = require('request-promise');

module.exports.connection = function(theIo, socket) {

	console.log("Connected on server");

	socket.on('createmessage', function(message) {

		var options = {
			uri: 'http://continueelsewhere.azurewebsites.net/api/discussions/1/items',
			method: 'POST',
			json: true,
			body: message
		};

		rp(options)
			.then(function(data) {
				socket.broadcast.emit('messagecreated', message);
			})
			.catch(function(error) {
				console.log("### Got error when creating discussion item: " + error)
			});

	});

}

module.exports.getDiscussion = function(id, callback) {
	var discussion = null;

	var options = {
		uri: 'http://continueelsewhere.azurewebsites.net/api/discussions/' + id,
		method: 'GET'
	};

	rp(options)
		.then(function(data) {
			var parsed = JSON.parse(data);
			var discussion = {
				id: parsed.Discussion.Id,
				messages: parsed.Discussion.Items
			};
			callback(discussion);
		})
		.catch(function(error) {
			console.log("### Got error when getting discussion: " + error)
			callback(error);
		});
}
