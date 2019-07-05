import React from 'react'
import AddMemberForm from '../components/forms/AddMemberForm'

function HouseHold ({ addMember }) {
  return (
    <div>
      <AddMemberForm addMember={addMember} />
    </div>
  )
}

export default HouseHold
