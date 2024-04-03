import { useState, useRef } from 'react';

function WordCount (props) {
	const textAreaRef = useRef();
	const [wordCount, setWordCount] = useState(0);

	const countWords = () => {
		const text = textAreaRef.current.value;
		setWordCount(text.split(" ").length);
	}

	return (
		<>
			<textarea ref={textAreaRef} /><br />
			<button onClick={countWords}>Count Words</button>
			<p>{wordCount} words.</p>
		</>
	);
}

export default WordCount;