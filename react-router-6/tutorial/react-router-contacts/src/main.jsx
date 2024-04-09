import React from 'react'
import ReactDOM from 'react-dom/client'
import {
	createRoutesFromElements,
	createBrowserRouter,
	RouterProvider,
	Route
} from 'react-router-dom';
import App, { loader as appLoader, action as appAction } from './App.jsx';
import ErrorPage from './components/ErrorPage';
import Home from './components/Home/index.jsx';
import Contact, { 
	loader as contactLoader,
	action as contactAction 
} from './components/Contact';
import EditContact, {action as editAction} from './components/EditContact/index.jsx';
import { action as destroyAction } from './components/destroy.jsx';

/* const router = createBrowserRouter([
	{
		path: "/",
		element: <App />,
		errorElement: <ErrorPage />,
		loader: appLoader,
		action: appAction,
		children: [
			{
				errorElement: <ErrorPage />,
				children: [
					{ index: true, element: <Home /> },
					{
						path: "contacts/:contactId",
						element: <Contact />,
						loader: contactLoader,
						action: contactAction,
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
				],
			},
		]
	},
]); */

// Alternatively, we can also use the JSX Routes approach.
const router = createBrowserRouter(
	createRoutesFromElements(
		<Route
			path="/"
			element={<App />}
			loader={appLoader}
			action={appAction}
			errorElement={<ErrorPage />}
		>
			<Route errorElement={<ErrorPage />}>
				<Route index element={<Home />} />
				<Route
					path="contacts/:contactId"
					element={<Contact />}
					loader={contactLoader}
					action={contactAction}
				/>
				<Route
					path="contacts/:contactId/edit"
					element={<EditContact />}
					loader={contactLoader}
					action={editAction}
				/>
				<Route
					path="contacts/:contactId/destroy"
					action={destroyAction}
				/>
			</Route>
		</Route>
	)
);

ReactDOM.createRoot(document.getElementById('root')).render(
	<React.StrictMode>
		<RouterProvider router={router} />
	</React.StrictMode>,
)
