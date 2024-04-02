import { useEffect } from 'react';

function TimerFun() {
	useEffect(() => {
		let time = 0;
		const interval = setInterval(() => {
			console.log(time++);
		}, 1000);
		return () => clearInterval(interval);
	});

	return (<p>Check the console to see the timer.</p>);
}

export default TimerFun;