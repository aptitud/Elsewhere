/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	render: function (){
		return (
			<li className="list-group-item pointer messageitem">
				<div className="header">{this.props.data.author.name} ({this.props.data.author.id}), {this.props.data.timestamp}</div>
				<div className="body">{this.props.data.content}</div>
			</li>
		);
	}
});