import React, { Component } from 'react';
import './App.css';
// import fire from './config/Fire.js';
import Home from './components/Home.js';
import Landing from './components/Landing.js';
import AppNavBar from './components/AppNavBar.js';
// import {Switch, Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from 'react-s-alert';
import { ProtectedRoute } from './components/ProtectedRoute.js';
import {Link, BrowserRouter, Route, Switch, withRouter } from "react-router-dom";


// import React from 'react'
// import {
//   BrowserRouter as Router,
//   Route,
//   Link,
//   Redirect,
//   withRouter
// } from 'react-router-dom'

const test = true;

// const PrivateRoute = ({ component: Component, ...rest }) => (
//   <Route {...rest} render={(props) => (
//     // localStorage.getItem('email') === true
//     test === true
//       ? <Component {...props} />
//       : <Redirect to='/' />
//   )} />
// )


class App extends Component {


  constructor() {
    super();
    library.add(faCog)
    this.state = ({
      token: null,
    });
  }

  componentDidMount() {

  }

  updateToken = (token) => {
    this.setState({
      token: token
    });
  }


  render() {

    return (
      <div>
        <AppNavBar updateToken = {this.updateToken}/>
        <Switch>
          <Route exact path="/" component={Landing} />
          <ProtectedRoute token = {this.state.token} exact path="/app" component={Home} />
          <Route path="*" component={() => "404 NOT FOUND"} />
        </Switch>
      </div>
    )
  }
}

 export default withRouter(App)