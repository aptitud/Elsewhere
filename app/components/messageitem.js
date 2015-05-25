/** @jsx React.DOM */
var React = require('react');
var timeAgo = require('timeago');

module.exports = React.createClass({

	timeago: function (date) {
		return (timeAgo(date));
	},
	timeFormatted: function (date) {
		return date.toLocaleString();
	},
	render: function (){
		return ( 
			<section className="messageitem bubble">
				<div className="header clearfix">
					<div className="pull-left">{this.props.data.author.name} ({this.props.data.author.id})</div>
					<div className="pull-right" title={this.timeFormatted(this.props.data.timestamp)}>{this.timeago(this.props.data.timestamp)}</div>
				</div>
				<div className="body">{this.props.data.content}</div>
			</section>
		);
	}
});