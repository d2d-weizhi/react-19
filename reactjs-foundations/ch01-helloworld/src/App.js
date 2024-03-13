import React from 'react';
import './App.css';

function App() {
	const [personName, setPersonName] = React.useState('');
	
	return (
		<div className="App">
			<header className="App-header">
				Hello {personName}, it is a great day to learn React 17!
			</header>
			<input type="text" onChange={(e) => setPersonName(e.target.value)} />
		</div>
	);
}

export default App;
