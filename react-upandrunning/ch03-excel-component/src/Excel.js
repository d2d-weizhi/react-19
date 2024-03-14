import React, { Component } from "react";
import PropTypes from 'prop-types';
import './Excel.css';

class Excel extends Component {
	constructor(props) {
		super();
		const data = [];
		/* const data = clone(props.initialData).map((row, idx) => {
			row.push(idx);
			return row;
		}); */

		this.state = { 
			data,
			sortby: null,
			descending: false,
			edit: null,		// {row: index, column: index},
			search: false,
		};

		this.preSearchData = null;
	
		// log the initial state
		this.log = [clone(this.state)];
		this.replayID = null;

		this.sort = this.sort.bind(this);
		this.showEditor = this.showEditor.bind(this);
		this.save = this.save.bind(this);
		this.toggleSearch = this.toggleSearch.bind(this);
		this.search = this.search.bind(this);
		this.replay = this.replay.bind(this);
		this.logSetState = this.logSetState.bind(this);
		this.keydownHandler = this.keydownHandler.bind(this);
		this.downloadJSON = this.download.bind(this, 'json');
		this.downloadCSV = this.download.bind(this, 'csv');
	}

	componentDidMount() {
		document.addEventListener('keydown', this.keydownHandler);
		fetch('https://www.phpied.com/files/reactbook/table-data.json')
			.then((response) => response.json())
			.then((initialData) => {
				const data = clone(initialData).map((row, idx) => {
					row.push(idx);
					return row;
				});
				this.logSetState({data});
			})
	}

	componentWillUnmount() {
		document.removeEventListener('keydown', this.keydownHandler);
		clearInterval(this.replayID);
	}

	keydownHandler(e) {
		if (e.altKey && e.shiftKey && e.keyCode === 82) {
			// ALT+SHIFT+R(eplay)
			this.replay();
		}
	}

	sort(e) {
		// TODO: sort table by selected column.
		const column = e.target.cellIndex;
		// copy the data
		const data = clone(this.state.data);
		// Toggling between ascending/descending
		const descending = this.state.sortby === column && !this.state.descending;
		data.sort((a, b) => {
			if (a[column] === b[column]) {
				return 0;
			}
			return descending 
				? a[column] < b[column] ? 1 : -1
				: a[column] > b[column] ? 1 : -1;
		});

		this.logSetState({
			data,
			sortby: column,
			descending,
		});
	}

	showEditor(e) {
		this.logSetState({
			edit: {
				row: parseInt(e.target.parentNode.dataset.row, 10),
				column: e.target.cellIndex,
			},
		});
	}

	save(e) {
		e.preventDefault();
		const input = e.target.firstChild;
		const data = clone(this.state.data);
		data[this.state.edit.row][this.state.edit.column] = input.value;
		this.logSetState({
			edit: null,
			data,
		});
	}

	toggleSearch() {
		if (this.state.search) {
			this.logSetState({
				data: this.preSearchData,
				search: false,
			});
			this.preSearchData = null;
		} else {
			this.preSearchData = this.state.data;
			this.logSetState({
				search: true,
			});
		}
	}

	download(format, ev) {
		const data = clone(this.state.data).map(row => {
			row.pop();
			return row;
		});

		const contents = 
			format === 'json'
				? JSON.stringify(data, null, ' ')
				: data.reduce((result, row) => {
					return (
						result + 
						row.reduce((rowcontent, cellcontent, idx) => {
							const cell = cellcontent.replace(/"/g, '""');
							const delimiter = idx < row.length - 1 ? ',' : '';
							return `${rowcontent}"${cellcontent}"${delimiter}`;
						}, '') + '\n'
					);
				}, '');
		
		const URL = window.URL || window.webkitURL;
		const blob = new Blob([contents], {type: 'text/' + format});
		ev.target.href = URL.createObjectURL(blob);
		ev.target.download = 'data.' + format;
	}

	search(e) {
		const needle = e.target.value.toLowerCase();
		if (!needle) {
			this.logSetState({ data: this.preSearchData });
			return;
		}
		
		const idx = e.target.dataset.idx;
		const searchdata = this.preSearchData.filter((row) => {
			return row[idx].toString().toLowerCase().indexOf(needle) > -1;
		});
		this.logSetState({ data: searchdata });
	}

	replay() {
		if (this.log.length === 1) {
			console.warn('No state changes to replay yet');
			return;
		}
		let idx = -1;
		this.replayID = setInterval(() => {
			if (++idx === this.log.length - 1) {
				// the end
				clearInterval(this.replayID);
			}
			this.setState(this.log[idx]);
		}, 1000);
	}

	// We will use this to replace out setState() method calls.
	logSetState(newState) {
		// remember the old state in a clone
		this.log.push(clone(newState));
		// now set it
		this.setState(newState);
	}

	render() {
		const searchRow = !this.state.search ? null : (
			<tr onChange={this.search}>
				{this.props.headers.map((_, idx) => (
					<td key={idx}>
						<input type="text" data-idx={idx} />
					</td>
				))}
			</tr>
		);
		return (
			<div>
				<div className="toolbar">
					<button onClick={this.toggleSearch}>
						{this.state.search ? 'Hide search' : 'Show search'}
					</button>
					<a href="data.json" onClick={this.downloadJSON}>
						Export JSON
					</a>
					<a href="data.csv" onClick={this.downloadCSV}>
						Export CSV
					</a>
				</div>
				<table>
					<thead onClick={this.sort}>
						<tr>
						{
							// this.props.headers.map(title => <th>{title}</th>)
							// OR..we use mapping...
							this.props.headers.map(
								(title, idx) => {
									if (this.state.sortby === idx) {
										title += this.state.descending ? '\u2191' : '\u2193'
									}
									// Because React requires a unique identifier
									return <th key={idx}>{title}</th>;
								}
							)
						}
						</tr>
					</thead>
					{this.state.data.length === 0 ? (
						<tbody>
							<tr>
								<td colSpan={this.props.headers.length}>
									Loading data...
								</td>
							</tr>
						</tbody>
					) : (
						<tbody onDoubleClick={this.showEditor}>
							{searchRow}
							{
								this.state.data.map((row, rowidx) => {
									// the last piece of data in a row is the ID
									const recordId = row[row.length - 1];
									return (
										<tr key={recordId} data-row={recordId}>
											{
												row.map((cell, colidx) => {
													if (colidx === this.props.headers.length) {
														// do not show the record ID in the table UI
														return;
													}

													const edit = this.state.edit;

													if (edit && edit.row === rowidx 
														&& edit.column === colidx) {
														cell = (
															<form onSubmit={this.save}>
																<input type="text" defaultValue={cell} />
															</form>
														);
													}

													return <td key={colidx}>{cell}</td>;
												})
											}
										</tr>
									)
								})
							}
						</tbody>
					)}
				</table>
			</div>
		);
	}
}

function clone(o) {
	return JSON.parse(JSON.stringify(o));
}

Excel.propTypes = {
	headers: PropTypes.arrayOf(PropTypes.string),
	initialData: PropTypes.arrayOf(PropTypes.arrayOf(PropTypes.string)),
};

export default Excel;