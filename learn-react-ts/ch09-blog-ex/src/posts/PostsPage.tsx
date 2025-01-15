import { Suspense } from 'react';
import { useLoaderData, Await, useNavigate } from 'react-router-dom';
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { assertIsPosts, getPosts } from './getPosts';
import { PostData } from './types';
import { PostsList } from './PostsList';
import { savePost } from './savePost';
import { NewPostForm } from "./NewPostForm";

type Data = {
	posts: PostData[];
};

export function assertIsData(data: unknown): asserts data is Data {
	if (typeof data !== 'object') {
		throw new Error("Data isn't an object");
	}
	if (data === null) {
		throw new Error('Data is null');
	}
	
	if (!('posts' in data)) {
		throw new Error("Data doesn't contain posts");
	}
}

export function PostsPage() {
	const navigate = useNavigate();
	const queryClient = useQueryClient();
	const { mutate } = useMutation({
		mutationFn: savePost,
		onSuccess: (savedPost) => {
			queryClient.setQueryData<PostData[]>(
				['postsData'],
				(oldPosts) => {
					if (oldPosts === undefined) {
						return [savedPost];
					} else {
						return [savedPost, ...oldPosts];
					}
				}
			);
			navigate('/');
		}
	});
	const data = useLoaderData();
	assertIsData(data);
	/*
	const data = useLoaderData();
	assertIsData(data);
	
	const [isLoading, setIsLoading] = useState(true);
	const [posts, setPosts] = useState<PostData[]>([]);
	
	useEffect(() => {
		let cancel = false;
		getPosts().then((data) => {
			if (!cancel) {
				setPosts(data);
				setIsLoading(false);
			}
		});
		return () => {
			cancel = true;
		};
	}, []);
	*/
	
	/*async function handleSave(newPostData: NewPostData) {
		// const newPost = await savePost(newPostData);
		// setPosts([newPost, ...posts]);
		await savePost(newPostData);
	}*/
	
	/*if (isLoading || posts === undefined) {
		return (
			<div className="w-96 mx-auto mt-6">
				Loading...
			</div>
		);
	}*/
	
	return (
		<div className="w-96 mx-auto mt-6">
			<h2 className="text-xl text-slate-900 font-bold">
				Posts
			</h2>
			<NewPostForm onSave={mutate} />
			{/*<PostsList posts={posts} />*/}
			<Suspense fallback={<div>Fetching...</div>}>
				<Await resolve={data.posts}>
					{(posts) => {
						assertIsPosts(posts);
						return <PostsList posts={posts} />
					}}
				</Await>
			</Suspense>
		</div>
	);
}