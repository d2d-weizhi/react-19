import './App.css';
import InputForm from './components/InputForm';
import FilterSelect from './components/FilterSelect';
import RemindersList from './components/RemindersList';

function App() {
	return (
		<div className="App">
			<InputForm />
			<FilterSelect />
			<RemindersList />
		</div>
	);
}

export default App;
