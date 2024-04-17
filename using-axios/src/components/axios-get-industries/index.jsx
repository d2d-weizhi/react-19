import React, { Component } from 'react';
import axios from 'axios';
import { DropDownList } from '@progress/kendo-react-dropdowns';

const API_ROOT_URI = 'https://collab-api-e12d47a4e992.herokuapp.com/api';

class IndustriesDDL extends Component {
	state = {
		industries: [],
		selectedValue: {},
	};

	constructor(props) {
		super(props);

		this.handleChange = this.handleChange.bind(this);
	}

	componentDidMount() {
		axios.get(`${API_ROOT_URI}/industries/getIndustries`)
			.then((response) => {
				console.log(response);
				// const skills = response.data;
				this.setState({ industries: response.data });
			});
	}

	handleChange(event) {
		this.setState({
			selectedValue: event.target.value,
		});
	}

	render() {
		return (
			<div>
				<DropDownList
					data={this.state.industries}
					textField="industry_name"
					dataItemKey="industry_id"
					value={this.state.selectedValue}
					onChange={this.handleChange}
					style={{
						width: "300px",
					}}
				/><br />
				<p>
					You have selected <strong><em>{this.state.selectedValue.industry_name}</em></strong>.
				</p>
			</div>
		);
	}
}

export default IndustriesDDL;