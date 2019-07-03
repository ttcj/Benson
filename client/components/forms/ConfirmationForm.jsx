import React from 'react'
import { Field, reduxForm } from 'redux-form'

function ConfirmationForm (props) {
  const {
    handleSubmit,
    confirmUser,
    currentUser,
    closeModal,
    setActiveModal
  } = props

  return (
    <div>
      <form
        className='signinForm'
        onSubmit={handleSubmit(values => {
          confirmUser(values)
          setActiveModal(null)
          closeModal()
        })}
      >
        <label> Check {currentUser.phone} for you confirmation code</label>
        <Field
          className='formInput'
          name='confirmationCode'
          component='input'
          type='text'
        />
        <br />
        <input type='submit' value='SUBMIT' className='formSubmit' />
      </form>
    </div>
  )
}

export default reduxForm({ form: 'userConfirmation' })(ConfirmationForm)
