import React from 'react';
import { render } from 'react-dom';
import { connect, Provider } from 'react-redux'
import Button from 'material-ui/Button';
import {
  BrowserRouter as Router,
  Route,
  Link,
  withRouter
} from 'react-router-dom'
import thunkMiddleware from 'redux-thunk'
import { createLogger } from 'redux-logger'
import { createStore, applyMiddleware, compose } from 'redux'
import rootReducer from './reducers'
import * as actions from './actions';

import LandingPage from './components/LandingPage/LandingPage';
import GamePage from './components/GamePage';

const loggerMiddleware = createLogger()

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  rootReducer,
  composeEnhancers(applyMiddleware(
    thunkMiddleware, // lets us dispatch() functions
    loggerMiddleware // neat middleware that logs actions
  )),
)


const landingPage = connect(null, {...actions} )(withRouter(LandingPage))
const gamePage = connect(null, {...actions} )(withRouter(GamePage))



function App() {
  return (
    <Provider store={store}>
      <Router>
        <div>
          <Route exact path="/" component={landingPage} />
          <Route exact path="/:id" component={gamePage} />
        </div>
      </Router>
    </Provider>
  );
}

export default App;
