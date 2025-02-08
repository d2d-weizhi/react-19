import { createStore } from 'redux';
import rootReducer from "./Reducer";

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
	preloadedState = {
		todos: JSON.parse(persistedTodosString)
	};
}

export const store = createStore(rootReducer, preloadedState);