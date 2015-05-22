/** @jsx React.DOM */
var React = require('react');
var MessageItem = require('./messageitem');
var MessageForm = require('./messageform');
var _ = require('underscore');
var dispatcher = require('../dispatcher');

module.exports = React.createClass( {

	getInitialState: function() {
		return {
			id : 1,
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
		}
	},
	renderMessages: function() {
		return _.map(this.state.messages, function(message) {
			return <MessageItem data={message} />;
		});
	},
	handleMessage: function(content) {
		var message = {
			author: { 
				id: '@_asa',
				name: 'Åsa Liljegren'
			},
			content: content
		};
		dispatcher.dispatch({type: 'CreateMessage', message: message});
	},
	render: function (){
		return (
			<div className="discussion">
				<div className="jumbotron">
					<h1>Discussion ({this.state.id})</h1>
				</div>				
				<ul className="list-group">
					<li className="list-group-item pointer"><MessageForm handleMessage={this.handleMessage} /></li>
					{this.renderMessages()}
				</ul>
			</div>
			);
	}
})