import React from 'react'
import Dish from './Dish'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const Dishes = () => {
  return (
    <DishContainer maxWidth="xl">
      <Dish />
      <Dish />
      <Dish />
      <Dish />
      <Dish />
    </DishContainer>
  )
}

export default Dishes

const DishContainer = styled(Container)({
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})