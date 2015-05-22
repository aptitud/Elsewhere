var JSX = require('node-jsx').install();
var React = require('react');
var Discussion = require('./app/components/discussion');

module.exports = {

	index: function (req, res) {
		var id = req.params.id;

		var data =  {
			id : id,
			messages: [
				{
					timestamp: '2015-05-22T10:00:00',
					author: {
						id: 'PeterQwarnstrom',
						name: 'Peter Qwärnström'
					},
					content: 'Hello message!'
				},
				{
					timestamp: '2015-05-22T10:01:00',
					author: {
						id: '_asa',
						name: 'Åsa Liljegren'
					},
					content: 'Hello message 2!'
				},
				{
					timestamp: '2015-05-22T10:02:00',
					author: {
						id: 'perjansson',
						name: 'Per Jansson'
					},
					content: 'Hello message 3!'
				}
			]
		};

		var markup = React.renderComponentToString(Discussion({messages: data.messages}));

		// Render our 'home' template
		res.render('home', {
			markup: markup, // Pass rendered react markup
			state: JSON.stringify(data.messages) // Pass current state to client side
		});
	}

}