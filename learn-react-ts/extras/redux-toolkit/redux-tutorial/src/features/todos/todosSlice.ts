const initialState = [
	{ id: 0, text: 'Learn React', completed: false },
	{ id: 1, text: 'Learn Redux', completed: false, color: 'purple' },
	{ id: 2, text: 'Building something fun!', completed: false, color: 'blue' },
];

function nextTodoId(todos: any[]) {
	const maxId = todos.reduce((maxId: number, todo: { id: number; }) => Math.max(todo.id, maxId), -1)
	return maxId + 1
}

export default function todosReducer(state = initialState, action: { type: string; payload: any; }) {
	switch (action.type) {
		case 'todos/todoAdded': {
			// Can return just the new todos array - no extra object around it
			return [
				...state,
				{
					id: nextTodoId(state),
					text: action.payload,
					completed: false
				}
			]
		}
		case 'todos/todoToggled': {
			return state.map(todo => {
				if (todo.id !== action.payload) {
					return todo
				}
				return {
					...todo,
					completed: !todo.completed
				}
			})
		}
		default:
			return state;
	}
}