import React, { useEffect, useState } from 'react'
import { Box, Button, Fab, styled } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';import AllergySelection from './AllergySelection'
import DishInput from './DishInput'
import { useNavigate } from 'react-router-dom'

const Form = () => {
  const [allergies, setAllergies] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:9292/allergies')
      .then(res => res.json())
      .then(setAllergies)
      .catch(console.log)
  }, [])

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
      <FormBox component="form" noValidate autoComplete="off">
        <DishInput />
        <AllergySelection allergiesArr={allergies} />
        <Button type="submit" onClick={e => handleSubmit(e)}>Submit</Button>
      </FormBox>
    
    </>
    
  )
}

export default Form

const FormBox = styled(Box)({
  margin: '100px',
  padding: '10px',
  border: '10px solid black',
  width: '1fr',
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