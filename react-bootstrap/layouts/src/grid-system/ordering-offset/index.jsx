import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export function RowColLayoutBreakpoint() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			<Row md={4}>
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col" xs={6}>2 of 3</Col>
				<Col className="demo-col">3 of 3</Col>
			</Row>
		</Container>
	);
}

export function RowColLayoutExample() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			<Row xs={2} md={4} lg={6}>
				<Col className="demo-col">1 of 2</Col>
				<Col className="demo-col">2 of 2</Col>
			</Row>
			<Row xs={1} md={2}>
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col">2 of 3</Col>
				<Col className="demo-col">3 of 3</Col>
			</Row>
			<Row xs="auto">
				<Col className="demo-col">1 of 3</Col>
				<Col className="demo-col">2 of 3</Col>
				<Col className="demo-col">3 of 3</Col>
			</Row>
		</Container>
	);
}

export function OffsetExample() {
	return (
		<Container 
			style={{ 
				backgroundColor: "#02ab34",
				color: "#FFF",
				border: "2px solid #90ffb1"
			}}
		>
			<Row>
				<Col className="demo-col" md={4}>md=4</Col>
				<Col className="demo-col" md={{ span: 4, offset: 4 }}>{`md={{ span: 4, offset: 4 }}`}</Col>
			</Row>
			<Row>
				<Col className="demo-col" md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
				<Col className="demo-col" md={{ span: 3, offset: 3 }}>{`md={{ span: 3, offset: 3 }}`}</Col>
			</Row>
			<Row>
				<Col className="demo-col" md={{ span: 6, offset: 3 }}>{`md={{ span: 6, offset: 3 }}`}</Col>
			</Row>
		</Container>
	);
}

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