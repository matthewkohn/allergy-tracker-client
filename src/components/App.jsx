import React from 'react';
import DishesContainer from './flashcard-page/DishesContainer';
// import Form from './form-page/Form';
import { Routes, Route } from 'react-router-dom';
import { Container, styled, Typography } from '@mui/material';
import FormWrapper from './form-page/FormWrapper';

const App = () => {
  return (
    <Container>
      <Title variant="h1">Restaurant Food Allergies</Title>
      <Routes>
        <Route path='/' element={ <DishesContainer /> } />
        <Route path='/new' element={ <FormWrapper /> } />
        <Route path='/update' element={ <FormWrapper /> } />
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