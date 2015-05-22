var dispatcher = require("../dispatcher"),
	emitter = require("../emitter");

var MessageStore = function() {

	dispatcher.register(function(payload) {
		switch (payload.type) {
			case "CreateMessage":
				this.createPost(payload.post);
				break;
		}
	}.bind(this));

	this.createPost = function(post) {
		console.log("Creating " + JSON.stringify(post));
		$.post('/api/discussions/' + '1' + '/messages', post);
	}

}

module.exports = new MessageStore();