import React, { Component } from 'react';
import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
// import fire from './../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';
import Alert from 'react-s-alert';
import 'react-s-alert/dist/s-alert-default.css';
import 'react-s-alert/dist/s-alert-css-effects/bouncyflip.css';
import axios from 'axios';

import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem } from 'reactstrap';

const customStyles = {
  content : {
    top                   : '50%',
    left                  : '50%',
    right                 : 'auto',
    bottom                : 'auto',
    marginRight           : '-50%',
    transform             : 'translate(-50%, -50%)'
  }
};


class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownIsOpen: false,
      loginModalIsOpen: false,
      registerModalIsOpen: false,
      email: '',
      password: ''

    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openRegisterModal = this.openRegisterModal.bind(this);
    this.closeModal = this.closeModal.bind(this);

  }


  errorPopUp = (message) => {
      // e.preventDefault();
      Alert.info(message, {
          position: 'top-right',
          effect: 'bouncyflip',
          offset: 100
      });
  }


  closeModal = () => {
    this.setState({loginModalIsOpen: false});
    this.setState({registerModalIsOpen: false});
    this.setState({email: ''});
    this.setState({password: ''});
  }

  login = (e) => {
    e.preventDefault();
    console.log(this.state.email + ' ' + this.state.password)
    axios.post('users/login', {
      email: this.state.email,
      password: this.state.password
    })
    .then((response) => {
      console.log(response.data);
    })
    .catch((error) => {
      this.errorPopUp(error.message);
    });

  }


  signUp = (e) => {
    e.preventDefault();

  }

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  }

  openLoginModal = () => {
    this.setState({loginModalIsOpen: true});
  }

  openRegisterModal = () => {
    this.setState({registerModalIsOpen: true});
  }

  toggleNavBarDropDown = () => {
    this.setState({
      dropDownIsOpen: !this.state.dropDownIsOpen
    });
  }

  logout = () => {

  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React-Express skeleton</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBarDropDown} />
          <Collapse isOpen={this.state.dropDownIsOpen} navbar>
            <Nav className="ml-auto" navbar>
                <UncontrolledDropdown nav inNavbar>
                  <DropdownToggle nav caret>
                    <FontAwesomeIcon icon="cog" />
                  </DropdownToggle>
                  <DropdownMenu right>
                    <DropdownItem>
                      Option 1
                    </DropdownItem>
                    <DropdownItem>
                      Option 2
                    </DropdownItem>
                    <DropdownItem divider />
                    <DropdownItem onClick={this.openLoginModal}>Login</DropdownItem>
                    <Modal
                      isOpen={this.state.loginModalIsOpen}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                    >
                      <h1>Login</h1>
                      <Form>
                        <FormGroup>
                          <Label for="exampleEmail">Email</Label>
                          <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </FormGroup>
                        <FormGroup>
                          <Label>Password</Label>
                          <Input type="password"  value={this.state.password} onChange={this.handleChange}  name="password" id="password" placeholder="password" />
                        </FormGroup>
                        <Button color="success" onClick={this.login} >Login</Button>
                      </Form>
                      <Button onClick={this.closeModal}>close</Button>
                    </Modal>

                    <DropdownItem onClick={this.openRegisterModal}>Register</DropdownItem>
                    <Modal
                      isOpen={this.state.registerModalIsOpen}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                    >
                      <h1>Register</h1>
                      <Form>
                        <FormGroup>
                          <Label>Email</Label>
                          <Input value={this.state.email} onChange={this.handleChange} type="email" name="email" id="exampleEmail" aria-describedby="emailHelp" placeholder="Enter email" />
                        </FormGroup>
                        <FormGroup>
                          <Label for="examplePassword">Password</Label>
                          <Input type="password"  value={this.state.password} onChange={this.handleChange}  name="password" id="password" placeholder="password" />
                        </FormGroup>
                        <Button color="success" onClick={this.signUp} >Register</Button>
                      </Form>
                      <Button onClick={this.closeModal}>close</Button>
                    </Modal>

                  </DropdownMenu>
                </UncontrolledDropdown>
            </Nav>
          </Collapse>
        </Navbar>
        <Alert timeout={5000} stack={{limit: 1}} />
      </div>
    )
  }
}
export default AppNavBar;
