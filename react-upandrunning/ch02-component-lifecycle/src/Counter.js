import React from "react";
import LifecycleLoggerComponent from "./LifecycleLoggerComponent";

class Counter extends LifecycleLoggerComponent {
	static getName() {
		return 'Counter';
	}

	static defaultProps = {
		count: 0
	};

	render() {
		return <h3>{this.props.count}</h3>
	}
}

export default Counter;