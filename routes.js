var JSX = require('node-jsx').install();
var React = require('react');
var SearchComponent = require('./app/components/search');
var DiscussionComponent = require('./app/components/discussion');

var discussion = require('./lib/discussion');

module.exports = {

	search: function (req, res) {

		var markup = React.renderComponentToString(SearchComponent());

		res.render('search', {
			markup: markup
		});
	},

	getDiscussion: function (req, res) {
		var data = discussion.getDiscussion(req.params.id);

		var markup = React.renderComponentToString(DiscussionComponent({messages: data.messages}));

		res.render('discussion', {
			markup: markup,
			state: JSON.stringify(data.messages)
		});
	}

}