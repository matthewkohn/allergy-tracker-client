import React from 'react'
import Dishes from './Dishes'
import DishForm from './DishForm'
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
        <Route path='/' element={ <Dishes /> } />
        <Route path='/new' element={ <DishForm /> } />
        <Route path='/update' element={ <DishForm /> } />
      </Routes>
    </Container>
  )
}

export default App

const Header = styled(AppBar)({
  padding: '15px',
  textAlign: 'center'
})