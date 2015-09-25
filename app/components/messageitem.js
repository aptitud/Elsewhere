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
  	var classString = 'messageitem bubble';
		if (this.props.data.IsNew) {
			classString = classString + ' is-new';
		}
		return (
			<section className={classString}>
				<div className="header clearfix">
					<div className="pull-left">{this.props.data.CreatedBy}</div>
					<div className="pull-right" title={this.timeFormatted(this.props.data.CreatedAt)}>{this.timeago(this.props.data.CreatedAt)}</div>
				</div>
				<div className="body">{this.props.data.Text}</div>
			</section>
		);
	}
});
