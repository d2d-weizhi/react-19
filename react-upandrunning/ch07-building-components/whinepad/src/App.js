import './App.css';
import Discovery from './components/Discovery';
import Excel from './components/Excel';

var headers = localStorage.getItem('headers');
var data = localStorage.getItem('data');
const isDiscovery = window.location.pathname.replace(/\//g, '') === 'discovery';

if (!headers) {
	headers = ['Title', 'Year', 'Rating', 'Comments'];
	data = [['Red whine', '2021', '3', 'meh']];
}

function App() {
	if (isDiscovery) {
		return <Discovery />;
	}
	return (
		<div>
			
		</div>
	);
}

export default App;
