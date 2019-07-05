import React from 'react'

export const required = value => (value ? undefined : 'Required')

export const number = value =>
  value && isNaN(Number(value)) ? 'Must be a number' : undefined

export const maxLength = max => value =>
  value && value.length > max ? `Must be ${max} characters` : undefined
export const maxLength10 = maxLength(10)
export const maxLength6 = maxLength(6)

export const renderField = ({
  input,
  label,
  type,
  meta: { touched, error, warning }
}) => (
  <div className='formsContainer'>
    <div>
      {touched &&
        ((error && <span>{error}</span>) ||
          (warning && <span>{warning}</span>))}
    </div>
    <input className='FormInput' {...input} placeholder={label} type={type} />
  </div>
)
