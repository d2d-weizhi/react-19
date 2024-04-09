import './App.css';
import ErrorBoundary from './components/ErrorBoundary';

function BadComponent() {
	return ({oops: "this is not good"});
}

function App() {
	return (
		<div className="App">
			<ErrorBoundary>
				<BadComponent />
			</ErrorBoundary>
		</div>
	);
}

export default App;
