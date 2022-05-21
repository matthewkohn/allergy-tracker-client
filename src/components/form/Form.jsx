import React, { useState } from 'react'
import { Box, Button, Fab, styled } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AllergyForm from './AllergyForm'
import DishForm from './DishForm'
import { useLocation, useNavigate } from 'react-router-dom'

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    allergy_ids: []
  })
  


  const [preloadedValues, setPreloadedValues] = useState(null)
  const location = useLocation()
  let updateObj = location.state
  if (updateObj !== null && preloadedValues === null) {
    setPreloadedValues(updateObj)
  }
  const navigate = useNavigate()
  
  // const createDefaultData = (data) => {

  // }
  console.log('//------Passed preloadedValues ------//')
  console.log(preloadedValues)
 
  console.log('//------Form Data ------//')
  console.log(formData.allergy_ids)




  const handleSubmit = (e) => {
    e.preventDefault()
    console.log("You did it!")
    navigate('/')
  }


  return (
    <>
      <BackBtn color="secondary" onClick={() => navigate('/')}>
        <ArrowBackIosNewIcon />
      </BackBtn>
      <FormBox component="form" noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
        <DishForm />
        <AllergyForm />
        <Button type="submit" >Submit</Button>
      </FormBox>
    
    </>
    
  )
}

export default Form

const FormBox = styled(Box)({
  margin: '100px',
  padding: '10px',
  border: '10px solid black',
  minWidth: '80%',
  height: '90%'
})

const BackBtn = styled(Fab)({
  position: 'fixed',
  left: '20px',
  top: '100px',
  width: '50px',
  height: '50px',
  backgroundColor: 'orange',
  color: '#000'
})