import React, { Component } from 'react';
// import PropTypes from 'prop-types';
import Reminder from "./Reminder";

class RemindersList extends Component {
  render() {
    const reminders = this.props.reminders.map((reminder, index) => {
      return (
        <Reminder reminderText={reminder.reminderText}
          dueDate={reminder.dueDate}
          isComplete={reminder.isComplete}
          setIsComplete={this.props.setIsComplete}
          id={index}
          key={index} />
      );
    });

    return (
      <div>
        {reminders}
      </div>
    );
  }
}

const date = new Date();
const formattedDate = date.toISOString().substring(0, 10);

RemindersList.defaultProps = {
	reminders: [{
		reminderText: "No Reminders Yet",
		dueDate: formattedDate,
		isComplete: false
	}]
}

export default RemindersList;