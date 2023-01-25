import React, { createContext, useEffect, useState } from 'react';
import { allergyUrl } from '../data/urls';

const AllergyContext = createContext();

const AllergyProvider = ({ children }) => {
  const [currentAllergy, setCurrentAllergy] = useState({});
  const [allergyIngredients, setAllergyIngredients] = useState([]);

  useEffect(() => {
    fetch(allergyUrl)
    .then((res) => res.json())
    .then((data) => {
      setAllergyIngredients(data);
      setCurrentAllergy(data[0]);
    })
    .catch(console.log)
  }, []);

  const value = { currentAllergy, setCurrentAllergy, allergyIngredients, setAllergyIngredients };

  return (
    <AllergyContext.Provider value={ value } >
      { children }
    </AllergyContext.Provider>
  )
}

export { AllergyContext, AllergyProvider };