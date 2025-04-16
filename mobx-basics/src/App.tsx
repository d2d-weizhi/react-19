import React from "react";
import { observer } from "mobx-react-lite";
import todoStore from "./store/todoStore";
import makeInspectable from "mobx-devtools-mst";

makeInspectable(todoStore);

const App = observer(() => {
	return (
    <div>
      <h1>MobX To-Do List</h1>
			<ul>
				{todoStore.todos.map((todo) => (
					<li	key={todo.id}>
						<input 
							type="checkbox"
							checked={todo.completed}
							onChange={() => todoStore.toggleTodo(todo.id)}
						/>
						{todo.task}
					</li>
				))}
			</ul>
			<button onClick={() => todoStore.addTodo('New Task')}>
				Add Todo
			</button>
    </div>
  );
});

export default App
