import { useState } from "react";
import Counter from './Counter';

function CounterController() {
	const [displayCounter, setDisplayCounter] = useState(true);

	function toggleCounter() {
		setDisplayCounter(!displayCounter);
	}

	return (
		<div>
			{ displayCounter ? <Counter /> : null }
			<button onClick={toggleCounter}>Toggle Count</button>
		</div>
	);
}

export default CounterController;