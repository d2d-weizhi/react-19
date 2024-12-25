import { useRef } from 'react';

// @ts-ignore
function MyInput({ ref }) {
	return <input ref={ref} />;
}

export default function MyForm() {
	const inputRef = useRef(null);
	
	function handleClick() {
		// @ts-ignore
		inputRef.current.focus();
	}
	
	return (
			<>
				<MyInput ref={inputRef} />
				<button onClick={handleClick}>
					Focus the input
				</button>
			</>
	);
}