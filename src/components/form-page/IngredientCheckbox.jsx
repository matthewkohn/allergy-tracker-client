import React, { useContext, useEffect, useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';
import { FormContext } from '../../context/FormContext';

const IngredientCheckbox = ({ ingredient, onChecked }) => {
  const [checked, setChecked] = useState(false);
  const { formData } = useContext(FormContext);
  const dishAllergies = formData.dish_allergies;

  useEffect(() => {
    const found = dishAllergies.find(i => i.ingredient_name === ingredient.name)
    if (found) {
      setChecked(true)
    }
    // eslint-disable-next-line
  }, []);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    onChecked(ingredient, isChecked);
  }

  return (
    <FormControlLabel
      control={ <Checkbox /> } 
      label={ ingredient.name }
      checked={ checked }
      onChange={ handleChange }
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}

export default IngredientCheckbox;

