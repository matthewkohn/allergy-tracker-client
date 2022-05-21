import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select, styled } from '@mui/material'
import { removeDuplicates } from '../../functions/arrayHelpers'

const AllergyRow = ({ allergy, allergyFormChoices, onAllergyFormChoices }) => {
  // checked is boolean for allergy selected
  const [checked, setChecked] = useState(false)
  // choice is the name of the ingredient selected
  // const [choice, setChoice] = useState({
  //   checked: false,
  //   ingredient: ""
  // })
  const [choice, setChoice] = useState("")


  const filteredArr = removeDuplicates(allergy.ingredients)
  const ingredientsList = filteredArr.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ))
  // setFormData will need every allergy_id and ingredient_name from this component

  const handleChecked = (e) => {
    console.log(allergy.id)
    onAllergyFormChoices({...allergyFormChoices, allergy_id: allergy.id})

    console.log(e.target.checked)
    setChecked(e.target.checked)
  }

  const handleChange = (e) => {
    console.log(e.target.value)
    onAllergyFormChoices({...allergyFormChoices, ingredient_name: e.target.value})
    setChoice(e.target.value)
  }

  if (checked) {
    console.log('ok, now what')
  }

  console.log(allergyFormChoices)
  console.log(choice)

  return (
    <AllergyGridItem item>
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
    </AllergyGridItem>
  )
}

export default AllergyRow

const AllergyGridItem = styled(Grid)({
  width: '20%'
})
