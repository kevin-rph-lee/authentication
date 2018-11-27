import React, { Component } from 'react';
import { Button } from 'reactstrap';
import fire from './../config/Fire';


class Home extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  logout = () => {
      fire.auth().signOut();
  }

  componentDidMount = () => {

  }

  render() {

    return (
      <div>
        <Button onClick={this.logout} >Logout</Button>
      </div>
    )
  }
}
export default Home;
