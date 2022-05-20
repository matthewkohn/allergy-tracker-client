import React, { useState } from 'react'
import { Card, CardActions, IconButton, styled } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteForeverIcon from '@mui/icons-material/DeleteForever'
import Dish from './Dish'
import Allergy from './Allergy'
// import { useNavigate } from 'react-router-dom';

const DishCard = ({ card, onUpdate }) => {
  const [flip, setFlip] = useState(true)
  

  const handleDelete = () => {
    fetch(`http://localhost:9292/dishes/${card.id}`, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(onUpdate(card.id))
      .catch(console.log)
  }

  return (
    <FlashCard variant="outlined" onClick={() => setFlip(!flip)}>
      {flip ? <Dish card={card} /> : <Allergy card={card} />}
      <CardUpdateDiv >
        <IconButton sx={{ zIndex: 3}} >
          <EditIcon />
        </IconButton>
        <IconButton onClick={() => handleDelete()}>
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