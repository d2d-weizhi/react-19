import Dropdown from 'react-bootstrap/Dropdown'
import DropdownButton from 'react-bootstrap/DropdownButton';
import Stack from 'react-bootstrap/Stack'

export default function ColorModesDemo() {
	return (
		<Stack direction="horizontal" gap={3}>
			<DropdownButton
				id="dropdown-button-light-example"
				variant="secondary"
				title="Light dropdown"
				className="mt-2"
				data-bs-theme="light"
			>
				<Dropdown.Item href="#/action-1" active>
					Action
				</Dropdown.Item>
				<Dropdown.Item href="#/action-2">
					Another action
				</Dropdown.Item>
				<Dropdown.Item href="#/action-3">
					Something else
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item href="#/action-4">
					Separated link
				</Dropdown.Item>
			</DropdownButton>

			<DropdownButton
				id="dropdown-button-dark-example"
				variant="secondary"
				title="Dark dropdown"
				className="mt-2"
				data-bs-theme="dark"
			>
				<Dropdown.Item href="#/action-1" active>
					Action
				</Dropdown.Item>
				<Dropdown.Item href="#/action-2">
					Another action
				</Dropdown.Item>
				<Dropdown.Item href="#/action-3">
					Something else
				</Dropdown.Item>
				<Dropdown.Divider />
				<Dropdown.Item href="#/action-4">
					Separated link
				</Dropdown.Item>
			</DropdownButton>
		</Stack>
	);
}