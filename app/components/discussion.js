/** @jsx React.DOM */
var React = require('react');
var MessageItem = require('./messageitem');
var MessageForm = require('./messageform');
var _ = require('underscore');
var dispatcher = require('../dispatcher');
var emitter = require('../emitter');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			messages: this.props.messages
		}
	},

	addMessageToState: function (message) {
		this.state.messages.unshift(message);
		this.setState({messages: this.state.messages});
	},

	componentWillMount: function() {
		emitter.on("MessageCreated", function(message) {
			this.addMessageToState(message);
		}.bind(this));
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
		this.addMessageToState(message);
		dispatcher.dispatch({type: 'CreateMessage', message: message});
	},

	render: function(){
		return (
			<div>
				<header>
					<p className="text-center">Let&#39;s Take It Here</p>
				</header>
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