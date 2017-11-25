import React from 'react';
import { render } from 'react-dom';
import Button from 'material-ui/Button';
import LandingPage from './components/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware } from 'redux'
import rootReducer from './reducers'
import * as actions from './actions';

const loggerMiddleware = createLogger()

const store = createStore(
  rootReducer,
  applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )
)

store.dispatch(actions.startGame())



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
