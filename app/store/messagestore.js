var dispatcher = require("../dispatcher"),
	emitter = require("../emitter"),
	socket = require('socket.io-client')();

socket.on('connect', function(){
	console.log("connected on client");
});

var MessageStore = function() {

	dispatcher.register(function(payload) {
		switch (payload.type) {
			case "CreateMessage":
				this.createMessage(payload.message);
				break;
		}
	}.bind(this));

	this.createMessage = function(message) {
		socket.emit('createmessage', message);
		// TODO: If error call emit error event on emitter and make sure message is removed from GUI?
	};

	socket.on('messagecreated', function(message) {
		emitter.emit("MessageCreated", message);
	});

};

module.exports = new MessageStore();