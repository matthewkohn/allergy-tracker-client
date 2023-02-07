import React from 'react';
import { Box, styled } from '@mui/material';
import AllergiesContainer from './AllergiesContainer';
import IngredientsContainer from './IngredientsContainer';


const AllergyIngredientInputs = () => {


  // const addNewIngredient = (e) => {
  //   e.preventDefault();
  //   console.log("Click Add Ingredient")
    // make fetch call to POST '/ingredients'
    // Add ingredients_controller in server with 'post' route + test in Postman
    // update allergyIngredients in AllergyContext
  // }

  return (
    <AllergiesBox>
      <AllergiesContainer />
      <IngredientsContainer 
        // onAddNew={ addNewIngredient } 
      />
    </AllergiesBox>
  )
}

export default AllergyIngredientInputs

const AllergiesBox = styled(Box)({
  display: 'flex',
  width: '60vw',
  justifyContent: 'center'
});