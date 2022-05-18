import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'

const Allergy = ({card}) => {
  // console.log(card.allergies)
  
  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5">{card.name}</Typography>
        <Typography gutterBottom variant="h6">Allergies:</Typography>
        {card.allergies[0].allergyName}
      </CardContent>
    </CardActionArea>
    )
}

export default Allergy