import { Box, Grid, styled, TextField, FormControl } from '@mui/material'
import React from 'react'

const DishForm = () => {
  return (
    <DishBox>
      <FormControl
        variant="outlined"
        fullWidth={true}
      >
        <Grid container>
          <Grid item lg={9} md={9} sm={12}>
            <InputField 
              label="Dish Name" 
              name="name"
              type="text" 
              // value={}
              // onChange={} 
              required/>
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <InputField 
              label="Price" 
              name="price"
              type="number"
              // value={}
              // onChange={} 
              required/>
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <DescriptionField 
              label="Description (200 character max)"
              type="text"
              multiline
              maxRows={8}
              maxLength={"200"}
              name="description"
              // value={}
              // onChange={}
              required
            />
          </Grid>
        </Grid>
      </FormControl>
    </DishBox>
  )
}

export default DishForm

const DishBox = styled(Box)({
  padding: '10px',
  margin: '5px',
  border: '2px solid red',
  borderRadius: '5px'
})

const InputField = styled(TextField)({
  width: '98%', 
  margin: '0 0 10px'
})

const DescriptionField = styled(TextField)({
  width: '100%',
  height: '150px'
})