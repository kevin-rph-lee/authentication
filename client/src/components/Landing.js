import React, { Component } from 'react';
import {HashRouter,
  Switch,
  Route,
  Link, BrowserRouter, browserHistory, Redirect, withRouter  } from 'react-router-dom';


class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  componentDidMount = () => {
    //Need to do authorization here to kick user back to landing
    if(typeof localStorage.getItem('token') === 'string'){
      this.props.history.push('/app')
    } else {
      console.log('false')
    }
  }


  render() {

    return (
      <div>
        <h1>You are not logged in, please login</h1>
      </div>
    )
  }
}
export default withRouter(Landing);
