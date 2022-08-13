import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query';

import LandingPage from './Routes/LandingPage';

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <Router>
        <Switch>
          <Route render={() => <LandingPage />} path="/welcome" />
          <Redirect exact from="*" to="/welcome" />
        </Switch>
      </Router>
    </QueryClientProvider>
  );
}

export default App;
