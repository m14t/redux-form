import React from 'react'
import { Field, reduxForm } from 'redux-form'
import validate from './validate'
import renderField from './renderField'

const WizardFormFirstPage = (props) => {
  const { handleSubmit } = props
  return (
    <form onSubmit={handleSubmit}>
      <Field name={`firstName-${props.id}`} type="text" component={renderField} label="First Name"/>
      <Field name={`lastName-${props.id}`} type="text" component={renderField} label="Last Name"/>
    </form>
  ) 
}

export default reduxForm({
  form: 'wizard',              // <------ same form name
  destroyOnUnmount: false,     // <------ preserve form data
  enableReinitialize: true,
  validate
})(WizardFormFirstPage)
