import React, { useEffect, useState } from 'react';
import { Checkbox, FormControlLabel, FormGroup, Grid, MenuItem, Select, styled } from '@mui/material';
// import { removeDuplicates } from '../../functions/arrayHelpers'
import { useLocation } from 'react-router-dom';

const AllergyRow = ({ allergyJsxData, onUpdateAllergies }) => {
  const [isChecked, setIsChecked] = useState(false);
  const [choice, setChoice] = useState({
    allergy_id: allergyJsxData.id,
    ingredient_name: ""
  });
  const location = useLocation();

  console.log("AllergyRow props: .........................")
  console.log("allergyJsxData props: ", allergyJsxData)
  console.log("choice state: ", choice)
  console.log("location: ", location)
  
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
  }, []);

  // const uniqueIngredients = removeDuplicates(allergyJsxData.ingredients)
  // const ingredientsList = uniqueIngredients.map(ingredient => (
  const ingredientsList = allergyJsxData.ingredients.map(ingredient => (
    <MenuItem value={ingredient.name} key={ingredient.id} >{ingredient.name}</MenuItem>
  ));

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
  };

  const handleChoice = (e) => {
    const value = e.target.value
    const updatedChoice = {
      ...choice,
      ingredient_name: value
    }
    setChoice(updatedChoice)
    onUpdateAllergies(isChecked, updatedChoice)
  };

  return (
    <AllergyGridContainer container xs={6} md={2.4}>
      <FormGroup>
        <AllergyGridItem item>
          <FormControlLabel 
            control={ 
              <Checkbox 
                checked={isChecked}
                onChange={(e) => handleChecked(e)}
              /> 
            } 
            label={allergyJsxData.name} 
          />
        </AllergyGridItem>
        <AllergyGridItem item>
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
        </AllergyGridItem>
      </FormGroup>
    </AllergyGridContainer>
  )
}

export default AllergyRow;

const AllergyGridContainer = styled(Grid)({
  width: '20%',
  display: 'flex',
  justifyContent: 'center',
  flexDirection: 'row'

});

const AllergyGridItem = styled(Grid)({
  margin: '4px 0'
});