import './App.css';
import {ErrorBoundary} from 'react-error-boundary';
import Greeting from './components/eventhandlers/Greeting';
import BadComponentContainer from './components/prebuilt-error-boundary/BadComponentContainer';
//import SometimesBad from './components/sometimes-errors/SometimesBad';

function ErrorFallback({error}) {
	return (
		<div class="errorPanel">
			<h1>Oops! There's been an error.</h1>
			<p>Error:<br />{error.message}</p>
		</div>
	);
}

function App() {
	return (
		<div className="App">
			<ErrorBoundary FallbackComponent={ErrorFallback}>
				<Greeting />
			</ErrorBoundary>
		</div>
	);
}

export default App;
