import { headers } from './excel-data';
import Excel from './Excel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Excel headers={headers} initialData={[]} />
    </div>
  );
}

export default App;
