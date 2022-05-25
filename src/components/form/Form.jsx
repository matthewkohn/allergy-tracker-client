import React, { useEffect, useState } from 'react'
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
  const [chosenAllergies, setChosenAllergies] = useState([])
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    let updateObj = location.state
    if (updateObj !== null) {
      setFormData({
        name: updateObj.name,
        description: updateObj.description,
        price: updateObj.price
      })
    }
  }, [location.state])

  const updateAllergies = (choicesArr) => {
    setChosenAllergies(choicesArr)
    setFormData({
      ...formData,
      allergy_ids: choicesArr
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    if (location.pathname === '/update') {
      console.log('I should PATCH this')
    } else if (location.pathname === '/new') {
      console.log('I should POST this')
    } else {
      console.log("We've got a small problem...")
    }

    console.log("You did it!")
    navigate('/')
  }

  return (
    <>
      <BackBtn color="secondary" onClick={() => navigate('/')}>
        <ArrowBackIosNewIcon />
      </BackBtn>
      <FormBox component="form" noValidate autoComplete="off" onSubmit={e => handleSubmit(e)}>
        <DishForm formData={formData} onFormUpdate={setFormData} />
        <AllergyForm chosenAllergies={chosenAllergies} onChosenAllergies={updateAllergies} />
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