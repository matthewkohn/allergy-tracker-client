import React from 'react'
import Dishes from './Dishes'
import DishForm from './DishForm'
import { Container } from '@mui/system'
import { Routes, Route } from 'react-router-dom'
import { AppBar, Typography } from '@mui/material'

const App = () => {
  return (
    <Container>
      <AppBar>
        <Typography variant="h3">Cliff's Notes for Food Servers</Typography>
      </AppBar>
      <Routes>
        <Route path='/' element={ <Dishes /> } />
        <Route path='/new' element={ <DishForm /> } />
        <Route path='/update' element={ <DishForm /> } />
      </Routes>
    </Container>
  )
}

export default App
