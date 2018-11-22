import React, { Component } from 'react';
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
  DropdownItem, Button} from 'reactstrap';
import axios from 'axios';
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class AppNavBar extends Component {
  constructor(props) {
    super(props);
  }

  checkLogin = (e) => {
      axios.get('test/login', {

      })
      .then((response) => {
        console.log('success?')
      })
      .catch((error) => {
        console.log('error is ',error);
      })
  }


  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React-Express-Skeleton</NavbarBrand>
          <Button onClick={this.checkLogin}>Check Login!</Button>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(AppNavBar);
