import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import LandingPage from './components/LandingPage/LandingPage';

import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'

function App() {
  return (
    <Router>
      <div>
        <Route exact path="/" component={LandingPage} />
      </div>
    </Router>
  );
}

export default App;
