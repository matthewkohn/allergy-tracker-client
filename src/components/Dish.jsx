import React from 'react'
import { Card, Typography } from '@mui/material'
import { styled } from '@mui/material/styles'

const Dish = () => {
  return (
    <DishCard>
      <Typography variant="h6">Really Long Dish Name</Typography>
      <Details variant="caption">Lorem ipsum dolor sit amet consectetur adipisicing elit. Assumenda cumque ipsa reprehenderit qui vero facilis, ratione vitae amet. Totam cupiditate velix Lorem ipsum dolor sit amet consectetur adipisicing elit. Totam cupiditate velix</Details>
      <Details variant="subtitle">$29.99</Details>
    </DishCard>
  )
}

export default Dish

const DishCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 30px',
  padding: '20px',
  width: '200px',
  height: '300px'
})

const Details = styled(Typography)({
  padding: '10px 0',
  overflow: 'auto',
  color: 'grey'
})