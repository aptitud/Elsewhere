var model = require("./model");
var Discussion = model.Discussion;
var Message = model.Message;


module.exports.map = function(tweet){

	var discussion = new Discussion();
	var msg = new Message();
	msg.content = tweet.text;
	var msgs = [msg];
	discussion.messages = msgs;
	return discussion;

}