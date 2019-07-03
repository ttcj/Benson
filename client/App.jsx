import React, { Component } from 'react'
import { connect } from 'react-redux'
import LandingContainer from './containers/LandingPage'
import UserDashBoard from './containers/UserDashBoard'

const mapStateToProps = store => ({
  isConfirmed: store.users.isConfirmed
})
export class App extends Component {
  constructor (props) {
    super(props)
  }

  render () {
    return !this.props.isConfirmed ? <LandingContainer /> : <UserDashBoard />
  }
}

export default connect(mapStateToProps)(App)
