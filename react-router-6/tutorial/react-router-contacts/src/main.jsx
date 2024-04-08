import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createBrowserRouter,
	RouterProvider
} from 'react-router-dom';
import App, { loader as appLoader, action as appAction } from './App.jsx';
import ErrorPage from './components/ErrorPage';
import Contact, { loader as contactLoader } from './components/Contact';
import EditContact, {action as editAction} from './components/EditContact/index.jsx';
import { action as destroyAction } from './components/destroy.jsx';

const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		loader: appLoader,
		action: appAction,
		children: [
			{
				path: "contacts/:contactId",
				element: <Contact />,
				loader: contactLoader,
			},
			{
				path: "contacts/:contactId/edit",
				element: <EditContact />,
				loader: contactLoader,
				action: editAction,
			},
			{
				path: "contacts/:contactId/destroy",
				action: destroyAction,
				errorElement: <div>Ooops! There was an error.</div>
			},
		]
	},
]);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
