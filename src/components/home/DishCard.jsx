import React, { useState } from 'react'
import { Card, CardActions, IconButton, styled } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'

import Dish from './Dish'
import Allergy from './Allergy'
// import { useNavigate } from 'react-router-dom';

const DishCard = ({card}) => {
  const [flip, setFlip] = useState(true)
  

  return (
    <FlashCard variant="outlined" onClick={() => setFlip(!flip)}>
      {flip ? <Dish card={card} /> : <Allergy card={card} />}
      <CardUpdateDiv >
        <IconButton aria-label="add to favorites">
          <EditIcon />
        </IconButton>
        <IconButton aria-label="share">
          <DeleteForeverIcon />
        </IconButton>
      </CardUpdateDiv>
    </FlashCard>
  )
}

export default DishCard

const FlashCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '10px 30px',
  padding: '20px',
  width: '200px',
  height: '300px'
})

const CardUpdateDiv = styled(CardActions)({
  position: 'relative'
})