import React from 'react'
import Dishes from './Dishes'
import DishForm from './DishForm'
import { Container } from '@mui/system'

const App = () => {
  return (
    <Container>
      <Dishes />
      <DishForm />
    </Container>
  )
}

export default App
