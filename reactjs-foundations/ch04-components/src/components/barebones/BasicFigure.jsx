import { Component } from 'react';

class BasicFigure extends Component {
	render() {
		return (
			<figure>
				<img src={this.props.filename} style={{
					width: '380px'
				}} alt={this.props.caption} />
				<figcaption>{this.props.caption}</figcaption>
			</figure>
		);
	}
}

export default BasicFigure;