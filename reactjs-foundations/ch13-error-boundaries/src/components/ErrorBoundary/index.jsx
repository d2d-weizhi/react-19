import { Component } from 'react';

class ErrorBoundary extends Component {
	constructor(props) {
		super(props);
		this.state = { hasError: false, error: null, info: null };
	}

	static getDerivedStateFromError(error) {
		return { hasError: true };
	}

	componentDidCatch(error, info) {
		this.setState({error: `${error.message}`, info: `${info.componentStack}`});
		console.log(`error: ${error}`);
		console.log(`info: ${info}`);
	}

	render() {
		if (this.state.hasError) {
			return (
				<div class="errorPanel">
					<h1>Oops! There's been an error.</h1>
					<p>Error:<br />{this.state.error}</p>
					<p>More Information:<br />{this.state.info}</p>
				</div>
			);
		}
		return this.props.children;
	}
}

export default ErrorBoundary;