import React from 'react'
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select, styled } from '@mui/material'
import { removeDuplicates } from '../../functions/arrayHelpers'


const AllergyRow = ({ allergy, onUpdateAllergies }) => {
  // const [isChecked, setIsChecked] = useState(false)
  // const [choice, setChoice] = useState({
  //   allergy_id: allergy.id,
  //   ingredient_name: ""
  // })
  // console.log("chosenAllergyArray from AllergyRow: ", chosenAllergiesArray)
  // need to update isChecked and choice based on what exists inside chosenAllergies
  
  // if (chosenAllergiesArray !== false) {
  //   const match = chosenAllergiesArray.find(a => a.allergy_id === choice.allergy_id)
  //   if (match !== undefined) {
  //     setIsChecked(!isChecked)
  //     setChoice({
  //       ...choice,
  //       ingredient_name: match.ingredient_name
  //     })
  //   }
  //   console.log("Match from AllergyRow: ", match)
  // }
    //   const previousIngredient = chosenAllergiesArray.find()
    //   setIsChecked(!checked)
    //   setChoice({
    //     ...choice,
    //     ingredient_name: 
    //   })
    // })
  // }, [])

  const uniqueIngredients = removeDuplicates(allergy.ingredients)
  const ingredientsList = uniqueIngredients.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ))

  // const handleChecked = (e) => {
  //   const value = e.target.checked
  //   setIsChecked(value)
  //   onUpdateAllergies(!isChecked, choice)
  // }

  // const handleChoice = (e) => {
  //   const value = e.target.value
  //   const updatedChoice = {
  //     ...choice,
  //     ingredient_name: value
  //   }
  //   setChoice(updatedChoice)
  //   onUpdateAllergies(isChecked, updatedChoice)
  // }

  return (
    <AllergyGridItem item>
      <FormGroup>
        <FormControlLabel 
          control={ 
            <Checkbox 
              // checked={isChecked}
              // onChange={(e) => handleChecked(e)}
            /> 
          } 
          label={allergy.name} 
        />
        <FormControlLabel 
          control={ 
            <Select 
            displayEmpty
            // value={choice.ingredient_name}
              // onChange={(e) => handleChoice(e)}
              autoWidth
              // disabled={!isChecked}      
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
