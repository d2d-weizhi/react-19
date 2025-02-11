import React, { useState } from "react";
import { useDispatch } from 'react-redux';

export default function Header() {
	const [text, setText] = useState("");
	const dispatch = useDispatch();
	
	function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
		setText(e.target.value);
	}
	
	function handleKeyDown(e: any) {
		const trimmedText = e.target.value.trim();
		// If the user pressed the Enter key:
		if (e.key === 'Enter' && trimmedText) {
			// Dispatch the "todo added" action with this text
			dispatch({ type: 'todos/todoAdded', payload: trimmedText });
			// And clear out the text input
			setText("");
		}
	}
	
	return (
		<input
			type="text"
			placeholder="What needs to be done?"
			autoFocus={true}
			value={text}
			onChange={handleChange}
			onKeyDown={handleKeyDown}
		/>
	);
}