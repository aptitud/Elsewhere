/** @jsx React.DOM */

require("./store/messagestore");

var React = require('react');
var Discussion = require('./components/discussion');

$(function() {

	React.renderComponent(
		<Discussion />,
		$("#app")[0]);

});