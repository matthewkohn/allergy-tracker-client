import React from 'react'
import { FormControl, FormControlLabel, FormGroup, InputLabel, Select, MenuItem, Checkbox } from '@mui/material'

const AllergyRow = ({ allergyObj }) => {
  // console.log(allergyObj.name)
  const ingredientsArr = allergyObj.ingredients.map(i => i.name)
  console.log(ingredientsArr)

  return (
    <FormGroup>
      <FormControlLabel control={<Checkbox />} label="gluten" />
        <FormControl>
          <InputLabel id="ingredients-label">Ingredients</InputLabel>
          <Select 
            labelId="ingredients-label"
            value={1}
            // onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
          </Select>
        </FormControl>
    </FormGroup>
  )
}

export default AllergyRow