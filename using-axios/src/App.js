import './App.css';
// import SkillsList from './components/axios-get-simple';
import IndustriesDDL from './components/axios-get-industries';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div className="App">
      <h1>List of Industries (KendoReact DropDownList)</h1>
      {/* <SkillsList /> */}
      <IndustriesDDL />
    </div>
  );
}

export default App;
