import React from 'react';
import {
	createBrowserRouter,
	RouterProvider,
	defer
} from 'react-router-dom';
import {
	QueryClient,
	QueryClientProvider,
} from "@tanstack/react-query";
import './App.css';
import {PostsPage} from "./posts/PostsPage";
import { getPosts } from "./posts/getPosts";

const queryClient = new QueryClient();
const router = createBrowserRouter([
	{
		path: "/",
		element: <PostsPage />,
		loader: async() => {
			const existingData = queryClient.getQueryData(['postsData']);
			
			if (existingData) {
				return defer({ posts: existingData });
			}
			
			return defer({
				posts: queryClient.fetchQuery({
					queryKey: ['postsData'],
					queryFn: getPosts
				})
			});
		}
	}
]);

function App() {
	return (
		<QueryClientProvider client={queryClient}>
			<RouterProvider router={router} />
		</QueryClientProvider>
	);
}

export default App;
