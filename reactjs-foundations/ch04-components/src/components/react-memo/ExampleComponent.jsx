import React from 'react';

function ExampleComponent (props) {
	return (
		<p>
			Hi, {props.firstName}. This component returns the same thing 
			when given the same props.
		</p>
	);
}

export default React.memo(ExampleComponent);