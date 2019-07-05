import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField, required, number, maxLength10 } from './Validate'

function AddMemberForm (props) {
  const { handleSubmit, addMember } = props

  return (
    <div>
      <form
        className='dashboardForm'
        onSubmit={handleSubmit(values => {
          addMember(values)
        })}
      >
        <label> Add A Roomate</label>
        <Field
          className='formInput'
          name='Name'
          component={renderField}
          validate={[required]}
          type='text'
        />
        <label>Phone</label>
        <Field
          className='formInput'
          name='Phone'
          component={renderField}
          validate={[required, number, maxLength10]}
          type='text'
        />
        <br />
        <input type='submit' value='Add Roomate' className='formSubmit' />
      </form>
    </div>
  )
}

export default reduxForm({ form: 'AddMemeberForm' })(AddMemberForm)
