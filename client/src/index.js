import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import { BrowserRouter, Route  } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.css';


// import Navigation from './components/Navigation.js';
// import LandingPage from './components/Landing.js';
// import SignUpPage from './components/SignUp.js';
// import SignInPage from './components/SignIn.js';
// import PasswordForgetPage from './components/PasswordForget.js';
// import HomePage from './components/Home.js';
// import AccountPage from './components/Account.js';
// import AdminPage from './components/Admin.js';

// import * as ROUTES from './components/constants/routes';


ReactDOM.render(
  <BrowserRouter>
    <div>

    </div>
  </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
