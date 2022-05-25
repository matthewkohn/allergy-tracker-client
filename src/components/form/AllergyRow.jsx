import React, { useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select, styled } from '@mui/material'
import { removeDuplicates } from '../../functions/arrayHelpers'


const AllergyRow = ({ allergy, onUpdateAllergies }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [choice, setChoice] = useState({
    allergy_id: allergy.id,
    ingredient_name: ""
  })

  const filteredArr = removeDuplicates(allergy.ingredients)
  const ingredientsList = filteredArr.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ))

  const handleChecked = (e) => {
    const value = e.target.checked
    setIsChecked(value)
    onUpdateAllergies(!isChecked, choice)
  }

  const handleChoice = (e) => {
    const value = e.target.value
    const updatedChoice = {
      ...choice,
      ingredient_name: value
    }
    setChoice(updatedChoice)
    onUpdateAllergies(isChecked, updatedChoice)
  }

  return (
    <AllergyGridItem item>
      <FormGroup>
        <FormControlLabel 
          control={ 
            <Checkbox 
              checked={isChecked}
              onChange={(e) => handleChecked(e)}
            /> 
          } 
          label={allergy.name} 
        />
        <FormControlLabel 
          control={ 
            <Select 
              value={choice.ingredient_name}
              displayEmpty
              onChange={(e) => handleChoice(e)}
              autoWidth
              disabled={!isChecked}      
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
