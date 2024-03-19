import { Component } from 'react';
import BasicFigure from './BasicFigure';

import cat from '../../images/cat.jpg';
import dog from '../../images/dog.jpg';
import rabbit from '../../images/rabbit.jpg';

class FigureList extends Component {
	render() {
		return (
			<div style={{display: "flex"}}>
				<BasicFigure filename={cat} caption="Chauncey" />
				<BasicFigure filename={dog} caption="Murray" />
				<BasicFigure filename={rabbit} caption="Ginger" />
			</div>
		);
	}
}

export default FigureList;