import React, { useContext } from 'react';
import { Box, styled } from '@mui/material';
import AllergiesContainer from './AllergiesContainer';
import IngredientsContainer from './IngredientsContainer';
import { AllergyContext } from '../../context/chosenAllergyContext';

const AllergyIngredientInputs = ({ dishAllergies, onUpdate }) => {
  const { allergyIngredients } = useContext(AllergyContext);

  const handleSelectAllergy = (e) => {
    console.log(e.target.value)
  }

  return (
    <AllergiesBox>
      <AllergiesContainer allergies={ allergyIngredients } onChoose={ handleSelectAllergy } />
      <IngredientsContainer />
    </AllergiesBox>
  )
}

export default AllergyIngredientInputs

const AllergiesBox = styled(Box)({
  // border: '3px solid orange',
  display: 'flex',
  width: '60vw',
  justifyContent: 'center'
});