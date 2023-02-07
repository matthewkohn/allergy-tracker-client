// import React, { useContext, useState } from 'react';
// import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, styled, TextField, Typography } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import React, { useContext } from 'react';
import { Box, FormGroup, styled, Typography } from '@mui/material';
import { AllergyContext } from '../../context/AllergyContext';
import IngredientCheckbox from './IngredientCheckbox';
import { FormContext } from '../../context/FormContext';

const IngredientsContainer = () => {
  const { currentAllergy } = useContext(AllergyContext);
  const { formData, setFormData } = useContext(FormContext);
  // const [newIngredient, setNewIngredient] = useState('');
console.log("current allergy: ", currentAllergy)
console.log("formData: ", formData)

  const handleSelectIngredients = (ingredient, isChecked) => {
    console.log(ingredient, isChecked)
    if (isChecked) {
      setFormData({
        ...formData,
        dish_allergies: [
          ...formData.dish_allergies,
          {
            allergy: { name: currentAllergy.name },
            ingredient_name: ingredient.name,
            is_omittable: false
          }
        ]
      })
    } else {
      const updatedDishAllergies = formData.dish_allergies.filter((i) => i.id !== ingredient.id)
      setFormData({
        ...formData,
        dish_allergies: updatedDishAllergies
      })
    }
  }

  const ingredientsList = currentAllergy.ingredients?.map((ingredient) => (
    <IngredientCheckbox 
      key={ ingredient.id } 
      ingredient={ ingredient }
      onChecked={ handleSelectIngredients }
    />
  ));

  // const handleNewIngredient = (e) => {
  //   setNewIngredient(e.target.value);
  // }

  return (
    <IngredientsBox>
      <Title variant="h3">Ingredients</Title>
      <FormGroup>
        { ingredientsList }
        {/* <AddIngredient>
          <FormControlLabel 
            label={`Add new ${ currentAllergy.name } ingredient`}
            labelPlacement='top' 
            control={ 
              <ControlBox>
                <TextField variant="filled" />  
                <IconButton onClick={ (e) => onAddNew(e) }>
                  <AddIcon />
                </IconButton>
              </ControlBox>
            }
            onChange={ (e) => handleNewIngredient(e) }
            value={ newIngredient }
          />
        </AddIngredient> */}
      </FormGroup>
    </IngredientsBox>
  )
}

export default IngredientsContainer;

const IngredientsBox = styled(Box)({
  // border: '4px solid rebeccapurple',
  width: '100%',
  padding: '20px',
});

const Title = styled(Typography)({
  fontSize: '30px',
  textAlign: 'center',
});

// const AddIngredient = styled(Box)({
//   display: 'flex',
//   background: '#4DC',
//   padding: '3px 0 10px',
//   borderRadius: '5px',
// })

// const ControlBox = styled(Box)({
//   display: 'flex',
// })