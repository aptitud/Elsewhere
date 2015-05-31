/** @jsx React.DOM */

require("./store/messagestore");

var React = require('react');
var Discussion = require('./components/discussion');

// Snag the initial state that was passed from the server side
var initialState = JSON.parse(document.getElementById('initial-state').innerHTML);

$(function() {

	React.renderComponent(
		<Discussion messages={initialState} />,
		$("#app")[0]);

});