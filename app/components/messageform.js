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
					<textarea className="form-control" id="content"/>
					<button type="submit" className="btn pull-right">Post</button>
				</div>
			</form>
		);
	}

});
