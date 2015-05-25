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
		$.post('/discussions/1/messages', message);
		// TODO: If error call error handler that removes message from GUI?
	}

}

module.exports = new MessageStore();