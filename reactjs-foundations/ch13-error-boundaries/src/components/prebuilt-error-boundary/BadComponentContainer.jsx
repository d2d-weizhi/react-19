import { ErrorBoundary } from 'react-error-boundary';

function ErrorFallback({error}) {
	return (
		<div class="errorPanel">
			<h1>Oops! There's been an error.</h1>
			<p>Error:<br />{error.message}</p>
		</div>
	);
}

function BadComponent() {
	return (
		{oops: "this is not good"}
	);
}

function BadComponentContainer() {
	return (
		<ErrorBoundary
			FallbackComponent={ErrorFallback}>
			<BadComponent />
		</ErrorBoundary>
	);
}

export default BadComponentContainer;