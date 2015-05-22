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
			<form className="form clearfix" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<div className="input-group">
						<textarea className="form-control" id="content" rows="3"/>
						<span className="input-group-btn">
							<button type="submit" className="btn btn-primary">Post</button>
						</span>
					</div>
				</div>
			</form>
		);
	}

});