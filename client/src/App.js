import React, { Component } from 'react';
import './App.css';
import fire from './config/Fire.js';
import Home from './components/Home.js';
import Login from './components/Login.js';
import {Switch, Route, withRouter} from 'react-router-dom';



class App extends Component {
  constructor() {
    super();
    this.state = ({
      user: null,
    });
    this.authListener = this.authListener.bind(this);
  }

  componentDidMount() {
    this.authListener();
  }

  authListener() {
    fire.auth().onAuthStateChanged((user) => {
      if (user) {
        console.log('Yes')
        this.setState({ user });
        localStorage.setItem('user', user.uid);
        this.props.history.push('/')
      } else {
        console.log('No')
        this.setState({ user: null });
        localStorage.removeItem('user');
        this.props.history.push('/login')
      }
    });
  }

  render() {
    return (
      <div>
        <Switch>
          <Route path='/login' render={(props) => <Login />} />
          <Route path='/' render={(props) => <Home />} />
        </Switch>
      </div>
    )
  }
}

 export default withRouter(App);