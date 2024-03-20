import { Component } from "react";
import { PropTypes } from 'prop-types';
import Person from './Person';

class FamilyTree extends Component {
	render() {
		return <p>{this.props.father.firstName}</p>;
	}
}

FamilyTree.propTypes = {
	father: PropTypes.instanceOf(Person)
}

export default FamilyTree;