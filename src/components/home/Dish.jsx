import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material'

const Dish = ({card}) => {
  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5">{card.name}</Typography>
        <Details variant="p">{card.description}</Details>
        <br/><br/>
        <Details variant="subtitle">${card.price}</Details>
      </CardContent>
    </CardActionArea>
  )
}

export default Dish

const Details = styled(Typography)({
  padding: '10px 0',
  overflow: 'auto',
  color: 'grey',
  lineHeight: '20px'
})