import React from 'react';
import { useSelector } from 'react-redux';

import { availableColors, capitalize } from "../filters/colors";
import { StatusFilters } from '../filters/filtersSlice';

function RemainingTodos({ count }: {count: number}) {
	const suffix = count === 1 ? '': 's';
	
	return (
		<div className="todo-count">
			<h5>Remaining Todos</h5>
			<strong>{count}</strong> item{suffix} left
		</div>
	);
}

// @ts-ignore
function StatusFilter ({ value: status, onChange }) {
	const renderedFilters = Object.keys(StatusFilters).map((key) => {
		// @ts-ignore
		const value = StatusFilters[key];
		const handleClick = () => onChange(value);
		const className = value === status ? 'selected' : '';
		
		return (
			<li key={key}>
				<button className={className} onClick={handleClick}>
					{key}
				</button>
			</li>
		);
	});
	
	return (
		<div className="filters statusFilters">
			<h5>Filter by Status</h5>
			<ul>{renderedFilters}</ul>
		</div>
	);
}

// @ts-ignore
function ColorFilters ({ value: colors, onChange}) {
	const renderedColors = availableColors.map((color) => {
		const checked = colors.includes(color);
		const handleChange = () => {
			const changeType = checked ? 'removed' : 'added';
			onChange(color, changeType);
		};
		
		return (
			<label key={color}>
				<input
					type="checkbox"
					name={color}
					checked={checked}
					onChange={handleChange}
				/>
				<span
					className="color-block"
				style={{
					backgroundColor: color,
				}}></span>
				{capitalize(color)}
			</label>
		);
	});
	
	return (
		<div className="filters colorFilters">
			<h5>Filter by Color</h5>
			<form className="colorSelection">{renderedColors}</form>
		</div>
	);
}

export default function Footer() {
	const todosRemaining = useSelector(state => {
		// @ts-ignore
		const uncompletedTodos = state.todos.filter((todo: ITodo) => !todo.completed);
		return uncompletedTodos.length;
	});
	
	const {status, colors} = useSelector((state: any) => state.filters);
	
	const onColorChange = (color: any, changeType: any) =>
		console.log('Color change: ', { color, changeType });
	const onStatusChange = (status: any) =>
		console.log('Status change: ', status);
	
	return (
		<footer className="footer">
			<div className="actions">
				<h5>Actions</h5>
				<button className="button">Mark All Completed</button>
				<button className="button">Clear Completed</button>
			</div>
			
			<RemainingTodos count={todosRemaining} />
			<StatusFilter value={status} onChange={onStatusChange} />
			<ColorFilters value={colors} onChange={onColorChange} />
		</footer>
	);
}