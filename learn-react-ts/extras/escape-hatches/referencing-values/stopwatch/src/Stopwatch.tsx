import { useState, useRef } from "react";

export default function Stopwatch() {
	const [startTime, setStartTime] = useState(0);
	const [now, setNow] = useState(0);
	const intervalRef = useRef(null);
	
	function handleStart() {
		// Start counting.
		setStartTime(Date.now());
		setNow(Date.now());
		
		// @ts-ignore
		clearInterval(intervalRef.current);
		// @ts-ignore
		intervalRef.current = setInterval(() => {
			// Update the current time every 10ms.
			setNow(Date.now());
		}, 10);
	}
	
	function handleStop() {
		// @ts-ignore
		clearInterval(intervalRef.current);
	}
	
	let secondsPassed = 0;
	if (startTime != null && now != null) {
		secondsPassed = (now - startTime) / 1000;
	}
	
	return (
			<>
				<h1>Time passed: {secondsPassed.toFixed(3)}</h1>
				<button onClick={handleStart}>
					Start
				</button>
				<button onClick={handleStop}>
					Stop
				</button>
			</>
	);
}