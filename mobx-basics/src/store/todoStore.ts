import { makeAutoObservable } from "mobx";

class TodoStore {
	todos=[{ id: 1, task: 'Learn MobX', completed: false }];

	constructor() {
		makeAutoObservable(this);
	}

	addTodo(task: string) {
		this.todos.push({
			id: this.todos.length + 1,
			task,
			completed: false,
		});
	}

	toggleTodo(id: number) {
		const todo = this.todos.find((todo) => todo.id === id);
		if (todo) {
			todo.completed = !todo.completed;
		}
	}
}

export default new TodoStore();