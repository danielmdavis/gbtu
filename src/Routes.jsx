import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './Landing.jsx';
import About from './About.jsx';
import Signup from './Signup.jsx';


class Routes extends Component {

  render() {

      return (
        <Router>
          <Switch>
            <Route path="/gbtu/about" component={About} />
            <Route path="/gbtu/signup" component={Signup} />
            <Route path="/gbtu/" component={Landing} />
          </Switch>
        </Router>
      )
  }
}

export default Routes;
