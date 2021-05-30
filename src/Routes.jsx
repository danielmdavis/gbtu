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
            <Route path="/gbtu/es/signup" component={SignupEs} />
            <Route path="/gbtu/es/about" component={AboutEs} />
            <Route path="/gbtu/about" component={About} />
            <Route path="/gbtu/signup" component={Signup} />
            <Route path="/gbtu/dues" component={Dues} />
            <Route path="/gbtu/fightingretaliation" component={Rights} />
            <Route path="/gbtu/es/" component={LandingEs} />
            <Route path="/gbtu/" component={Landing} />
            <Route path="/*" component={Landing} />
          </Switch>
        </HashRouter>
      )
  }
}

export default Routes;
