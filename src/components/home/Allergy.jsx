import React from 'react'
import { CardActionArea, CardContent, Typography } from '@mui/material'

const Allergy = ({ card }) => {
  const allergiesArr = card.allergy_ids
  let allergiesList = 'none'

  if (allergiesArr.length > 0) {
    allergiesList = allergiesArr.map(a => 
      <li key={a.allergy_id} >{a.allergy_name} from {a.ingredient_name}</li>
    )
  } 

  return (
    <CardActionArea>
      <CardContent>
        <Typography gutterBottom variant="h5">{card.name}</Typography>
        <Typography gutterBottom variant="subtitle1">Allergies:</Typography>
        <ul>
          {allergiesList}
        </ul>
      </CardContent>
    </CardActionArea>
    )
}

export default Allergy