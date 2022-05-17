import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'

const Allergy = ({card}) => {
  console.log(card.allergies)
  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h6">Allergies:</Typography>
        {/* {card.allergies.length !== 0 ? card.allergies.map(
          <p>{allergyName}</p>
        )} */}
      </CardContent>
    </CardActionArea>
    )
}

export default Allergy