import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Reminder extends Component {
  render() {
    const handleChange = (e) => {
      this.props.setIsComplete(!this.props.isComplete, this.props.id);
    }

    return (
      <div className="item">
			Item: {this.props.reminderText}{' '}
			<span className="due-date">Due date: {this.props.dueDate}</span>
			<span className="is-complete">
				Completed?: <input type="checkbox" checked={this.props.isComplete} onChange={handleChange} />
			</span>
		</div>
    );
  }
}

Reminder.propTypes = {
	reminderText: PropTypes.string,
	dueDate: PropTypes.string,
	isComplete: PropTypes.bool
}

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);

Reminder.defaultProps = {
	reminderText: "No Reminder Set",
	dueDate: formattedDate,
	isComplete: false
}

export default Reminder;