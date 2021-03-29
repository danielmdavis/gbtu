import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './Landing.js';
import About from './About.js';


class Routes extends Component {

  render() {

      return (
        <Router>
            <Route path="/" component={Landing} />
            <Route path="/about/" component={About} />
        </Router>
      )
  }
}

export default Routes;
