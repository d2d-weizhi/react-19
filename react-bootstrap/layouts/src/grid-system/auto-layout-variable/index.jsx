import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function AutoLayoutVariable() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
			}}
		>
			<Row className="justify-content-md-center">
				<Col className="demo-col" xs lg="2">1 of 3</Col>
				<Col className="demo-col" md="auto">Variable width content</Col>
				<Col className="demo-col" xs lg="2">3 of 3</Col>
			</Row>
			<Row>
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col" md="auto">Variable width content</Col>
				<Col className="demo-col" xs lg="2">3 of 3</Col>
			</Row>
		</Container>
	);
}