/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	getInitialState: function() {
		return {
			content: ''
		};
	},

	handleSubmit: function(e) {
		e.preventDefault();
		this.props.handleMessage(this.state.content);
		this.setState({content: ''});
	},

  handleChange: function(e) {
    this.setState({content: e.target.value})
  },

	render: function () {
		return (
			<form className="form messageform clearfix" onSubmit={this.handleSubmit}>
				<div className="form-group">
					<textarea className="form-control" value={this.state.content} onChange={this.handleChange} id="content"/>
					<button type="submit" className="btn btn-lg pull-right" disabled={!this.state.content}>Post</button>
				</div>
			</form>
		);
	}

});
