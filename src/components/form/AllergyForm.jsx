import React, { useEffect, useState } from 'react'
import { Box, FormGroup, Grid, styled, Typography } from '@mui/material'
import AllergyRow from './AllergyRow'

const AllergyForm = ({ formData, onFormUpdate }) => {
  const [allergiesFromDb, setAllergiesFromDb] = useState([])
  useEffect(() => {
    fetch('http://localhost:9292/allergies')
    .then(res => res.json())
    .then(setAllergiesFromDb)
    .catch(console.log)
  }, [])
  
  const [chosenAllergies, setChosenAllergies] = useState([])
  console.log("chosenAllergies array: ", chosenAllergies)
  // Need to update formData.allergy_ids = []
  //   push {allergy_id: 2, ingredient_name:'cheese'}


  const handleUpdateAllergies = (isChecked, choice) => {
    if (isChecked === false && choice.ingredient_name) {
      const updatedAllergies = choice.allergy_id ? chosenAllergies.filter(a => a.allergy_id !== choice.allergy_id) : chosenAllergies
      setChosenAllergies(updatedAllergies)
    } else if (isChecked && choice.ingredient_name !== '') {
      const uniqueArr = chosenAllergies.filter(a => a.allergy_id !== choice.allergy_id)
      setChosenAllergies([...uniqueArr, choice])
    } else {
      console.log("Something went really wrong")
    }
  }
  
  // onFormUpdate({
  //   ...formData,
  //   allergy_ids: chosenAllergies
  // })
  const allergiesList = allergiesFromDb.map((a) => (
    <AllergyRow 
      onUpdateAllergies={handleUpdateAllergies}
      allergy={a} 
      key={a.id} 
    />
  ))

  return (
    <ChoicesBox>
      <Typography variant="h6">Allergies?</Typography>
      <Typography variant="p"><em>If yes, choose the allergy & then select the corresponding ingredient</em></Typography>
      <FormGroup>
        <GridContainer container>
          {allergiesList}
        </GridContainer>
      </FormGroup>
    </ChoicesBox>
  )
}

export default AllergyForm

const ChoicesBox = styled(Box)({
  padding: '30px',
  margin: '5px',
  border: '2px solid red',
  borderRadius: '5px'
})

const GridContainer = styled(Grid)({
  display: 'inline-flex',
  flexWrap: 'wrap'
})

