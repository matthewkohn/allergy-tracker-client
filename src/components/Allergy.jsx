import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'

const Allergy = ({card}) => {

  let allergiesList = 'none'
  let ingredientsList = 'none'
  // let avoidability = 'n/a'

  if (card.allergies.length > 0) {
    allergiesList = card.allergies.map(a => 
      <li key={a.name} >{a.name}</li>
    )
    // avoidability
    ingredientsList = card.ingredients.map(i =>
      <li key={i.name}>{i.name}</li>
    )
  } 
  
  // console.log(card.allergies)

  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5">{card.name}</Typography>
        <Typography gutterBottom variant="subtitle1">Allergies:</Typography>
        {allergiesList}
        <Typography gutterBottom variant="subtitle1">Ingredients:</Typography>
        {ingredientsList}
      </CardContent>
    </CardActionArea>
    )
}

export default Allergy