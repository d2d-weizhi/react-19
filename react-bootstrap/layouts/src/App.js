import './App.css';
import 'bootstrap/dist/css/bootstrap.css';
import { FirstAndLast } from './grid-system/ordering-offset';
// import { MixAndMatch } from './grid-system/responsive-grid';
// import AutoLayoutVariable from './grid-system/auto-layout-variable';
// import AutoLayoutSizing from './grid-system/auto-layout-sizing';
// import FluidContainer from './grid-system/fluid-container';
// import BasicContainer from './grid-system/basic-container';

function App() {
	return (
		<div className="App">
			<FirstAndLast />
			{/* <MixAndMatch /> */}
			{/* <FluidContainer /> */}
			{/* <BasicContainer /> */}
		</div>
	);
}

export default App;
