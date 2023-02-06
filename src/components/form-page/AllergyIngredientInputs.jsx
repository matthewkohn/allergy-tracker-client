import React from 'react';
import { Box, styled } from '@mui/material';
import AllergiesContainer from './AllergiesContainer';
import IngredientsContainer from './IngredientsContainer';


const AllergyIngredientInputs = ({ dishAllergies, onUpdate }) => {

  const handleSelectIngredients = (id, isChecked) => {
    console.log(id, isChecked)
    // setFormData === onUpdate
    // When ingredient checkbox is checked, 
      // add to formData
      // pass ingredient name to AllergiesContainer >> AllergySelection
      // highlight the associated allergy
      // dish_allergies: [
      //   id: 1,
      //   ingredient_name: "",
      //   is_omittable: false,
      //   allergy: { name: "" }
      // ]
  }

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
        onChooseIngredients={ handleSelectIngredients } 
        dishAllergies={ dishAllergies }
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