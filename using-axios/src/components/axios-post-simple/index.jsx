import React, { Component } from 'react';
import axios from 'axios';

const API_ROOT_URI = 'https://collab-api-e12d47a4e992.herokuapp.com/api';

class AddProfile extends Component {
	state = {
		ownerId: "",
		userId: 0,
		companyName: "",
		industryId: 0,
		profileImage: "",
		aboutCompany: ""
	};

	constructor(props) {
		super(props);
		this.handleSubmit = this.handleSubmit.bind(this);
		this.handleCompanyNameChanged = this.handleCompanyNameChanged.bind(this);
	}

	handleCompanyNameChanged(event) {
		this.setState({ companyName: event.target.value });
	}

	handleSubmit (event) {
		event.preventDefault();
		const profile = {
			ownerId: "ABCDE12345",
			userId: 2,
			companyName: this.state.companyName,
			industryId: 4,
			profileImage: this.state.profileImage,
			aboutCompany: this.state.aboutCompany
		};

		axios.post(
			`${API_ROOT_URI}/project-owners/createProfile`,
			{profile}
		).then ((res) => {
			console.log(res);
			console.log(res.data);
		});
	}

	render() {
		return(
			<div>
				<form onSubmit={this.handleSubmit}>
					<label>
						Company Name:
						<input
							type="text"
							name="companyName"
							onChange={this.handleCompanyNameChanged}
						/>
					</label>
				</form>
			</div>
		);
	}
}

export default AddProfile;