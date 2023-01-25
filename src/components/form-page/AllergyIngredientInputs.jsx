import React from 'react';
import { Box, styled } from '@mui/material';
import AllergiesContainer from './AllergiesContainer';
import IngredientsContainer from './IngredientsContainer';


const AllergyIngredientInputs = ({ dishAllergies, onUpdate }) => {

  const handleSelectAllergy = (e) => {
    console.log(e.target.value)
  }

  const handleSelectIngredients = (e) => {
    console.log(e.target.value)
  }

  const addNewIngredient = (e) => {
    e.preventDefault();
    console.log("Click Add Ingredient")
    // make fetch call to POST '/ingredients'
    // Add ingredients_controller in server with 'post' route + test in Postman
    // update allergyIngredients in AllergyContext
  }

  return (
    <AllergiesBox>
      <AllergiesContainer onChoose={ handleSelectAllergy } />
      <IngredientsContainer 
        onAddNew={ addNewIngredient }
        onChooseIngredients={ handleSelectIngredients } />
    </AllergiesBox>
  )
}

export default AllergyIngredientInputs

const AllergiesBox = styled(Box)({
  display: 'flex',
  width: '60vw',
  justifyContent: 'center'
});