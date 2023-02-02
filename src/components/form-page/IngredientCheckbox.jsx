import React, { useState } from 'react';
import { Checkbox, FormControlLabel } from '@mui/material';

const IngredientCheckbox = ({ dishAllergies, ingredient }) => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <FormControlLabel
      control={ <Checkbox /> } 
      label={ ingredient }
      checked={ checked }
      onChange={ handleChange }
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}

export default IngredientCheckbox;

