import {createStore, compose, applyMiddleware} from 'redux';
import rootReducer from "./Reducer";
// import { composeWithDevTools } from "redux-devtools-extension";
// import { sayHiOnDispatch, includeMeaningOfLife } from "./exampleAddons/enhancers";
// import { print1, print3, print2 } from "./exampleAddons/middleware";

let preloadedState;
const persistedTodosString = localStorage.getItem('todos');

if (persistedTodosString) {
	preloadedState = {
		todos: JSON.parse(persistedTodosString)
	};
}
// const alwaysReturnHelloMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
// 	const originalResult = next(action);
// 	return 'Hello!';
// }

/*const composedEnhancer = composeWithDevTools(
	applyMiddleware(print1, print2, print3)
);*/

const store = createStore(rootReducer, preloadedState);

export default store;