/** @jsx React.DOM */
var React = require('react');
var MessageItem = require('./messageitem');
var MessageForm = require('./messageform');
var _ = require('underscore');
var dispatcher = require('../dispatcher');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			messages: this.props.messages
		}
	},

	renderMessages: function() {
		return _.map(this.state.messages, function(message) {
			return (
				<MessageItem data={message} />
			);
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
			<div>
				<div className="discussion">
					<div className="container">
						<section><MessageForm handleMessage={this.handleMessage} /></section>
						{this.renderMessages()}
					</div>
				</div>
				<footer className="footer">
					<div className="container">
						A discussion ({this.state.id}) going on...
					</div>
				</footer>
			</div>
			);
	}
})