/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	render: function (){
		return (
			<li className="list-group-item pointer">
				<div className="postheader">{this.props.post.author.name} ({this.props.post.author.id}), {this.props.post.timestamp}</div>
				<div className="postybody">{this.props.post.message}</div>
			</li>
		);
	}
});