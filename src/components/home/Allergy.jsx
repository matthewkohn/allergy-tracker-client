import React from 'react'
import { CardActionArea, CardContent, styled, Typography } from '@mui/material'

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
        <Header gutterBottom variant="h5">{card.name}</Header>
        <Typography gutterBottom variant="subtitle1">Allergies:</Typography>
        <ul>
          {allergiesList}
        </ul>
      </CardContent>
    </CardActionArea>
    )
}

export default Allergy

const Header = styled(Typography)({
  fontSize: '22px',
  fontWeight: 'bold'
})

