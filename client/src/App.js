import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar.js';
import logo from './logo.svg';
import axios from 'axios';
import './App.css';
import decode from 'jwt-decode';
import {HashRouter,
  Switch,
  Route,
  Link, BrowserRouter, Redirect, withRouter} from 'react-router-dom';
import { library } from '@fortawesome/fontawesome-svg-core'
import { fab } from '@fortawesome/free-brands-svg-icons'
import { faCheckSquare, faCoffee } from '@fortawesome/free-solid-svg-icons'

library.add(fab, faCheckSquare, faCoffee)

class App extends Component {
  constructor(props) {

    super(props);

    this.state = {
      test: null
    }
    axios.post('test/login', {

    })
    .then((response) => {
      this.setToken(response.data.token) // Setting the token in localStorage
      const decoded = decode(response.data.token)
      console.log(decoded)

      return Promise.resolve(response);
    })
    .catch((error) => {
      console.log('error is ',error);
    })
  }

  componentDidMount = () => {

  }

  setToken(idToken) {
      // Saves user token to localStorage
      localStorage.setItem('id_token', idToken)
  }

  getToken() {
      // Retrieves the user token from localStorage
      return localStorage.getItem('id_token')
  }

  logout() {
      // Clear user token and profile data from localStorage
      localStorage.removeItem('id_token');
  }


  render() {
    return (
      <div className="App">
        <AppNavBar/>
        <div className="main">

        </div>
      </div>
    );
  }
}

export default App;
