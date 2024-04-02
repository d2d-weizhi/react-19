import { useReducer } from 'react';

const initialState = { count: 0 };

function reducer(state, action) {
	switch (action.type) {
		case 'increment':
			return { count: state.count + action.payload };
		case 'decrement':
			return { count: state.count - action.payload };
		default:
			throw new Error();
	}
}

function Counter() {
	const [state, dispatch] = useReducer(reducer, initialState);

	return (
		<>
			Count: {state.count}<br />
			<button onClick={() => dispatch({type: 'decrement', payload: 5})}>-5</button>{' '}
			<button onClick={() => dispatch({type: 'increment', payload: 5})}>+5</button>
		</>
	);
}

export default Counter;