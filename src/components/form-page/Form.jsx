import React, { useEffect, useState } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { Box, Button, Fab, styled } from '@mui/material';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import AllergyForm from './AllergyForm';
import DishForm from './DishForm';
import { AllergyProvider } from '../../context/allergyDbContext';
import { dishUrl } from '../../data/urls';

const Form = () => {
  const [formData, setFormData] = useState({
    name: "",
    description: "",
    price: 0,
    allergy_ids: []
  });
  const navigate = useNavigate();
  const location = useLocation();
  
  useEffect(() => {
    if (location.state !== null) {
      setFormData(location.state)
    }
  }, [location]);

  const updateAllergies = (choicesArr) => {
    setFormData({
      ...formData,
      allergy_ids: choicesArr
    })
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (location.pathname === '/update') {
      fetch(dishUrl + '/' + formData.id, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(r => r.json())
      .then(console.log)
      .catch(console.log)
    } else if (location.pathname === '/new') {
      fetch(dishUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      })
      .then(r => r.json())
      .then(console.log)
      .catch(console.log)
    } else {
      console.log("We've got a small problem...")
    }

    navigate('/');
  };

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
        <SubmitBtn variant="contained" type="submit" color="success">
          {location.state ? "Update" : "Submit" }
        </SubmitBtn>
      </FormBox>
    </>
  )
}

export default Form;

const FormBox = styled(Box)({
  margin: '100px',
  padding: '10px',
  border: '10px solid lightgrey',
  borderRadius: '5px',
  minWidth: '80%',
  height: '90%',
  width: 'auto'
});

const BackBtn = styled(Fab)({
  position: 'fixed',
  left: '20px',
  top: '100px',
  width: '50px',
  height: '50px',
  backgroundColor: 'orange',
  color: '#000'
});

const SubmitBtn = styled(Button)({
  width: '100%',
  padding: '20px'
});

