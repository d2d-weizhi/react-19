import React from 'react';
import Counter from './Counter';
import LifecycleLoggerComponent from './LifecycleLoggerComponent';

class TextAreaCounter extends LifecycleLoggerComponent {
	static defaultProps = {
		text: 'Count me as I type',
	}

	static getName() {
		return 'TextAreaCounter';
	}

	constructor() {
		super();
		this.state = {};
		// We can use this pattern for binding our events.
		this.onTextChange = this.onTextChange.bind(this);
	}

	onTextChange(event) {
		this.setState({
			text: event.target.value
		});
	}

	render() {
		const text = 'text' in this.state ? this.state.text : this.props.text;

		let counter = null;
		if (text.length > 0) {
			counter = <Counter count={text.length} />;
		}

		return(
			<div>
				<textarea className='inputs' defaultValue={text} onChange={this.onTextChange} />
				{counter}
			</div>
		);
	}
}

export default TextAreaCounter;