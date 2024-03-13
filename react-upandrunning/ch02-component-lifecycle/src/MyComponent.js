import React, { Component } from "react";

class MyComponent extends Component {
	static defaultProps = {
		job: 'engineer'
	};

	render() {
		return (
			<span>My name is <em>{this.props.name}</em>, the {this.props.job}</span>
		);
	}
}

export default MyComponent;