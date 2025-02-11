import React from 'react';
import { useSelector, useDispatch } from "react-redux";
import { ReactComponent as TimesSolid } from "./times-solid.svg";
import { availableColors, capitalize } from "../filters/colors";

export interface ITodo {
	id: number;
	text: string;
	completed: boolean;
	color?: string;
}

const selectTodoById = (state: any, todoId: any) => {
	return state.todos.find((todo: ITodo) => todo.id === todoId);
};

// @ts-ignore
const TodoListItem = ({ key, id })  => {
	const todo = useSelector(state => selectTodoById(state, id));
	const { text, completed, color } = todo;
	
	const dispatch = useDispatch();
	
	function handleCompletedChanged(e:any) {
		dispatch({ type: 'todos/todoToggled', payload: todo.id });
	}
	
	function handleColorChanged(e: any) {
		//onColorChange(e.target.value);
	}
	
	// const colorOptions = availableColors.map((c) => (
	// 	<option key={c} value={c}>
	// 		{ capitalize(c) }
	// 	</option>
	// ));
	
	// @ts-ignore
	return (
		<li key={key}>
			<div className="view">
				<div className="segment label">
					<input
						className="toggle"
						type="checkbox"
						checked={completed}
						onChange={handleCompletedChanged}
						/>
					<div className="todo-text">{ text }</div>
				</div>
				<div className="segment buttons">
					<select
						className="colorPicker"
						value={color}
						style={{color}}
						onChange={handleColorChanged}
						>
						<option value=""></option>
						{availableColors.map((c: string) => (
							<option key={c} value={c}>
								{ capitalize(c) }
							</option>
						)) }
					</select>
					<button className="destroy">
						<TimesSolid />
					</button>
				</div>
			</div>
		</li>
	);
}

export default TodoListItem;