import PropTypes from 'prop-types';

function MyComponent (props) {
	return <p>The value is {props.itemValue}</p>;
}

MyComponent.propTypes = {
	itemValue: PropTypes.number
}

export default MyComponent;