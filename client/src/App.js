import React, { Component } from 'react';
import AppNavBar from './components/AppNavBar.js';
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

    }

  }

  componentDidMount = () => {

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
