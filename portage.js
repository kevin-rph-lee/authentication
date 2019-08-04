import React, { Component } from 'react';
import './App.css';
// import fire from './config/Fire.js';
import Home from './components/Home.js';
import Landing from './components/Landing.js';
import AppNavBar from './components/AppNavBar.js';
import {Switch, Route, withRouter} from 'react-router-dom';
import axios from 'axios';
import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import Alert from 'react-s-alert';

class App extends Component {


  constructor() {
    super();
    library.add(faCog)
    this.state = ({
      user: null,
    });
  }

  componentDidMount() {
    console.log('Local ', localStorage.getItem('email'));
  }

  isAuthenticated = () => {
    axios.post('users/authenication', {
      authorization: localStorage.getItem('email')
    })
    .then((response) => {
      console.log('gewd ',response)
    })
    .catch((error) => {
      console.log('baad ',response)
    });
  }

    const PrivateRoute = ({ component: Component, ...rest }) => (
      <Route {...rest} render={(props) => (
        isAuthenticated === true
          ? <Component {...props} />
          : <Redirect to='/' />
      )} />
    )

  render() {

    return (
      <div>
        <AppNavBar user = {this.state.user} />
        <Switch>
          <PrivateRoute path='/protected' component={Protected} />
          <Route path='/' render={(props) => <Landing />} />
        </Switch>
      </div>
    )
  }
}

 export default withRouter(App);