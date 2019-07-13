import React, { Component } from 'react';
// import fire from './../config/Fire';
import { Button } from 'reactstrap';
import axios from 'axios';

class Home extends Component {
  constructor(props) {
    super(props);

    this.dbTest = this.dbTest.bind(this);
    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {

  }

  //Sends an axios request to the DB server
  dbTest = () => {
    axios.get('/users/')
      .then(function (response) {
        console.log(response.data);
      })
      .catch(function (error) {
        console.log(error);
      })
  }

  render() {

    return (
      <div>
        <h1>Home Page, you are now logged in</h1>
        <Button color="primary" onClick={this.dbTest}>primary</Button>{' '}
      </div>
    )
  }
}
export default Home;
