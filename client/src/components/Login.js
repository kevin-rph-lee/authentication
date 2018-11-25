import React, { Component } from 'react';
import fire from './../config/Fire';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Login extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }


  componentDidMount = () => {

  }

  render() {

    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input type="email" name="email" id="exampleEmail" placeholder="with a placeholder" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button>Submit</Button>
      </Form>
    )
  }
}
export default Login;
