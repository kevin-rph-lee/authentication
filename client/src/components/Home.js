import React, { Component } from 'react';
// import fire from './../config/Fire';


class Home extends Component {
  constructor(props) {
    super(props);

    this.componentDidMount = this.componentDidMount.bind(this);
  }

  componentDidMount = () => {

  }

  render() {

    return (
      <div>
        <h1>Home Page, you are now logged in</h1>
      </div>
    )
  }
}
export default Home;
