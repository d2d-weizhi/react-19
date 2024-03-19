import React, { Component } from 'react';
import shallowCompare from 'react-addons-shallow-compare';

class ShallowCompare extends Component {
	shouldComponentUpdate(nextProps, nextState) {
		return shallowCompare(this, nextProps, nextState);
	}

	render() {
		return <div>foo</div>;
	}
}

export default ShallowCompare;