import React from 'react'
import DishesContainer from './DishesContainer'
import Form from './Form'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import { AppBar, styled, Typography } from '@mui/material'

const App = () => {
  return (
    <Container>
      <Header>
        <Typography variant="h3">Cliff's Notes for Food Servers</Typography>
      </Header>
      <Routes>
        <Route path='/' element={ <DishesContainer /> } />
        <Route path='/new' element={ <Form /> } />
        <Route path='/update' element={ <Form /> } />
      </Routes>
    </Container>
  )
}

export default App

const Header = styled(AppBar)({
  padding: '15px',
  textAlign: 'center'
})