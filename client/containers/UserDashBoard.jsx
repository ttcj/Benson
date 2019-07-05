import React, { Component } from 'react'
import { connect } from 'react-redux'
import BillConatiner from '../containers/BillConatiner'
import HouseHoldContainer from '../containers/HouseHoldContainer'
import { createBill, addMember } from '../actions/userActions'

const mapStateToProps = store => {
  return {
    bills: store.users.bills,
    housHold: store.users.houseHold
  }
}

const mapDispatchToProps = dispatch => ({
  createBill: event => dispatch(createBill(event)),
  addMember: event => dispatch(addMember(event))
})
class UserDashBoard extends Component {
  constructor () {
    super()
  }
  render () {
    return (
      <div>
        <BillConatiner createBill={this.props.createBill} />
        <HouseHoldContainer addMember={this.props.addMember} />
      </div>
    )
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(UserDashBoard)
