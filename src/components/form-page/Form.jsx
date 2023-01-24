import React, { useEffect, useState } from 'react';
import { Box, Button, FormControl, styled } from '@mui/material';
import { useLocation } from 'react-router-dom';
import DishInputs from './DishInputs';
import AllergyIngredientInputs from './AllergyIngredientInputs';
import { AllergyProvider } from '../../context/chosenAllergyContext';

const Form = () => {
  const [formData, setFormData] = useState({
    name: '',
    description: '',
    price: 0,
    dish_allergies: []
  });
  const location = useLocation();
  const updateCardObj = location.state;

  useEffect(() => {
    if (updateCardObj) {
      setFormData(updateCardObj)
    }
  }, [updateCardObj]);

  const handleDishInput = (e) => {
    const name = e.target.name;
    const value = e.target.value;
    setFormData({ ...formData, [name]: value })
  };

  const handleAllergyUpdate = (e) => {
    console.log("Allergy update: ", e.target)
  }

  return (
    <AllergyProvider>
      <FormBox component="form" id="dish-allergy-form">
        <FormControl>
          <div>Form</div>
          <FormSection>
            <DishInputs formData={ formData } onUpdate={ handleDishInput } />
            <AllergyIngredientInputs dishAllergies={ formData.dish_allergies } onUpdate={ handleAllergyUpdate } />
          </FormSection>
          <SubmitBtn 
            variant="contained" 
            type="submit" 
            onClick={ () => console.log("Clicked!!") } 
            >
              Submit
          </SubmitBtn>
        </FormControl>
      </FormBox>
    </AllergyProvider>
  )
}

export default Form

const FormBox = styled(Box)({
  border: '1px solid blue',
  display: 'flex',
  flexDirection: 'column',
  
});

const FormSection = styled(Box)({
  display: 'inherit',

})

const SubmitBtn = styled(Button)({

});