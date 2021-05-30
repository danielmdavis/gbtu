import React, { Component } from 'react';
import { BrowserRouter as Router, HashRouter, Route, Switch, Redirect } from 'react-router-dom';
import Landing from './Landing.jsx';
import LandingEs from './LandingEs.jsx';
import About from './About.jsx';
import AboutEs from './AboutEs.jsx';
import Signup from './Signup.jsx';
import SignupEs from './SignupEs.jsx';
import Dues from './Dues.jsx';
import Rights from './Rights.jsx';


class Routes extends Component {

  render() {

      return (
        <HashRouter>
          <Switch>
            <Route path="/es/signup" component={SignupEs} />
            <Route path="/es/about" component={AboutEs} />
            <Route path="/about" component={About} />
            <Route path="/signup" component={Signup} />
            <Route path="/dues" component={Dues} />
            <Route path="/es/fightingretaliation" component={Rights} />
            <Route path="/fightingretaliation" component={Rights} />
            <Route path="/es/" component={LandingEs} />
            <Route path="/" component={Landing} />
            <Route path="/*" component={Landing} />
          </Switch>
        </HashRouter>
      )
  }
}

export default Routes;
