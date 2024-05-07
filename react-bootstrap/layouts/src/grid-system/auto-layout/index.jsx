import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AutoLayout() {
	return (
		<Container fluid="md" 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
			}}
		>
			<Row>
				<Col className="demo-col">1 of 2</Col>
				<Col className="demo-col">2 of 2</Col>
			</Row>
			<Row>
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col">2 of 3</Col>
				<Col className="demo-col">3 of 3</Col>
			</Row>
		</Container>
	);
}