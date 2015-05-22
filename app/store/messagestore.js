var dispatcher = require("../dispatcher"),
	emitter = require("../emitter");

var MessageStore = function() {

	dispatcher.register(function(payload) {
		switch (payload.type) {
			case "CreateMessage":
				this.createMessage(payload.message);
				break;
		}
	}.bind(this));

	this.createMessage = function(message) {
		console.log("Creating " + JSON.stringify(message));
		$.post('/api/discussions/' + '1' + '/messages', message);
	}

}

module.exports = new MessageStore();