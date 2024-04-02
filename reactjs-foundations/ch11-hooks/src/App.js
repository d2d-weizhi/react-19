import './App.css';
import React from 'react';
import CallMe from './components/memoized-callbacks/CallMe';
// import ButtonContainer from './components/setters/ButtonContainer';
// import NumberGuessing from './components/usestate-basics/NumberGuessing';
// import RenderCounter from './components/useeffect-default/RenderCounter';
// import TimerFun from './components/useeffect-timers/TimerFun';
// import TimerRestartFun from './components/useeffect-timers/TimerRestartFun';
// import TimerOnceFun from './components/useeffect-timers/TimerOnceFun';
// import TimerConditionalFun from './components/useeffect-timers/TimerConditionalFun';
// import ShippingAddress from './components/async-requests/ShippingAddress';
// import { ThemeContext } from './components/using-context/theme-context';
// import Counter from './components/reducer-basics/Counter';

function App() {
	//const { theme } = React.useContext(ThemeContext);

	return (
		<div className="App">
			{/* <header className="App-header"
				style={{ backgroundColor: theme.backgroundColor, color: theme.color, padding: theme.padding}}>
				<h1>Welcome to my app.</h1>
			</header> */}
			{/* <NumberGuessing /> */}
			{/* <ButtonContainer /> */}
			{/* <RenderCounter /> */}
			{/* <TimerFun /> */}
			{/* <TimerRestartFun /> */}
			{/* <TimerOnceFun /> */}
			{/* <TimerConditionalFun /> */}
			{/* <ShippingAddress /> */}
			{/* <Counter /> */}
			<CallMe />
		</div>
	);
}

export default App;
