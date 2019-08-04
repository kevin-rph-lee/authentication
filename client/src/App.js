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
import { BrowserRouter, Route, Switch } from "react-router-dom";


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
      user: null,
    });
  }

  componentDidMount() {
    console.log(typeof localStorage.getItem('email'))
    console.log('Local ', localStorage.getItem('email'));
    if(typeof localStorage.getItem('email') === 'string'){
      console.log('True')
    } else {
      console.log('false')
    }
  }

  // isAuthenticated = () => {
  //   axios.post('users/authenication', {
  //     authorization: localStorage.getItem('email')
  //   })
  //   .then((response) => {
  //     console.log('gewd ',response)
  //   })
  //   .catch((error) => {
  //     console.log('baad ',response)
  //   });
  // }



  render() {

    return (
      <Switch>
        <Route exact path="/" component={Landing} />
        <Route path="*" component={() => "404 NOT FOUND"} />
      </Switch>
    )
  }
}

 export default App