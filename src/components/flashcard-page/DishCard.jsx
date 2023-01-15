import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Card, CardActions, IconButton, styled, Typography } from '@mui/material';
import EditIcon from '@mui/icons-material/Edit';
import DeleteForeverIcon from '@mui/icons-material/DeleteForever';
import Dish from './DishSide';
import Allergy from './AllergySide';
import { dishUrl } from '../../data/urls';

const DishCard = ({ card, onDelete }) => {
  const [flip, setFlip] = useState(true);
  const navigate = useNavigate();
  console.log("card passed to DishCard: ", card)

  const handleDelete = () => {
    fetch(dishUrl + '/' + card.id, {
      method: 'DELETE',
      headers: {
        'Content-type': 'application/json'
      }
    })
      .then(res => res.json())
      .then(onDelete(card.id))
      .catch(console.log)
  };

  return (
    <FlashCard variant="outlined" raised onClick={ () => setFlip(!flip) }>
      <Header gutterBottom variant="h3">{card.name}</Header>
      {flip ? <Dish card={card} /> : <Allergy card={card} />}
      <CardActions>
        <IconButton onClick={ () => navigate('/update', { state: card }) } >
          <EditIcon />
        </IconButton>
        <IconButton onClick={ handleDelete }>
          <DeleteForeverIcon />
        </IconButton>
      </CardActions>
    </FlashCard>
  )
}

export default DishCard;

const FlashCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-between',
  margin: '10px 30px',
  padding: '15px',
  width: '240px',
  height: '300px',
  backgroundColor: '#f0f0f0',
  borderRadius: '15px',
  '&:hover': {
    backgroundColor: '#f9f9f9',

  },
});

const Header = styled(Typography)({
  fontSize: '22px',
  fontWeight: 'bold',
  padding: '10px 0 10px',
  textAlign: 'center',
});