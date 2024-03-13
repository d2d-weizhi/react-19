import { Component } from "react";

class LifecycleLoggerComponent extends Component {
	static getName() {}

	componentDidMount() {
		console.log(this.constructor.getName() + '::componentDidMount');
	}

	componentWillUnmount() {
		console.log(this.constructor.getName() + '::componentWillUnmount');
	}

	componentDidUpdate(prevProps, prevState, snapshot) {
		console.log(this.constructor.getName() + '::componentDidUpdate');
	}
}

export default LifecycleLoggerComponent;