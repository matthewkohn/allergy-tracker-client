import React, { useContext } from 'react';
import { Box, styled } from '@mui/material';
import Allergies from './Allergies';
import Ingredients from './Ingredients';
import { AllergyContext } from '../../context/chosenAllergyContext';

const AllergyInputs = ({ dishAllergies, onUpdate }) => {
  const { allergyIngredients } = useContext(AllergyContext);
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