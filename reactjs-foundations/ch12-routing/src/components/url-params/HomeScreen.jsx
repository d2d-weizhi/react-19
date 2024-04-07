import {Route} from 'react-router-dom';
import { Home, Login } from './PageLinks';
import UserProfile from './UserProfile';

function HomeScreen(props) {
  return (
    <>
      <Route exact path="/">
        <Home />
      </Route>
      <Route exact path="/login">
        <Login />
      </Route>
      <Route path="/user/:id">
        <UserProfile />
      </Route>
    </>
  );
}

export default HomeScreen;