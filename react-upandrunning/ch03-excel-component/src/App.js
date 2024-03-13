import { headers, data } from './excel-data';
import Excel from './Excel';
import './App.css';

function App() {
  return (
    <div className="App">
      <Excel headers={headers} initialData={data} />
    </div>
  );
}

export default App;
