import Form from 'react-bootstrap/Form';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';

export function TextControls() {
	return (
		<Form>
			<Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
				<Form.Label>Email address</Form.Label>
				<Form.Control type="email" placeholder="name@example.com" />
			</Form.Group>
			<Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
				<Form.Label>Example textarea</Form.Label>
				<Form.Control as="textarea" rows={3} />
			</Form.Group>
		</Form>
	);
}

export function InputSizes() {
	return (
		<>
			<Form.Control size="lg" type="text" placeholder="Large text" />
			<br />
			<Form.Control type="text" placeholder="Normal text" />
			<br />
			<Form.Control size="sm" type="text" placeholder="Small text" />
		</>
	);
}

export function DisabledControls() {
	return (
		<>
			<Form.Control
				type="text"
				placeholder="Disabled input"
				aria-label="Disabled input example"
				disabled
				readOnly
			/><br />
			<Form.Control
				type="text"
				placeholder="Disabled readonly input"
				aria-label="Disabled input example"
				readOnly
			/>
		</>
	);
}

export function PlainText() {
	return (
		<Form>
			<Form.Group as={Row} className="mb-3" controlId="formPlaintextEmail">
				<Form.Label column sm="2">
					Email
				</Form.Label>
				<Col sm="10">
					<Form.Control plaintext readOnly defaultValue="email@example.com" />
				</Col>
			</Form.Group>

			<Form.Group as={Row} className="mb-3" controlId="formPlaintextPassword">
				<Form.Label column sm="2">
					Password
				</Form.Label>
				<Col sm="10">
					<Form.Control type="password" placeholder="Password" />
				</Col>
			</Form.Group>
		</Form>
	);
}

export function FileUploads() {
	return (
		<>
			<Form.Group controlId="formFile" className="mb-3">
				<Form.Label>Default file input example</Form.Label>
				<Form.Control type="file" />
			</Form.Group>
			<Form.Group controlId="formFileMultiple" className="mb-3">
				<Form.Label>Multiple files input example</Form.Label>
				<Form.Control type="file" multiple />
			</Form.Group>
			<Form.Group controlId="formFileDisabled" className="mb-3">
				<Form.Label>Disabled file input example</Form.Label>
				<Form.Control type="file" disabled />
			</Form.Group>
			<Form.Group controlId="formFileSm" className="mb-3">
				<Form.Label>Small file input example</Form.Label>
				<Form.Control type="file" size="sm" />
			</Form.Group>
			<Form.Group controlId="formFileLg" className="mb-3">
				<Form.Label>Large file input example</Form.Label>
				<Form.Control type="file" size="lg" />
			</Form.Group>
		</>
	);
}

export function ColorPicker() {
	return (
		<>
			<Form.Label htmlFor="exampleColorInput">Color picker</Form.Label>
			<Form.Control
				type="color"
				id="exampleColorInput"
				defaultValue="#379a55"
				title="Choose your color"
			/>
		</>
	);
}