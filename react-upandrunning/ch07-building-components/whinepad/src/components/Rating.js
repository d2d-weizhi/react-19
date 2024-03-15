import classNames from 'classnames';
import React, { useState } from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

function Rating ({id, defaultValue = 0, max = 5, readonly = false}) {
	const [rating, setRating] = useState(defaultValue);
	const [tempRating, setTempRating] = useState(defaultValue);

	const stars = [];

	return (
		<span>{stars}</span>
	);
}

Rating.propTypes = {
	defaultValue: PropTypes.number,
	readonly: PropTypes.bool,
	max: PropTypes.number,
};

export default Rating;