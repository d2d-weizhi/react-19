import { useState } from 'react';

function SometimesBad() {
	const [message, setMessage] = useState();

	const handleClick = () => {
		const randomNumber = Math.floor(Math.random() * 2);

		if (randomNumber === 1) {
			setMessage({error: "there has been an error"});
		} else {
			setMessage("great");
		}
	}

	return (
		<>
			<button onClick={handleClick}>Mystery Button</button>
			{message}
		</>
	);
}

export default SometimesBad;