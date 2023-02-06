import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const IngredientCheckbox = ({ dishAllergies, ingredient, onChecked }) => {
  const [checked, setChecked] = useState(false);
console.log(ingredient)
  // useEffect(() => {
  //   const found = dishAllergies.find(i => i.ingredient_name === ingredient)
  //   if (found) {
  //     setChecked(true)
  //   }
  // }, [dishAllergies, ingredient]);

  const handleChange = (e) => {
    const isChecked = e.target.checked;
    setChecked(isChecked);
    onChecked(ingredient.id, isChecked);
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

