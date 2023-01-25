import React, { useState } from 'react';
import { Checkbox } from '@mui/material';

const IngredientCheckbox = () => {
  const [checked, setChecked] = useState(false);

  const handleChange = (e) => {
    setChecked(e.target.checked);
  }

  return (
    <Checkbox
      checked={ checked }
      onChange={ handleChange }
      inputProps={{ 'aria-label': 'controlled' }}
    />
  )
}

export default IngredientCheckbox;

