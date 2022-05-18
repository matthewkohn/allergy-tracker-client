import React from 'react'
import DishesContainer from './home/DishesContainer'
import Form from './form/Form'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import { AppBar, styled, Typography } from '@mui/material'

const App = () => {
  return (
    <Container sx={{maxHeight: '100vh'}}>
      <Header>
        <Typography variant="h3">Cliff's Notes for Restaurant Pros</Typography>
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
  textAlign: 'center',
  position: 'fixed',
  display: 'block'
})