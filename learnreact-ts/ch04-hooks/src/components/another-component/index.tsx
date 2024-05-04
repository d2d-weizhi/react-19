import { useState, useEffect } from 'react';

export default function AnotherComponent() {
	const [clicked, setClicked] = useState(false);

	useEffect(() => {
		if (clicked) {
			console.log('Some effect');
		}
	}, [clicked]);

	function handleClick() {
		setClicked(true);
	}

	return <button onClick={handleClick}>Cause effect</button>;
}
