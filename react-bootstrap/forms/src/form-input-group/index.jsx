import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import Dropdown from 'react-bootstrap/Dropdown';
import DropdownButton from 'react-bootstrap/DropdownButton';
import SplitButton from 'react-bootstrap/SplitButton';
import InputGroup from 'react-bootstrap/InputGroup';

export function BasicExample() {
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon1">@</InputGroup.Text>
				<Form.Control
					placeholder="Username"
					aria-label="Username"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<InputGroup.Text id="basic-addon2">@example.com</InputGroup.Text>
			</InputGroup>

			<Form.Label htmlFor="basic-url">Your vanity URL</Form.Label>
			<InputGroup className="mb-3">
				<InputGroup.Text id="basic-addon3">
					https://example.com/users
				</InputGroup.Text>
				<Form.Control id="basic-url" aria-describedby="basic-addon3" />
			</InputGroup>

			<InputGroup className="mb-3">
				<InputGroup.Text>$</InputGroup.Text>
				<Form.Control aria-label="Amount (to the nearest dollar)" />
				<InputGroup.Text>.00</InputGroup.Text>
			</InputGroup>

			<InputGroup>
				<InputGroup.Text>With textarea</InputGroup.Text>
				<Form.Control as="textarea" aria-label="With textarea" />
			</InputGroup>
		</>
	);
}

export function SizesExample() {
	return (
		<>
			<InputGroup size="sm" className="mb-3">
				<InputGroup.Text id="inputGroup-sizing-sm">Small</InputGroup.Text>
				<Form.Control
					aria-label="Small"
					aria-describedby="inputGroup-sizing-sm"
				/>
			</InputGroup><br />
			<InputGroup className="mb-3">
				<InputGroup.Text id="inputGroup-sizing-default">
					Default
				</InputGroup.Text>
				<Form.Control
					aria-label="Default"
					aria-describedby="inputGroup-sizing-default"
				/>
			</InputGroup><br />
			<InputGroup size="lg">
				<InputGroup.Text id="inputGroup-sizing-lg">Large</InputGroup.Text>
				<Form.Control
					aria-label="Large"
					aria-describedby="inputGroup-sizing-sm"
				/>
			</InputGroup>
		</>
	);
}

export function CheckboxesExample() {
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Checkbox aria-label="Checkbox for following text input" />
				<Form.Control aria-label="Text input with checkbox" />
			</InputGroup>
			<InputGroup>
				<InputGroup.Radio aria-label="Radio button for following text input" />
				<Form.Control aria-label="Text input with radio button" />
			</InputGroup>
		</>
	);
}

export function MultipleInputsExample() {
	return (
		<InputGroup className="mb-3">
			<InputGroup.Text>First and last name</InputGroup.Text>
			<Form.Control aria-label="First name" />
			<Form.Control aria-label="Last name" />
		</InputGroup>
	);
}

export function MultiAddonsExample() {
	return (
		<>
			<InputGroup className="mb-3">
				<InputGroup.Text>$</InputGroup.Text>
				<InputGroup.Text>0.00</InputGroup.Text>
				<Form.Control aria-label="Dollar amount (with dot and two decimal places" />
			</InputGroup>
			<InputGroup>
				<Form.Control aria-label="Dollar amount (with dot and two decimal places" />
				<InputGroup.Text>$</InputGroup.Text>
				<InputGroup.Text>0.00</InputGroup.Text>
			</InputGroup>
		</>
	);
}

export function ButtonsExample() {
	return (
		<>
			<InputGroup className="mb-3">
				<Button variant="outline-secondary" id="button-addon1">
					Button
				</Button>
				<Form.Control
					aria-label="Example text with button addon"
					aria-describedby="basic-addon1"
				/>
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control
					placeholder="Recipient's username"
					aria-label="Recipient's username"
					aria-describedby="basic-addon2"
				/>
				<Button variant="outline-secondary" id="button-addon2">
					Button
				</Button>
			</InputGroup>

			<InputGroup className="mb-3">
				<Button variant="outline-secondary">Button</Button>
				<Button variant="outline-secondary">Button</Button>
				<Form.Control aria-label="Example text with two button addons" />
			</InputGroup>

			<InputGroup>
				<Form.Control
					placeholde="Recipient's username"
					aria-label="Recipient's username with two button addons"
				/>
				<Button variant="outline-secondary">Button</Button>
				<Button variant="outline-secondary">Button</Button>
			</InputGroup>
		</>
	);
}

export function ButtonDropdownsExample() {
	return (
		<>
			<InputGroup className="mb-3">
				<DropdownButton
					variant="outline-secondary"
					title="Dropdown"
					id="input-group-dropdown-1"
				>
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</DropdownButton>
				<Form.Control aria-label="Text input with dropdown button" />
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control aria-label="Text input with dropdown button" />

				<DropdownButton
					variant="outline-secondary"
					title="Dropdown"
					id="input-group-dropdown-2"
					align="end"
				>
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</DropdownButton>
			</InputGroup>

			<InputGroup>
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-3"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
        <Form.Control aria-label="Text input with 2 dropdown buttons" />
        <DropdownButton
          variant="outline-secondary"
          title="Dropdown"
          id="input-group-dropdown-4"
          align="end"
        >
          <Dropdown.Item href="#">Action</Dropdown.Item>
          <Dropdown.Item href="#">Another action</Dropdown.Item>
          <Dropdown.Item href="#">Something else here</Dropdown.Item>
          <Dropdown.Divider />
          <Dropdown.Item href="#">Separated link</Dropdown.Item>
        </DropdownButton>
      </InputGroup>
		</>
	);
}

export function SegmentedButtonDropdowns() {
	return (
		<>
			<InputGroup className="mb-3">
				<SplitButton
					variant="outline-secondary"
					title="Action"
					id="segmented-button-dropdown-1"
				>
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</SplitButton>
				<Form.Control aria-label="Text input with dropdown button" />
			</InputGroup>

			<InputGroup className="mb-3">
				<Form.Control aria-label="Text input with dropdown button" />
				<SplitButton
					variant="outline-secondary"
					title="Action"
					id="segmented-button-dropdown-2"
					alignRight
				>
					<Dropdown.Item href="#">Action</Dropdown.Item>
					<Dropdown.Item href="#">Another action</Dropdown.Item>
					<Dropdown.Item href="#">Something else here</Dropdown.Item>
					<Dropdown.Divider />
					<Dropdown.Item href="#">Separated link</Dropdown.Item>
				</SplitButton>
			</InputGroup>
		</>
	);
}