import React, { useEffect, useState } from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select, styled } from '@mui/material'
import { removeDuplicates } from '../../functions/arrayHelpers'
import { useLocation } from 'react-router-dom'


const AllergyRow = ({ allergyJsxData, onUpdateAllergies }) => {
  const [isChecked, setIsChecked] = useState(false)
  const [choice, setChoice] = useState({
    allergy_id: allergyJsxData.id,
    ingredient_name: ""
  })
  const location = useLocation()
  
  useEffect(() => {
    if (location.state !== null) {
      const preloadedAllergies = location.state.allergy_ids
      const match = preloadedAllergies.find(a => a.allergy_id === choice.allergy_id)
      if (match) {
        setIsChecked(!isChecked)
        setChoice({
          ...choice,
          ingredient_name: match.ingredient_name
        })
      }
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const uniqueIngredients = removeDuplicates(allergyJsxData.ingredients)
  const ingredientsList = uniqueIngredients.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ))

  const handleChecked = (e) => {
    const value = e.target.checked
    setIsChecked(value)
    if (value === false) {
      const disabledChoice = {
        ...choice,
        ingredient_name: ""
      }
      setChoice(disabledChoice)
    }
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
          label={allergyJsxData.name} 
        />
        <FormControlLabel 
          control={ 
            <Select 
            displayEmpty
            value={choice.ingredient_name}
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
