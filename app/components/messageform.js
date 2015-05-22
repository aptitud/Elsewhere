/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var messageInput = $('#message');
		this.props.handleMessage(messageInput.val());
		messageInput.val("");
	},
	render: function () {
		return (
			<form className="form clearfix" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<label htmlFor="message">Message</label>
					<div className="input-group">
						<textarea className="form-control" id="message" rows="3"/>
						<span className="input-group-btn">
							<button type="submit" className="btn btn-primary">Post</button>
						</span>
					</div>
				</div>
			</form>
		);
	}

});