import React, { useState, useEffect } from 'react';
// @ts-ignore
// import { experimental_useEffectEvent as useEffectEvent } from 'react';
import { createConnection } from "./Chat";
import { showNotification } from "./Notifications";
import './App.css';

const serverUrl = 'https://localhost:1234';

// @ts-ignore
function ChatRoom({ roomId }) {
  const [message, setMessage] = useState('');
  
  useEffect(() => {
    const options = {
      serverUrl: serverUrl,
      roomId: roomId,
    };
    const connection = createConnection(options);
    connection.connect();
    return () => connection.disconnect();
  }, [roomId]);
  
  return (
      <>
        <h1>Welcome to the {roomId} room!</h1>
        <input value={message} onChange={e => setMessage(e.target.value)} />
      </>
  );
  
  /*const onConnected = useEffectEvent(() => {
    showNotification('Connected!', theme);
  });
  
  useEffect(() => {
    const connection = createConnection(serverUrl, roomId);
    connection.on('connected', () => {
      onConnected();
    });
    connection.connect();
    
    return () => connection.disconnect();
  }, [roomId]);
  
  return <h1>Welcome to the {roomId} room!</h1>;*/
}

function App() {
  const [roomId, setRoomId] = useState('general');
  // const [isDark, setIsDark] = useState(false);
  
  return (
    <div className="App">
      <label>
        Choose the chat room:{' '}
        <select
          value={roomId}
          onChange={(e) => setRoomId(e.target.value)}
        >
          <option value="general">general</option>
          <option value="travel">travel</option>
          <option value="music">music</option>
        </select>
      </label>
      {/*<label>
        <input
          type="checkbox"
          checked={isDark}
          onChange={(e) => setIsDark(e.target.checked)}
          />
        Use dark theme
      </label>*/}
      <hr />
      <ChatRoom roomId={roomId} />
    </div>
  );
}

export default App;
