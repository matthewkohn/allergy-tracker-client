import { Box, Button, styled } from '@mui/material'
import React from 'react'
import AllergySelection from './AllergySelection'
import DishInput from './DishInput'


const Form = () => {


  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("You did it!")
  }
  

  return (
    
      <FormBox component="form" noValidate autoComplete="off">
        <DishInput />
        <AllergySelection />
        <Button type="submit" onClick={e => handleSubmit(e)}>Submit</Button>
      </FormBox>
    
  )
}

export default Form

const FormBox = styled(Box)({
  margin: '100px',
  padding: '10px',
  border: '5px solid black',
  width: '1fr'
})