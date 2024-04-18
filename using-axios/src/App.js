import './App.css';
// import SkillsList from './components/axios-get-simple';
//import IndustriesDDL from './components/axios-get-industries';
import AddProfile from './components/axios-post-simple';
import '@progress/kendo-theme-default/dist/all.css';

function App() {
  return (
    <div className="App">
      <h1>Time to Add a Project Owner Profile</h1>
      {/* <SkillsList /> */}
      {/* <IndustriesDDL /> */}
      <AddProfile />
    </div>
  );
}

export default App;
