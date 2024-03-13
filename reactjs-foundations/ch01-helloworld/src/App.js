import React from 'react';
import './App.css';

function App() {
	const [personName, setPersonName] = React.useState('');
	// Adding another comment for testing
	return (
		<div className="App">
			<header className="App-header">
				Hello {personName}!
			</header>
			<input type="text" onChange={(e) => setPersonName(e.target.value)} />
		</div>
	);
}

export default App;
