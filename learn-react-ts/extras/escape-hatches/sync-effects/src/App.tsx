import React, { useState, useRef, useEffect } from 'react';
import { createConnection } from "./Chat";
import './App.css';

// @ts-ignore
function VideoPlayer({ src, isPlaying }) {
	const ref = useRef(null);
	
	useEffect(() => {
		if (isPlaying) {
			console.log("Calling video.play()");
			// @ts-ignore
			ref.current.play();
		} else {
			console.log("Calling video.pause()");
			// @ts-ignore
			ref.current.pause();
		}
	}, [isPlaying]);
	
	return <video ref={ref} src={src} loop playsInline />;
}

function ChatRoom() {
	useEffect(() => {
		const connection = createConnection();
		connection.connect();
		return () => {
			connection.disconnect();
		};
	}, []);
	return <h1>Welcome to the chat!</h1>;
}

function Playground() {
	const [text, setText] = useState('a');
	
	useEffect(() => {
		function onTimeout() {
			console.log('⏰ ' + text);
		}
		
		console.log('🌎 Schedule "' + text + '" log');
		const timeoutId = setTimeout(onTimeout, 3000);
		
		return () => {
			console.log('Cancel "' + text + '" log');
			clearTimeout(timeoutId);
		};
	}, [text]);
	
	return (
			<>
				<label>
					What to log:{' '}
					<input
						value={text}
						onChange={e => setText(e.target.value)}
						/>
				</label>
				<h1>{text}</h1>
			</>
	);
}

function App() {
	const [show, setShow] = useState(false);
	
	return (
			<div className="App">
				{/*<input value={text} onChange={e => setText(e.target.value)} />
				<button onClick={() => setIsPlaying(!isPlaying)}>
					{ isPlaying ? 'Pause' : 'Play' }
				</button>
				<VideoPlayer
					isPlaying={isPlaying}
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />*/}
				<button onClick={() => setShow(!show)}>
					{show ? 'Unmount' : 'Mount'} the component
				</button>
				{show && <hr />}
				{show && <Playground />}
			</div>
	);
}

export default App;
