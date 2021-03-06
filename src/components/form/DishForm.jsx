import React from 'react'
import { Box, Grid, styled, TextField, FormControl } from '@mui/material'

const DishForm = ({ formData, onFormUpdate }) => {

  const updateForm = (e) => {
    const name = e.target.name
    let value = e.target.value
    onFormUpdate({
      ...formData,
      [name]: value
    })
  }

  return (
    <DishBox>
      <FormControl
        variant="outlined"
        fullWidth={true}
      >
        <Grid container>
          <Grid item lg={9} md={9} sm={12}>
            <InputField 
              required
              label="Dish Name" 
              name="name"
              type="text"
              variant="filled"
              value={formData.name}
              onChange={(e) => updateForm(e)} 
              />
          </Grid>
          <Grid item lg={3} md={3} sm={12}>
            <InputField 
              required
              label="Price" 
              name="price"
              type="number"
              variant="filled"
              value={formData.price}
              onChange={(e) => updateForm(e)} 
              />
          </Grid>
        </Grid>
        <Grid container>
          <Grid item lg={12} md={12} sm={12}>
            <DescriptionField 
              label="Description (200 character max)"
              type="text"
              multiline
              maxRows={3}
              maxLength={"200"}
              name="description"
              variant="filled"
              value={formData.description}
              onChange={(e) => updateForm(e)}
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
  height: '200px'
})

const InputField = styled(TextField)({
  width: '98%', 
  margin: '0 0 10px'
})

const DescriptionField = styled(TextField)({
  width: '100%',
  height: '120px',
  marginTop: '30px'
})