import React from 'react';
import { useOnlineStatus } from "./useOnlineStatus";
import { useFormInput } from "./useFormInput";
import './App.css';

function StatusBar() {
	const isOnline = useOnlineStatus();
	return <h1>{isOnline ? 'Online' : 'Disconnected' }</h1>
}

function SaveButton() {
	const isOnline = useOnlineStatus();
	
	function handleSaveClick() {
		console.log('Progress saved');
	}
	
	return (
			<button disabled={!isOnline} onClick={handleSaveClick}>
				{isOnline ? 'Save progress' : 'Reconnecting...'}
			</button>
	);
}

function App() {
	const firstNameProps = useFormInput('Mary');
	const lastNameProps = useFormInput('Poppins');
	return (
			<div className="App">
				<label>
					First name:
					<input {...firstNameProps} />
				</label>
				<label>
					Last name:
					<input {...lastNameProps} />
				</label>
				<p><b>Good morning, {firstNameProps.value} {lastNameProps.value}.</b></p>
				{/*<SaveButton />*/}
				{/*<StatusBar />*/}
			</div>
	);
}

export default App;
