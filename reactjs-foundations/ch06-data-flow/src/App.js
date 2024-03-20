//import { useState } from 'react';
// import PropsMutator from './components/props-mutator/PropsMutator';
// import WelcomeMessage from './components/proptypes-classes/WelcomeMessage';
// import MyComponent from './components/proptypes-func/MyComponent';
// import SiteLink from './components/validating-nodes/SiteLink';
// import BorderBox from './components/validating-elements/BorderBox';
// import Person from './components/validating-jsclass/Person';
// import FamilyTree from './components/validating-jsclass/FamilyTree';
// import Contact from './components/custom-validator/Contact';
import CounterClass from './components/pass-func-setstate/CounterClass';
import './App.css';

function App() {
  //const [theNumber, setTheNumber] = useState(0);
  // var clarence = new Person('Clarence');
  return (
    <div className="App">
      <CounterClass />
      {/* <Contact fullName="Chen Weizhi" phone="555" /> */}
      {/* <FamilyTree father={clarence} /> */}
      {/* <BorderBox>
        <p>The first paragraph</p>
        <p>The second paragraph</p>
      </BorderBox> */}
      {/* <SiteLink url="http://example.com" linkName={{name: 'Example'}} /> */}
      {/* <MyComponent itemValue={2} /> */}
      {/* <WelcomeMessage firstName="Weizhi" /> */}
      {/* <PropsMutator theNumber={theNumber} setTheNumber={setTheNumber} />     */}
    </div>
  );
}

export default App;
