import PropTypes from 'prop-types';
import { Component } from 'react';

class WelcomeMessage extends Component {
	static propTypes = {
		firstName: PropTypes.string
	}

	render() {
		return <h1>Welcome, {this.props.firstName}!</h1>;
	}
}

export default WelcomeMessage;