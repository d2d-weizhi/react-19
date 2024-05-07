import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function OrderingExample() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			<Row>
				<Col className="demo-col" xs>First, but unordered</Col>
				<Col className="demo-col" xs={{ order: 12 }}>Second, but last</Col>
				<Col className="demo-col" xs={{ order: 1 }}>Third, but second</Col>
			</Row>
		</Container>
	);
}

export function FirstAndLast() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			<Row>
				<Col className="demo-col" xs={{ order: 'last' }}>First, but last</Col>
				<Col className="demo-col" xs>Second, but unordered</Col>
				<Col className="demo-col" xs={{ order: 'first' }}>Third, but first</Col>
			</Row>
		</Container>
	);
}