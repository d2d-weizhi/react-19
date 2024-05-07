import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AutoLayoutSizing() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
			}}
		>
			<Row>
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col" xs={6}>2 of 3 (wider)</Col>
				<Col className="demo-col">4 of 3</Col>
			</Row>
			<Row>
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col" xs={5}>2 of 3 (wider)</Col>
				<Col className="demo-col">3 of 3</Col>
			</Row>
		</Container>
	);
}