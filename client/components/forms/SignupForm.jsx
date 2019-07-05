import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField, required, number, maxLength10 } from './Validate'
function SignupForm (props) {
  const { handleSubmit, closeModal, userSignup, setActiveModal } = props

  return (
    <div>
      <form
        className='SignupForm'
        onSubmit={handleSubmit(values => {
          userSignup(values)
          setActiveModal('confirm')
          closeModal()
        })}
      >
        <label htmlFor='name'> Name </label>
        <Field
          className='formInput'
          name='name'
          component={renderField}
          validate={[required]}
          type='text'
        />
        <br />
        <label htmlFor='phone'> Phone #</label>
        <Field
          className='formInput'
          name='phone'
          component={renderField}
          validate={[required, maxLength10, number]}
          type='text'
        />
        <br />
        <label htmlFor='householdName'> Household name</label>
        <Field
          className='formInput'
          name='householdName'
          component={renderField}
          validate={[required]}
          type='text'
        />

        <input type='submit' value='SUBMIT' className='formSubmit' />
      </form>
    </div>
  )
}

export default reduxForm({ form: 'userSignup' })(SignupForm)
