/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({
	handleSubmit: function(e) {
		e.preventDefault();
		var contentInput = $('#content');
		this.props.handleMessage(contentInput.val());
		contentInput.val("");
	},
	render: function () {
		return (
			<form className="form messageform clearfix" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<textarea className="form-control" id="content" rows="10"/>
					<button type="submit" className="btn btn-default pull-right">Post</button>
				</div>
			</form>
		);
	}

});