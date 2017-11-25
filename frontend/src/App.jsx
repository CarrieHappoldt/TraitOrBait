import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux'
import Button from 'material-ui/Button';
import LandingPage from './components/LandingPage/LandingPage';
import {
  BrowserRouter as Router,
  Route,
  Link
} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import * as actions from './actions';

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )),
)


const landingPage = connect(null, {...actions} )(LandingPage)



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={landingPage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
