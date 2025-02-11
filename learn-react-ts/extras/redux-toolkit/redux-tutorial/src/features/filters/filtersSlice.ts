export const StatusFilters = {
	All: 'all',
	Active: 'active',
	Completed: 'completed',
};

const initialState = {
	status: 'All',
	colors: []
}

export default function filtersReducer(state = initialState, action: { type: string; payload: any }) {
	switch (action.type) {
		case 'filters/statusFilterChanged': {
			return {
				// Again, one less level of nesting to copy
				...state,
				status: action.payload
			}
		}
		default:
			return state
	}
}