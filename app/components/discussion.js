/** @jsx React.DOM */
var React = require('react');
var MessageItem = require('./messageitem');
var MessageForm = require('./messageform');
var _ = require('underscore');
var dispatcher = require('../dispatcher');

module.exports = React.createClass( {
	getInitialState: function() {
		return {
			messages: this.props.messages
		}
	},
	renderMessages: function() {
		return _.map(this.state.messages, function(message) {
		console.log("renderMessages: " + JSON.stringify(message));
			return <MessageItem data={message} />;
		});
	},
	handleMessage: function(content) {
		var message = {
			author: { 
				id: '@_asa',
				name: 'Åsa Liljegren'
			},
			content: content,
			timestamp: new Date().toString()
		};
		this.state.messages.unshift(message);
		this.setState({messages: this.state.messages});
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