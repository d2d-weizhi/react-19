import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function FormFloatingBasic() { 
	return (
		<>
			<FloatingLabel
				controlId="floatingInput"
				label="Email address"
				className="mb-3"
			>
				<Form.Control id="floatingInput" type="email" placeholder="name@example.com" />
			</FloatingLabel>
			<FloatingLabel controlId="floatingPassword" label="Password">
				<Form.Control id="floatingPassword" type="password" placeholder="Password" />
			</FloatingLabel>
		</>
	);
}

export function FormFloatingTextarea() {
	return (
		<>
			<FloatingLabel
				controlId="floatingTextarea"
				label="Comments"
				className="mb-3"
			>
				<Form.Control as="textarea" id="floatingTextarea" placeholder="Leave a comment here" />
			</FloatingLabel>
			<FloatingLabel controlId="floatingTextarea2" label="Comments">
				<Form.Control
					as="textarea"
					placeholder="Leave a comment here"
					id="floatingTextarea2"
					style={{ height: '100px' }}
				/>
			</FloatingLabel>
		</>
	);
}

export function FormFloatingSelect() {
	return (
		<FloatingLabel controlId="floatingSelect" label="Works with selects">
			<Form.Select aria-label="Floating label select example">
				<option>Open this select menu</option>
				<option value="1">One</option>
				<option value="2">Two</option>
				<option value="3">Three</option>
			</Form.Select>
		</FloatingLabel>
	);
}

export function FormFloatingLayout() {
	return (
		<Row className="g-2">
			<Col md>
				<FloatingLabel controlId="floatingInputGrid" label="Email address">
					<Form.Control type="email" placeholder="name@example.com" />
				</FloatingLabel>
			</Col>
			<Col md>
				<FloatingLabel
					controlId="floatingSelectGrid"
					label="Works with selects"
				>
					<Form.Select aria-label="Floating label select example">
						<option>Open this select menu</option>
						<option value="1">One</option>
						<option value="2">Two</option>
						<option value="3">Three</option>
					</Form.Select>
				</FloatingLabel>
			</Col>
		</Row>
	);
}

export function FormFloatingCustom() {
	return (
		<>
			<Form.Floating className="mb-3">
				<Form.Control 
					id="floatingInputCustom"
					type="email"
					placeholder="name@example.com"
				/>
				<label htmlFor="floatingInputCustom">Email address</label>
			</Form.Floating>

			<Form.Floating>
				<Form.Control
					id="floatingPasswordCustom"
					type="password"
					placeholder="Password"
				/>
				<label htmlFor="floatingPasswordCustom">Password</label>
			</Form.Floating>
		</>
	);
}