import React, { useState, useEffect } from 'react';
import { createConnection } from './Chat';
import './App.css';

const serverUrl = 'https://localhost:1234';

// @ts-ignore
function ChatRoom({ roomId }) {
	useEffect(() => {
		const connection = createConnection(serverUrl, roomId);
		connection.connect();
		return () => connection.disconnect();
	}, [roomId]);
	
	return <h1>Welcome to the {roomId} room!</h1>;
}

function App() {
	const [roomId, setRoomId] = useState('general');
	return (
			<div className="App">
				<label>
					Choose the chat room: {' '}
					<select
						value={roomId}
						onChange={e => setRoomId(e.target.value)}>
						<option value="general">general</option>
						<option value="travel">travel</option>
						<option value="music">music</option>
					</select>
				</label>
				<hr />
				<ChatRoom roomId={roomId} />
			</div>
	);
}

export default App;
