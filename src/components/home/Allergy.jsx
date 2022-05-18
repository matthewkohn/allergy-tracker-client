import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'

const Allergy = ({card}) => {

  let allergiesList = 'none'
  let ingredientsList = 'none'

  if (card.allergies.length > 0) {
    allergiesList = card.allergies.map(a => 
      <li key={a.id} >{a.name}</li>
    )
    ingredientsList = card.ingredients.map(i =>
      <li key={i.id}>{i.name}</li>
    )
  } 

  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5">{card.name}</Typography>
        <Typography gutterBottom variant="subtitle1">Allergies:</Typography>
        {allergiesList}
        <br/>
        <Typography gutterBottom variant="subtitle1">Guilty Ingredients:</Typography>
        {ingredientsList}
      </CardContent>
    </CardActionArea>
    )
}

export default Allergy