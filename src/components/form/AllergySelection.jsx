// import React, { useState } from 'react'
import React from 'react'
import { Box, Checkbox, FormGroup, FormControlLabel, styled, Typography } from '@mui/material'
import AllergyRow from './AllergyRow'

const AllergySelection = () => {


  return (
    <AllergyBox>
      <Typography variant="h6">Allergies?</Typography>
      <FormGroup>
        {/* <FormControlLabel control={<Checkbox />} label="gluten" />
        <FormControl>
          <InputLabel id="ingredients-label">Ingredients</InputLabel>
          <Select 
            labelId="ingredients-label"
            value={1}
            // onChange={handleChange}
          >
            <MenuItem value=""><em>None</em></MenuItem>
            <MenuItem value={1}>One</MenuItem>
            <MenuItem value={2}>Two</MenuItem>
            <MenuItem value={3}>Three</MenuItem>
            
          </Select>

        </FormControl> */}
        <AllergyRow />
        <FormControlLabel control={<Checkbox />} label="dairy" />
        <FormControlLabel control={<Checkbox />} label="nut" />
        <FormControlLabel control={<Checkbox />} label="allium" />
        <FormControlLabel control={<Checkbox />} label="shellfish" />
      </FormGroup>
      
    </AllergyBox>
  )
}

export default AllergySelection

const AllergyBox = styled(Box)({
  padding: '10px',
  margin: '5px',
  border: '2px solid red',
  borderRadius: '5px'
})

// const GridContainer = styled(Grid)({
//   flexDirection: 'column'
// })














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
