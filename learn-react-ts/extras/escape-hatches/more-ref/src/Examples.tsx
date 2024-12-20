import { useRef, useState, useEffect } from 'react';
import { createConnection } from "./Chat";

export function Counter() {
	let ref = useRef(0);
	
	function handleClick() {
		ref.current += 1;
		alert('You clicked ' + ref.current + ' times!');
	}
	
	return (
			<button onClick={handleClick}>
				Click Me!
			</button>
	);
}

export function RefForm() {
	const inputRef = useRef(null);
	
	function handleClick() {
		// @ts-ignore
		inputRef.current.focus();
	}
	
	return (
			<>
				<input ref={inputRef} />
				<button onClick={handleClick}>Focus the input</button>
			</>
	);
}

// @ts-ignore
export function RefVideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);
	
	useEffect(() => {
		if (isPlaying) {
			// @ts-ignore
			ref.current.play();
		} else {
			// @ts-ignore
			ref.current.pause();
		}
	}, [isPlaying]);
	
	return <video ref={ref} src={src} loop playsInline />;
}

export function ChatRoom() {
	useEffect(() => {
		const connection = createConnection();
		connection.connect();
		return () => connection.disconnect();
	}, []);
	
	return <h1>Welcome to the chat!</h1>;
}