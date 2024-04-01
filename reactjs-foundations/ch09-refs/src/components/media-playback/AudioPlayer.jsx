import React, { Component } from 'react';

class AudioPlayer extends Component {
	constructor(props) {
		super(props);
		this.mediaFile = React.createRef();
		this.playToggle = this.playToggle.bind(this);
	}

	playToggle() {
		if (this.mediaFile.current.paused) {
			this.mediaFile.current.play();
		} else {
			this.mediaFile.current.pause();
		}
	}

	render() {
		return (
			<>
				<audio ref={this.mediaFile}>
					<source src="./audio/sample-audio.mp3" type="audio/mpeg" />
				</audio>
				<button onClick={this.playToggle}>Play/Pause</button>
			</>
		);
	}
}

export default AudioPlayer;