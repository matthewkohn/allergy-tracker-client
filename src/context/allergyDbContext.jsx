import React, { createContext, useEffect, useState } from 'react';
import { allergyUrl } from '../data/urls';

const AllergyContext = createContext();

const AllergyProvider = ({ children }) => {
  const [allergiesFromDb, setAllergiesFromDb] = useState([]);

  const value = [allergiesFromDb, setAllergiesFromDb];

  useEffect(() => {
    fetch(allergyUrl)
    .then(res => res.json())
    .then(setAllergiesFromDb)
    .catch(console.log)
  }, []);

  return (
    <AllergyContext.Provider value={ value } >
      { children }
    </AllergyContext.Provider>
  )
}

export { AllergyContext, AllergyProvider };