import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar.js';
import logo from './logo.svg';
import axios from 'axios'
import './App.css';
import {HashRouter,
  Switch,
  Route,
  Link, BrowserRouter, Redirect, withRouter} from 'react-router-dom';


class App extends Component {


  componentDidMount = () => {

      axios.post('test/login', {

      })
      .then((response) => {
        console.log('success?')
      })
      .catch((error) => {
        console.log('error is ',error);
      })
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
