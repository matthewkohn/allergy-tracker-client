import React from 'react';
import DishesContainer from './flashcard-page/DishesContainer';
import FormContainer from './form-page/FormContainer';
import { Routes, Route } from 'react-router-dom';
import { Container, styled, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Title variant="h1">Restaurant Food Allergies</Title>
      <Routes>
        <Route path='/' element={ <DishesContainer /> } />
        <Route path='/new' element={ <FormContainer /> } />
        <Route path='/update' element={ <FormContainer /> } />
      </Routes>
    </Container>
  )
};

export default App;


const Title = styled(Typography)({
  fontSize: '40px',
  color: '#333',
  textAlign: 'center',
  padding: '10px 0 0',
});