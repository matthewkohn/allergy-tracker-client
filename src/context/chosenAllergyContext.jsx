import React, { createContext, useEffect, useState } from 'react';
import { allergyUrl } from '../data/urls';

const AllergyContext = createContext();

const AllergyProvider = ({ children }) => {
  const [chosenAllergy, setChosenAllergy] = useState({});
  const [allergyIngredients, setAllergyIngredients] = useState([]);

  useEffect(() => {
    fetch(allergyUrl).then((res) => res.json()).then(setAllergyIngredients)
    .catch(console.log)
  }, []);

  const value = { chosenAllergy, setChosenAllergy, allergyIngredients, setAllergyIngredients };

  return (
    <AllergyContext.Provider value={ value } >
      { children }
    </AllergyContext.Provider>
  )
}

export { AllergyContext, AllergyProvider };