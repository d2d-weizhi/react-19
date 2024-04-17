import './App.css';
import SkillsList from './components/axios-get-simple';

function App() {
  return (
    <div className="App">
      <h1>List of Skills (by Keyword match)</h1>
      <SkillsList />
    </div>
  );
}

export default App;
