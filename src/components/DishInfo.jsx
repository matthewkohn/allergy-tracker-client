import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'
import { styled } from '@mui/material'

const DishInfo = ({card}) => {
  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6">{card.name}</Typography>
        <Details variant="caption">{card.description}</Details>
        <br/><br/>
        <Details variant="subtitle">$29.99</Details>
      </CardContent>
    </CardActionArea>
  )
}

export default DishInfo

const Details = styled(Typography)({
  padding: '10px 0',
  overflow: 'auto',
  color: 'grey'
})