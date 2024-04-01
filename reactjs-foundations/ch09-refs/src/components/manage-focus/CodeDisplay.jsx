import React, { Component } from "react";

class CodeDisplay extends Component {
	constructor (props) {
		super (props);

		this.state = {message: '', code: ''};
		this.codeField = React.createRef();
		this.copyCode = this.copyCode.bind(this);
	}

	componentDidUpdate() {
		setTimeout(() => this.setState({message: ''}), 3000);
	}

	copyCode() {
		this.codeField.current.select();
		this.setState({message: 'code copied!', code: this.codeField.current.value});
	}

	render() {
		return (
			<>
				<input value={this.props.yourCode}
					ref={this.codeField} /> {this.state.message}, Code: {this.state.code}<br />
				<button onClick={this.copyCode}>Copy your Code</button>
			</>
		);
	}
}

export default CodeDisplay;