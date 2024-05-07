import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function ResponsiveGrid() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			<Row>
				<Col className="demo-col" sm={8}>sm=8</Col>
				<Col className="demo-col" sm={4}>sm=4</Col>
			</Row>
			<Row>
				<Col className="demo-col" sm>sm=true</Col>
				<Col className="demo-col" sm>sm=true</Col>
				<Col className="demo-col" sm>sm=true</Col>
			</Row>
		</Container>
	);
}

export function MixAndMatch() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			{/* Stack the columns on mobile by making one full-width and the other half-width */}
			<Row>
				<Col className="demo-col" xs={12} md={8}>xs=12 md=8</Col>
				<Col className="demo-col" xs={6} md={4}>xs=6 md=4</Col>
			</Row>
			{/* Columns start at 50% wide on mobile and bump up to 33.3% wide on desktop */}
			<Row>
				<Col className="demo-col" xs={6} md={4}>xs=6 md=4</Col>
				<Col className="demo-col" xs={6} md={4}>xs=6 md=4</Col>
				<Col className="demo-col" xs={6} md={4}>xs=6 md=4</Col>
			</Row>
			{/* Columns are always 50% wide, on mobile and desktop */}
			<Row>
				<Col className="demo-col" xs={6}>xs=6</Col>
				<Col className="demo-col" xs={6}>xs=6</Col>
			</Row>
		</Container>
	);

}