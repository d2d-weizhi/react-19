import { useEffect, useState } from 'react';

function TimerConditionalFun (props) {
	const [count, setCount] = useState(0);
	const [gameNumber, setGameNumber] = useState(0);

	useEffect(() => {
		let time = 0;
		const interval = setInterval(() => {
			console.log(time++);
			if (time === 10) {
				console.log(`time's up!`);
				clearInterval(interval);
			}
		}, 1000);
		return () => clearInterval(interval);
	}, [gameNumber]);

	return (
		<>
			<h1>Game Number {gameNumber}</h1>
			<p>
				Click as fast as you can!
			</p>
			<p>
				<button onClick={() => setCount((prev) => prev + 1)}>{count}</button>{' '}
				<button onClick={() => {
					setGameNumber((prev) => prev + 1);
					setCount(0);
					}}>New Game</button>
			</p>
		</>
	);
}

export default TimerConditionalFun;