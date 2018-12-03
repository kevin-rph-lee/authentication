import React, { Component } from 'react';
import { Button } from 'reactstrap';
import fire from './../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import Modal from 'react-modal';


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
      registerModalIsOpen: false

    };
    this.openLoginModal = this.openLoginModal.bind(this);
    this.openRegisterModal = this.openRegisterModal.bind(this);

    this.closeModal = this.closeModal.bind(this);

  }


  openLoginModal() {
    this.setState({loginModalIsOpen: true});
  }

  openRegisterModal() {
    this.setState({registerModalIsOpen: true});
  }


  closeModal() {
    this.setState({loginModalIsOpen: false});
    this.setState({registerModalIsOpen: false});
  }


  toggleNavBarDropDown = () => {
    this.setState({
      dropDownIsOpen: !this.state.dropDownIsOpen
    });
  }

  logout = () => {
      fire.auth().signOut();
  }

  render() {
    let dropDownOptions = null;
    if(!this.props.user){
      dropDownOptions =
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
                      <button onClick={this.closeModal}>close</button>
                    </Modal>

                    <DropdownItem onClick={this.openRegisterModal}>Register</DropdownItem>
                    <Modal
                      isOpen={this.state.registerModalIsOpen}
                      onRequestClose={this.closeModal}
                      style={customStyles}
                    >
                      <h1>Register</h1>
                      <button onClick={this.closeModal}>close</button>
                    </Modal>

                  </DropdownMenu>
                </UncontrolledDropdown>
    } else {
      dropDownOptions =
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
                    <DropdownItem onClick={this.logout}>
                      Logout
                    </DropdownItem>
                  </DropdownMenu>
                </UncontrolledDropdown>

    }


    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React-Express skeleton</NavbarBrand>
          <NavbarToggler onClick={this.toggleNavBarDropDown} />
          <Collapse isOpen={this.state.dropDownIsOpen} navbar>
            <Nav className="ml-auto" navbar>
            {dropDownOptions}
            </Nav>
          </Collapse>
        </Navbar>

      </div>
    )
  }
}
export default AppNavBar;
