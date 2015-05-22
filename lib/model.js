var mongoose = require("mongoose");

var Schema = mongoose.Schema;

var Discussion = mongoose.model("Discussion", {
    messages: [{
         author: {
        id: String,
        name: String
    },
    content: String,
    timeStamp: String
    }]
});

var Message = mongoose.model("Message", {
    author: {
        id: String,
        name: String
    },
    content: String,
    timeStamp: String
});

var Author = mongoose.model("Author", {
	id: String,
    name: String
    
});


module.exports.Message = Message;
module.exports.Author = Author;
module.exports.Discussion = Discussion;