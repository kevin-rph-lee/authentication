import React, { Component } from 'react';
import fire from './../config/Fire';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';



class Landing extends Component {
  constructor(props) {
    super(props);
    this.state = {

    };
  }

  render() {

    return (
      <div>
      <h1>You are not logged in, please login</h1>
      </div>
    )
  }
}
export default Landing;
