var JSX = require('node-jsx').install();
var React = require('react');
var Search = require('./app/components/search');
var Discussion = require('./app/components/discussion');

module.exports = {

	search: function (req, res) {

		var markup = React.renderComponentToString(Search());

		res.render('search', {
			markup: markup
		});
	},

	discussion: function (req, res) {
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
					content: 'Bacon ipsum dolor amet biltong ground round pork chop jowl ribeye ham hock shoulder. Prosciutto turkey chuck ball tip, turducken jowl andouille filet mignon cow leberkas. Prosciutto salami venison filet mignon cow pig bresaola ham pork chop frankfurter biltong spare ribs. Spare ribs pork loin jerky, leberkas ribeye meatball pastrami landjaeger shoulder corned beef ground round bacon boudin.'
				},
				{
					timestamp: '2015-05-22T10:01:00',
					author: {
						id: '_asa',
						name: 'Åsa Liljegren'
					},
					content: 'Short loin ham hock brisket, frankfurter porchetta salami jerky leberkas filet mignon chicken corned beef beef pig. Turducken venison pig jerky pork belly jowl kevin cupim ham hock doner short ribs pork loin porchetta tongue sausage. Andouille strip steak shank pork belly pig. Turducken brisket fatback chicken ribeye drumstick short loin kielbasa. Jerky short loin pig pork belly shankle strip steak rump capicola. Kevin beef ribs filet mignon picanha tail. Cow meatloaf porchetta, t-bone jerky meatball biltong.'
				},
				{
					timestamp: '2015-05-22T10:02:00',
					author: {
						id: 'perjansson',
						name: 'Per Jansson'
					},
					content: 'Meatloaf beef ribs strip steak porchetta. Drumstick sausage kevin, pork loin pancetta shankle ground round shoulder. Jerky alcatra biltong shankle prosciutto. Shank chuck short loin tri-tip, cupim brisket cow ribeye filet mignon shankle beef ribs porchetta. Fatback beef ribs picanha ham hock pork biltong kielbasa ribeye venison jowl short ribs. Shankle beef jerky pork, picanha biltong leberkas bacon bresaola pork belly flank.\nShoulder porchetta swine chicken, jerky strip steak salami kielbasa. Jerky andouille meatloaf tail salami, ham pancetta cow brisket hamburger cupim ham hock ground round. Sausage pork chop prosciutto chuck pork belly. Strip steak fatback turkey, chicken jowl pancetta pork chop tail hamburger ribeye porchetta.\nHam capicola tail pastrami beef ribs. Shank bacon pork loin, landjaeger strip steak tongue fatback jerky. Porchetta shank ribeye, turkey picanha hamburger jowl ground round. Doner andouille frankfurter hamburger pancetta drumstick brisket pork chop turkey sausage corned beef shankle. Bacon tenderloin cow, kielbasa rump pork loin strip steak shankle doner chicken.'
				}
			]
		};

		var markup = React.renderComponentToString(Discussion({messages: data.messages}));

		// Render our 'discussion' template
		res.render('discussion', {
			markup: markup,
			state: JSON.stringify(data.messages)
		});
	}

}