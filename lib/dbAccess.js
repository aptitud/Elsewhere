var mongoose = require("mongoose");
var model = require("./model");

var Discussion = model.Discussion
var Message = model.Message;

module.exports.createDiscussion = function(discussion, callback){
		console.log(discussion);
	    Discussion
        .create(discussion,
            function (err, p) {
                if (err) {
                    callback(createError("Error adding discussion\n" + err));
                    return;
                }

                callback();
            });
   
};


module.exports.connectToDb = function (connectionString) {
    if (mongoose.connection.readyState === 0) { // not open
        var options = {
            server: {
                socketOptions: []
            },
            replset: {
                socketOptions: []
            }
        };
        options.server.socketOptions = options.replset.socketOptions = {
            keepAlive: 1
        };
        console.log('Connecting to MongoDb with connectionstring:', connectionString);
        console.log('Connecting to MongoDb with options:', options);
        mongoose.connect(connectionString, options);
    }
};

