// import React, { useState } from 'react'
import React from 'react'
import { Box, Checkbox, FormControlLabel, FormGroup, Grid, TextField, styled, Typography } from '@mui/material'

const AllergySelection = () => {
  // const [checked, setChecked] = useState(true);

  // const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
  //   setChecked(event.target.checked);
  // };



  return (
    <AllergyBox>
      <Typography variant="h6">Allergies?</Typography>
      <FormGroup>
        <GridContainer container>
          <Grid container>
            <Grid item>
              <FormControlLabel control={<Checkbox />} label="Allergy1" labelPlacement='start'/>
            </Grid>
            <Grid item>
              <FormControlLabel control={<TextField />} />
            </Grid>
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Allergy2" labelPlacement='start'/>    
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Allergy3" labelPlacement='start'/>    
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Allergy4" labelPlacement='start'/>    
          </Grid>
          <Grid item>
            <FormControlLabel control={<Checkbox />} label="Allergy5" labelPlacement='start'/>    
          </Grid>
          
        </GridContainer>
        {/* <FormControlLabel control={<Checkbox />} label="Allergy2" labelPlacement='start'/>    
        <FormControlLabel control={<Checkbox />} label="Allergy3" labelPlacement='start'/>    
        <FormControlLabel control={<Checkbox />} label="Allergy4" labelPlacement='start'/>    
        <FormControlLabel control={<Checkbox />} label="Allergy5" labelPlacement='start'/> */}
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

const GridContainer = styled(Grid)({
  flexDirection: 'column'
})