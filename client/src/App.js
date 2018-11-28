import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire.js';
import Home from './components/Home.js';
import Landing from './components/Landing.js';
import AppNavBar from './components/AppNavBar.js';
import {Switch, Route, withRouter} from 'react-router-dom';

import { library } from '@fortawesome/fontawesome-svg-core';
import { faCog } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';


class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    library.add(faCog)
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        this.props.history.push('/')
      } else {
        this.setState({ user: null });
        localStorage.removeItem('user');
        this.props.history.push('/Landing')
      }
    });
  }

  render() {
    return (
      <div>
        <AppNavBar />
        <Switch>
          <Route path='/Home' render={(props) => <Home />} />
          <Route path='/' render={(props) => <Landing />} />
        </Switch>
      </div>
    )
  }
}

 export default withRouter(App);