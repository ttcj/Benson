import React from 'react'
import { Field, reduxForm } from 'redux-form'
import { renderField, required, number, maxLength10 } from './Validate'

function BillForm (props) {
  const { handleSubmit, createBill } = props

  return (
    <div>
      <form
        className='dashboardForm'
        onSubmit={handleSubmit(values => {
          createBill(values)
        })}
      >
        <label> Bill Name</label>
        <Field
          className='formInput'
          name='Name'
          component={renderField}
          validate={[required]}
          type='text'
        />
        <label>Amount</label>
        <Field
          className='formInput'
          name='Amount'
          component={renderField}
          validate={[number, required]}
          type='text'
        />
        <br />
        <input type='submit' value='SUBMIT BILL' className='formSubmit' />
      </form>
    </div>
  )
}

export default reduxForm({ form: 'BillForm' })(BillForm)
