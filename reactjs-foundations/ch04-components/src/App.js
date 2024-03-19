// import Farms from './components/passing-props/Farms';
// import UserProfile from './components/userprofile/UserProfile';
// import Foo from './components/event-handlers/Foo';
// import Counter from './components/state-func/Counter';
// import BasicFigure from './components/barebones/BasicFigure';
// import FigureList from './components/barebones/FigureList';
// import {ToDo} from './components/func-component/ToDo';
// import NavBar from './components/child-components/NavBar';
// import NavItem from './components/child-components/NavItem';
import './App.css';
import CounterController from './components/memory-leak/CounterController';

function App() {
	return (
		<div className="App">
			<CounterController />
			{/* <NavBar onClick={() => {console.log('clicked')}}>
				<NavItem />
				<NavItem />
				<NavItem />
			</NavBar><br />
			<Farms /><br />
			<UserProfile /><br />
			<Foo /><br />
			<Counter /><br />
			<FigureList /><br />
			<ToDo /> */}
		</div>
	);
}

export default App;
