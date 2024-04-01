// import StyledParent from './components/cascading-styles/StyledParent';
//import WarningMessage from './components/style-modules/WarningMessage';
// import DisplayStatus from './components/styles-library/DisplayStatus';
// import DisplayMessage from './components/css-modules/DisplayMessage';
import './App.css';
import ExampleComponent from './components/styled-components/ExampleComponent';

function App() {
  return (
    <div className="App">
      {/* <StyledParent /> */}
      {/* <WarningMessage warningMessage="An Error has Occurred" /> */}
      {/* <DisplayStatus message={{type: 'success'}} /> */}
      {/* <DisplayMessage /> */}
      <ExampleComponent />
    </div>
  );
}

export default App;
