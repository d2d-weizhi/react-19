import Stack from 'react-bootstrap/Stack';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';

export function VerticalExample() {
	return (
		<Stack gap={3}
		style={{ 
			backgroundColor: "#90ffb1",
			padding: "12px"
		}}
		>
			<div className="p-2 demo-col">First item</div>
			<div className="p-2 demo-col">Second item</div>
			<div className="p-2 demo-col">Third item</div>
		</Stack>
	);
}

export function HorizontalExample() {
	return (
		<Stack gap={3} 
			direction="horizontal"
			style={{ 
				backgroundColor: "#90ffb1",
				padding: "12px"
			}}
		>
			<div className="p-2 demo-col">First item</div>
			<div className="p-2 demo-col">Second item</div>
			<div className="p-2 demo-col">Third item</div>
		</Stack>
	);
}

export function HorizontalMarginStart() {
	return (
		<Stack gap={3} 
			direction="horizontal"
			style={{ 
				backgroundColor: "#90ffb1",
				padding: "12px"
			}}
		>
			<div className="p-2 demo-col">First item</div>
			<div className="p-2 ms-auto demo-col">Second item</div>
			<div className="p-2 demo-col">Third item</div>
		</Stack>
	);
}

export function HorizontalVR() {
	return (
		<Stack gap={3} 
			direction="horizontal"
			style={{ 
				backgroundColor: "#90ffb1",
				padding: "12px"
			}}
		>
			<div className="p-2 demo-col">First item</div>
			<div className="p-2 ms-auto demo-col">Second item</div>
			<div className="vr" />
			<div className="p-2 demo-col">Third item</div>
		</Stack>
	);
}

export function StackingButtons() {
	return (
		<Stack gap={2} className="col-md-5 mx-auto">
			<Button variant="secondary">Save Changes</Button>
			<Button variant="outline-secondary">Cancel</Button>
		</Stack>
	);
}

export function InlineForm() {
	return (
		<Stack direction="horizontal" gap={3}>
			<Form.Control className="me-auto" placeholder="Add your item here..." />
			<Button variant="secondary">Submit</Button>
			<div className="vr" />
			<Button variant="outline-danger">Reset</Button>
		</Stack>
	);
}