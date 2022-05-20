import React from 'react'
import { Box, FormGroup, Grid, styled, Typography } from '@mui/material'
import AllergyRow from './AllergyRow'


const AllergySelection = ({ allergiesArr }) => {

  const allergiesList = allergiesArr.map((a) => (
    <AllergyRow 
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

export default AllergySelection

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














/*
<FormGroup>
        <GridContainer container>
          <Grid container>
            <Grid item>
              <FormControlLabel control={<Checkbox />} label="gluten" labelPlacement='start'/>
            </Grid>
            <Grid item>
              <FormControlLabel control={
              
              <Select />
              } />
            </Grid>
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="dairy" labelPlacement='start'/>    
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="nut" labelPlacement='start'/>    
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="allium" labelPlacement='start'/>    
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="shellfish" labelPlacement='start'/>    
          </Grid>
          
        </GridContainer>
        {/* <FormControlLabel control={<Checkbox />} label="Allergy2" labelPlacement='start'/>    
        <FormControlLabel control={<Checkbox />} label="Allergy3" labelPlacement='start'/>    
        <FormControlLabel control={<Checkbox />} label="Allergy4" labelPlacement='start'/>    
        <FormControlLabel control={<Checkbox />} label="Allergy5" labelPlacement='start'/> }
        </FormGroup>

*/
