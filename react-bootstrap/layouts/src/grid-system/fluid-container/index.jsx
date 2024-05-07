import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

export default function FluidContainer() {
	return (
		<Container fluid="md" 
			style={{ 
				backgroundColor: "#02ab34", 
				padding: "5px",
				color: "#FFF",
			}}
		>
			<Row>
				<Col>1 of 1</Col>
			</Row>
		</Container>
	);
}