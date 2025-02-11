export const print1 = (storeAPI: any) => (next: any) => (action: any) => {
	console.log('1');
	return next(action);
}

export const print2 = (storeAPI: any) => (next: any) => (action: any) => {
	console.log('2');
	return next(action);
}

export const print3 = (storeAPI: any) => (next: any) => (action: any) => {
	console.log('3');
	return next(action);
}

// Middleware written as ES5 functions

// Outer function
export function exampleMiddleware(storeAPI: any) {
	return function wrapDispatch(next: any) {
		return function handleAction(action: any) {
			return next(action);
		}
	}
}

export const loggerMiddleware = (storeAPI: any) => (next: any) => (action: any) => {
	console.log('dispatching', action);
	let result = next(action);
	console.log('next state', storeAPI.getState());
	return result;
}