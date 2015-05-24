/** @jsx React.DOM */
var React = require('react');

module.exports = React.createClass({

	render: function (){
		return ( 
			<form className="form-inline searchform clearfix text-center">
				<div className="form-group">
					<input type="text" className="form-control" placeholder="Search any discussion..."/>
				</div>
			</form>
		);
	}
});