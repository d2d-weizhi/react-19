import Excel from './Excel';
import React from 'react';
import Logo from './Logo';
import Body from './Body';
import Button from './Button';
import './Discovery.css';
import Suggest from './Suggest';

const options = ['eenie', 'meenie', 'miney', 'mo'];

function Discovery() {
	return (
		<div className="wrapper">
			<h2>Logo</h2>
			<div style={{background: '#f6f6f6', display: 'inline-block'}}>
				<Logo />
			</div>
			<h2>Body</h2>
			<Body>I am content inside the body</Body>
			<h2>Buttons</h2>
			<p>
				Button with onClick:{' '}
				<Button onClick={() => alert('ouch')}>Click me</Button>
			</p>
			<p>
				A link: <Button href="https://reactjs.org/">Follow me</Button>
			</p>
			<p>
				Custom class name:{' '}
				<Button className="Discovery-custom-button">I do nothing</Button>
			</p>
			<h2>Suggest</h2>
			<p>
				<Suggest options={options} />
			</p>
			<h2>Excel</h2>
			<Excel
				headers={['Name', 'Year']}
				initialData={[
					['Charles', '1859'],
					['Antoine', '1943'],
				]} />
		</div>
	);
}

export default Discovery;