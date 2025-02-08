import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import { store } from './store';
import reportWebVitals from './reportWebVitals';

// Log the initial state
console.log('Initial state: ', store.getState());
// { todos: [...], filters: { status, colours } }

// Every time the state changes, log it
// Note that subscribe() returns a function for unregistering the listener
const unsubscribe = store.subscribe(() =>
	console.log('State after dispatch: ', store.getState())
)

// Now, dispatch some actions
store.dispatch({ type: 'todos/todoAdded', payload: 'Learning about actions' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learning about reducers' });
store.dispatch({ type: 'todos/todoAdded', payload: 'Learn about stores' });

store.dispatch({ type: 'todos/todoToggled', payload: 0 });
store.dispatch({ type: 'todos/todoToggled', payload: 1 });

store.dispatch({ type: 'filters/statusFilterChanged', payload: 'Active' });

store.dispatch({
	type: 'filters/colourFilterChanged',
	payload: { colour: 'red', changeType: 'added' }
});


const root = ReactDOM.createRoot(
	document.getElementById('root') as HTMLElement
);
root.render(
	<React.StrictMode>
		<App />
	</React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
