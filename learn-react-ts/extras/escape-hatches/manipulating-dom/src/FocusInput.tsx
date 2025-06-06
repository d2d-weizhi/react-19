import { useRef } from 'react';

export default function FocusInput() {
	const inputRef = useRef(null);
	
	function handleClick() {
		// @ts-ignore
		inputRef.current.focus();
	}
	
	return (
			<>
				<input ref={inputRef} />
				<button onClick={handleClick}>
					Focus the Input
				</button>
			</>
	);
}