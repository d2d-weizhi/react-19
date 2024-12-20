import React, { useState } from 'react';
import './App.css';
import { ChatRoom } from './Examples';

function App() {
	const [isPlaying, setIsPlaying] = useState(false);
	
	return (
			<div className="App">
				<ChatRoom />
				{/*<button onClick={() => setIsPlaying(!isPlaying)}>
					{ isPlaying ? 'Pause' : 'Play' }
				</button>
				<RefVideoPlayer
					isPlaying={isPlaying}
					src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" />*/}
			</div>
	);
}

export default App;
