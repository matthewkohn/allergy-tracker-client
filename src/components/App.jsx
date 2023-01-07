import React from 'react';
import DishesContainer from './flashcard-page/DishesContainer';
import Form from './form-page/FormContainer';
import { Routes, Route } from 'react-router-dom';
import { AppBar, Container, styled, Typography } from '@mui/material';

const App = () => {
  return (
    <Container>
      <Header>
        <Title variant="h1">Restaurant Food Allergies</Title>
      </Header>
      <Routes>
        <Route path='/' element={ <DishesContainer /> } />
        <Route path='/new' element={ <Form /> } />
        <Route path='/update' element={ <Form /> } />
      </Routes>
    </Container>
  )
};

export default App;


const Header = styled(AppBar)({
  padding: '8px 0 8px 20px',
  textAlign: 'left',
  position: 'fixed',
  display: 'block',
  backgroundColor: 'darkgreen'
});

const Title = styled(Typography)({
  fontSize: '40px',
  color: 'lightgreen',
});