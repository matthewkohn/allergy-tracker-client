import React, { useContext } from 'react'
import { Box, FormGroup, Grid, styled, Typography } from '@mui/material'
import AllergyRow from './AllergyRow'
import { AllergyContext } from '../../context/allergyDbContext'

const AllergyForm = ({ chosenAllergies, updateAllergies }) => {
  const [allergiesFromDb] = useContext(AllergyContext)
  console.log("AllergiesFromDB: ", allergiesFromDb)
  const allergiesList = allergiesFromDb.map((a) => (
    <AllergyRow 
      chosenAllergiesArray={chosenAllergies}
      allergy={a} 
      key={a.id} 
    />
  ))

  // const handleAllergyChoices = (isChecked, choice) => {
  //   if (isChecked === false && choice.ingredient_name) {
  //     const updatedAllergies = choice.allergy_id ? chosenAllergies.filter(a => a.allergy_id !== choice.allergy_id) : chosenAllergies
  //     updateAllergies(updatedAllergies)
  //   } else if (isChecked && choice.ingredient_name !== '') {
  //     const uniqueArr = chosenAllergies.filter(a => a.allergy_id !== choice.allergy_id)
  //     updateAllergies([...uniqueArr, choice])
  //   } else {
  //     console.log("Don't forget to choose an ingredient!")
  //   }
  // }
  console.log("chosenAllergies: ", chosenAllergies)
  

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

