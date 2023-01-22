import React, { createContext, useState } from 'react';

const AllergyContext = createContext();

const AllergyProvider = ({ children }) => {
  const [chosenAllergy, setChosenAllergy] = useState({});

  const value = [chosenAllergy, setChosenAllergy];

  return (
    <AllergyContext.Provider value={ value } >
      { children }
    </AllergyContext.Provider>
  )
}

export { AllergyContext, AllergyProvider };