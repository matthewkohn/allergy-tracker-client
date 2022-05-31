import React, { useEffect, useState } from 'react'
// import React, { useState } from 'react'
import { Box, Button, Fab, styled } from '@mui/material'
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AllergyForm from './AllergyForm'
import DishForm from './DishForm'
import { useLocation, useNavigate } from 'react-router-dom'
import { AllergyProvider } from '../../context/allergyDbContext';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    allergy_ids: []
  })
  const navigate = useNavigate()
  const location = useLocation()
  
  useEffect(() => {
    if (location.state !== null) {
      setFormData(location.state)
    }
  }, [location])

console.log("location.state: ", location.state)
console.log("formData: ", formData)

  const updateAllergies = (choicesArr) => {
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
      fetch("http://localhost:9292/dishes", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(r => r.json())
      .then(console.log)
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
      <FormBox 
        component="form" 
        noValidate 
        autoComplete="off" 
        onSubmit={e => handleSubmit(e)}
      >
        <DishForm 
          formData={formData} 
          onFormUpdate={setFormData} 
        />
        <AllergyProvider>
          <AllergyForm 
            chosenAllergies={formData.allergy_ids} 
            updateAllergies={updateAllergies} 
          />
        </AllergyProvider>
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



