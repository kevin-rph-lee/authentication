import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar.js';
import logo from './logo.svg';
import './App.css';
import {HashRouter,
  Switch,
  Route,
  Link, BrowserRouter, Redirect, withRouter} from 'react-router-dom';


class App extends Component {
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
