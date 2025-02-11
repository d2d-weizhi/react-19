import React from 'react';
import { useSelector } from 'react-redux';
import TodoListItem, { ITodo } from "./TodoListItem";

const selectTodoIds = (state: any) => state.todos.map((todo: ITodo) => todo.id);

const TodoList = () => {
	const todoIds = useSelector(selectTodoIds);
	
	const renderedListItems = todoIds.map((todoId: number) => {
		return <TodoListItem key={todoId} id={todoId} />
	});
	
	return <ul className="todo-list">{renderedListItems}</ul>
};

export default TodoList;