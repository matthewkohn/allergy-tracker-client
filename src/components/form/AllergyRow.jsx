import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select } from '@mui/material'
import { removeDuplicates } from '../../functions/arrayHelpers'

const AllergyRow = ({ allergy }) => {
  // checked is boolean for allergy selected
  const [checked, setChecked] = useState(false)
  // choice is the name of the ingredient selected
  const [choice, setChoice] = useState("")

  const filteredArr = removeDuplicates(allergy.ingredients)
  const ingredientsList = filteredArr.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ))

  const handleChecked = (e) => {
    // pass the id of the allergy up to AllergySelection/Form
    // require ingredient selection?
    console.log(allergy.id)

    console.log(e.target.checked)
    setChecked(e.target.checked)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    setChoice(e.target.value)
  }

  return (
    <Grid item>
      <FormGroup>
        <FormControlLabel 
          control={ 

            <Checkbox 
              checked={checked}
              onChange={handleChecked}
            /> 

          } 
          label={allergy.name} 
        />
        <FormControlLabel 
          control={ 

            <Select 
              value={choice}
              displayEmpty
              onChange={handleChange}
              autoWidth
              disabled={!checked}      
            >
              <MenuItem disabled value=""><em>Ingredients</em></MenuItem>
              {ingredientsList}
            </Select> 

          } 
          placeholder="true" 
        />
      </FormGroup>
    </Grid>
  )
}

export default AllergyRow
