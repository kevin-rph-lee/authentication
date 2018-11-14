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
import {withRouter} from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';


class AppNavBar extends Component {
  constructor(props) {
    super(props);

  }

  render() {
    return (
      <div>
        <Navbar color="light" light expand="md">
          <NavbarBrand href="/">React-Express-Skeleton</NavbarBrand>
        </Navbar>
      </div>
    );
  }
}
export default withRouter(AppNavBar);
