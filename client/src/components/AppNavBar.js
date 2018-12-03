import React, { Component } from 'react';
import { Button } from 'reactstrap';
import fire from './../config/Fire';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'


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


class AppNavBar extends Component {
  constructor(props) {
    super(props);

    this.state = {
      dropDownIsOpen: false
    };
  }


  // componentDidMount() {
  //   console.log(this.state.user)
  // }

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
