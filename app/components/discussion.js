/** @jsx React.DOM */
var React = require('react');
var Post = require('./post');
var _ = require('underscore');

module.exports = React.createClass( {

	getInitialState: function() {
		return {
			id : 1,
			posts: [
				{
					timestamp: '2015-05-22T10:00:00',
					author: '@PeterQwarnstrom',
					message: 'Hello message!'
				},
				{
					timestamp: '2015-05-22T10:01:00',
					author: '@_asa',
					message: 'Hello message 2!'
				},
				{
					timestamp: '2015-05-22T10:02:00',
					author: '@perjansson',
					message: 'Hello message 3!'
				}
			]
		}
	},
	renderPosts: function() {
		return _.map(this.state.posts, function(post) {
			return <Post message={post.message} />;
		});
	},

	render: function (){
		return (
			<ul>
				{this.renderPosts()}
			</ul>
			);
	}
})