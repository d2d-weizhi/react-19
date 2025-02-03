import {Action} from "@reduxjs/toolkit";

const initialState = {
	todos: [
		{ id: 0, text: 'Learn React', completed: false },
		{ id: 1, text: 'Learn Redux', completed: false, colour: 'purple' },
		{ id: 2, text: 'Building something fun!', completed: false, colour: 'blue' },
	],
	filters: {
		status: 'All',
		colours: []
	}
};

// Use the initialState as a default value
export default function appReducer(state = initialState, action: Action) {
	// The reducer normally looks at the action type field to decide what happens
	switch (action.type) {
		// Do something here based on the different types of actions
		default:
			// If this reducer doesn't recognize the action type, or doesn't care about this specific action,
			// return the existing state unchanged.
			return state;
	}
}