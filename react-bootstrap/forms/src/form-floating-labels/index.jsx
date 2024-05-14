import FloatingLabel from 'react-bootstrap/FloatingLabel';
import Form from 'react-bootstrap/Form';

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