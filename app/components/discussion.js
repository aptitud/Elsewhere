/** @jsx React.DOM */
var React = require('react');
var MessageItem = require('./messageitem');
var MessageForm = require('./messageform');
var _ = require('underscore');
var dispatcher = require('../dispatcher');
var emitter = require('../emitter');
var $ = require('jquery');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			messages: this.props.messages
		};
	},

	addMessageToState: function (message) {
		this.state.messages.push(message);
		this.setState({messages: this.state.messages});
	},

	componentWillMount: function() {
		emitter.on("MessageCreated", function(message) {
			this.addMessageToState(message);
		}.bind(this));
	},

	componentDidUpdate: function() {
		//$(".is-new").slideUp(200).delay(200).fadeIn(400);
		$(".is-new").removeClass("is-new").addClass("animation tada");
	},

	renderMessages: function() {
		var messages = _.sortBy(this.state.messages, function(message) {
			return message.CreatedAt;
		});
		messages.reverse();
		return _.map(messages, function(message) {
			return (
				<MessageItem data={message} />
			);
		});
	},

	handleMessage: function(content) {
		var message = {
			Item: {
				Channel: "Web",
				Text: content,
				CreatedBy: "@fake_user",
				CreatedAt: new Date(),
				IsNew: true
			},
			MessageContext: {
				Version: 1,
				MessageType: "DiscussionItem"
			}
		};
		this.addMessageToState(message.Item);
		dispatcher.dispatch({type: 'CreateMessage', message: message});
	},

	render: function(){
		return (
			<div>
				<header>
					<p className="text-center">let&#39;s take it here &nbsp;<i className="fa fa-comment"></i></p>
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
});
