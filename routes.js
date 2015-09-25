var discussion = require('./lib/discussionrepository');

var JSX = require('node-jsx').install();
var React = require('react');
var SearchComponent = require('./app/components/search');
var DiscussionComponent = require('./app/components/discussion');


module.exports = {

	search: function (req, res) {
		var markup = React.renderComponentToString(SearchComponent());
		res.render('search', {
			markup: markup
		});
	},

	getDiscussion: function (req, res) {
		discussion.getDiscussion(req.params.id, function(discussion) {
			var markup = React.renderComponentToString(DiscussionComponent({messages: discussion.messages}));
			res.render('discussion', {
				markup: markup,
				state: JSON.stringify(discussion.messages)
			});
		});
	}

}
