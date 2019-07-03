import React, { Component } from 'react';
import { connect } from 'react-redux';
import LandingContainer from "./containers/LandingPage"
const mapStateToProps = store => ({});
export class App extends Component {
  constructor() {
    super();
  }

  render() { 
    return <LandingContainer/>
  }
}

export default connect(mapStateToProps)(App);
