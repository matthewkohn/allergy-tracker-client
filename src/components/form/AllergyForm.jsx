import React, { useEffect, useState } from 'react'
import { Box, FormGroup, Grid, styled, Typography } from '@mui/material'
import AllergyRow from './AllergyRow'

const AllergyForm = ({ formData, onFormUpdate }) => {
  const [allergiesFromDb, setAllergiesFromDb] = useState([])
  const [allergyFormChoices, setAllergyFormChoices] = useState({
    allergy_id: 0,
    ingredient_name: ""
  })


  useEffect(() => {
    fetch('http://localhost:9292/allergies')
      .then(res => res.json())
      .then(setAllergiesFromDb)
      .catch(console.log)
  }, [])

  const allergiesList = allergiesFromDb.map((a) => (
    <AllergyRow 
      allergyFormChoices={allergyFormChoices}
      onAllergyFormChoices={setAllergyFormChoices}
      allergy={a} 
      key={a.id} 
    />
  ))
    
  console.log('//------Allergies array from DB for form structure ------//')
  console.log(allergiesFromDb)

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
  // flexDirection: 'row',
  // justifyContent: 'space-around',
  display: 'inline-flex',
  flexWrap: 'wrap'
})

