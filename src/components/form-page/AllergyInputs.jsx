import React, { useEffect, useState } from 'react';
import { Box, styled } from '@mui/material';
import { allergyUrl } from '../../data/urls';
import Allergies from './Allergies';
import Ingredients from './Ingredients';

const AllergyInputs = ({ dishAllergies, onUpdate }) => {
  const [allergyIngredients, setAllergyIngredients] = useState([]);
  // chosenAllergy
  // chosenIngredients


  useEffect(() => {
    fetch(allergyUrl).then((res) => res.json()).then(setAllergyIngredients)
    .catch(console.log)
  }, [])

  console.log(allergyIngredients)

  const handleSelectAllergy = (e) => {
    console.log(e.target.value)
  }

  return (
    <AllergiesBox>
      <Allergies allergies={ allergyIngredients } onChoose={ handleSelectAllergy } />
      <Ingredients />
    </AllergiesBox>
  )
}

export default AllergyInputs

const AllergiesBox = styled(Box)({
  // border: '3px solid orange',
  display: 'flex',
  width: '60vw',
  justifyContent: 'center'
});