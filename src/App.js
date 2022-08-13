import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import LandingPage from './Routes/LandingPage';

function App() {
  return (
    <Router>
      <Switch>
        <Route render={() => <LandingPage />} path="/welcome" />
        <Redirect exact from="*" to="/welcome" />
      </Switch>
    </Router>
  );
}

export default App;
