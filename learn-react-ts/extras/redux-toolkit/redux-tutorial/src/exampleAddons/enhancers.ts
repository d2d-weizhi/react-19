export const sayHiOnDispatch = (createStore: (arg0: any, arg1: any, arg2: any) => any) => {
	return (rootReducer: any, preloadedState: any, enhancers: any) => {
		const store = createStore(rootReducer, preloadedState, enhancers)
		
		function newDispatch(action: any) {
			const result = store.dispatch(action)
			console.log('Hi!')
			return result
		}
		
		return { ...store, dispatch: newDispatch }
	}
}

export const includeMeaningOfLife = (createStore: (arg0: any, arg1: any, arg2: any) => any) => {
	return (rootReducer: any, preloadedState: any, enhancers: any) => {
		const store = createStore(rootReducer, preloadedState, enhancers)
		
		function newGetState() {
			return {
				...store.getState(),
				meaningOfLife: 42,
			}
		}
		
		return { ...store, getState: newGetState }
	}
}