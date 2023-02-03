import React, { createContext, useState } from 'react';

const FormContext = createContext();

const FormProvider = ({ children }) => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    dish_allergies: []
  });

  const value = { formData, setFormData };

  return (
    <FormContext.Provider value={ value }>
      { children }
    </FormContext.Provider>
  )
}

export { FormContext, FormProvider };