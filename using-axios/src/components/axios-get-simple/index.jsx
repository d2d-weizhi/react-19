import React, { Component } from 'react';
import axios from 'axios';

const API_ROOT_URI = 'https://collab-api-e12d47a4e992.herokuapp.com/api';

class SkillsList extends Component {
	state = {
		skills: [],
	};

	componentDidMount() {
		axios.get(`${API_ROOT_URI}/skills/searchSkillsByName?keyword=ux`)
			.then((response) => {
				console.log(response);
				const skills = response.data;
				this.setState({ skills });
			});
	}

	render() {
		return (
			<ul>
				{this.state.skills.map((skill) => (
					<li key={skill.skill_id}>{skill.skill_name}</li>
				))}
			</ul>
		);
	}
}

export default SkillsList;