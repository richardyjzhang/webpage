import React from 'react';
import ReactDOM from 'react-dom';
import {
  BrowserRouter as Router,
  Switch,
  Route,
} from "react-router-dom";
import HomePage from './pages/HomePage';

ReactDOM.render(
  <React.StrictMode>
    {
    <Router>
        <Switch>
          <Route path="/">
            <HomePage />
          </Route>
        </Switch>
    </Router>
    }
  </React.StrictMode>,
  document.getElementById('root')
);
