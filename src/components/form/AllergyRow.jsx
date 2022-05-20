import React from 'react'
// import { Checkbox, FormControl, FormControlLabel, FormGroup, InputLabel, MenuItem, Select } from '@mui/material'
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select } from '@mui/material'
import { removeDuplicates } from '../../functions/arrayHelpers'

const AllergyRow = ({ name, ingredientsArr }) => {

  const filteredArr = removeDuplicates(ingredientsArr)
  const ingredientsList = filteredArr.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ))

  return (
    <Grid item>

      <FormGroup>
        <FormControlLabel 
          control={ <Checkbox /> } 
          label={name} 
        />
        <FormControlLabel 
          control={ 
            <Select 
              value={""}
              displayEmpty
              // onChange={}
              // renderValue={(selected) => {
              //   if (selected.length === 0) {
              //     return <em>Placeholder</em>
              //   }
              //   return selected.join(', ')
              // }
            // }
              // input={<OutlinedInput label="Ingredient" />}
              
            >
              <MenuItem disabled value="">
                <em>Ingredients</em>
              </MenuItem>
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



  /* <FormControl>
    <InputLabel id="ingredients-label">Ingredients</InputLabel>
    <Select 
      labelId="ingredients-label"
      value={''}
      // onChange={handleChange}
    >
      {ingredientsList}
    </Select>
  </FormControl> */