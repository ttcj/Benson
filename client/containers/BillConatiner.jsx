import React, { Component } from 'react'

import BillForm from '../components/forms/BillForm'

class BillConatiner extends Component {
  constructor () {
    super()
  }

  render () {
    return (
      <div>
        <BillForm createBill={this.props.createBill} />
      </div>
    )
  }
}

export default BillConatiner
