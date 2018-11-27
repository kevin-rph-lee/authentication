import React, { Component } from 'react';
import fire from './../config/Fire';
import { Button, Form, FormGroup, Label, Input, FormText } from 'reactstrap';



class Login extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: ''
    };
  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  login = (e) => {
    e.preventDefault();
    fire.auth().signInWithEmailAndPassword(this.state.email, this.state.password).then((u)=>{

    }).catch((error) => {
        console.log(error);
      });
  }

  render() {

    return (
      <Form>
        <FormGroup>
          <Label for="exampleEmail">Email</Label>
          <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" aria-describedby="emailHelp" placeholder="Enter email" />
        </FormGroup>
        <FormGroup>
          <Label for="examplePassword">Password</Label>
          <Input type="password" name="password" id="examplePassword" placeholder="password placeholder" />
        </FormGroup>
        <Button onClick={this.login} >Login</Button>
      </Form>
    )
  }
}
export default Login;
