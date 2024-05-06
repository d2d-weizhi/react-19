import React from 'react';
import './App.css';
import { 
	createBrowserRouter,
	RouterProvider,
	Navigate
} from 'react-router-dom';
import { ContactPage } from './using-rhf/ContactPage';
import { ThankYouPage } from './ThankYouPage';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Navigate to="contact" />,
	},
	{
		path: '/contact',
		element: <ContactPage />
	},
	{
		path: '/thank-you/:name',
		element: <ThankYouPage />
	},
]);

function App() {
	return (
		<div className="App">
			<RouterProvider router={router} />
		</div>
	);
}

export default App;
