import React from 'react';
import { FormProvider } from '../../context/FormContext';
import Form from './Form';

const FormWrapper = () => {
  return (
    <FormProvider>
      <Form />
    </FormProvider>
  )
}

export default FormWrapper