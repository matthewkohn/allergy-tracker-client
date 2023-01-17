import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Box, Container, Fab, styled, Typography } from '@mui/material';
import AddIcon from '@mui/icons-material/Add';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';
import { dishUrl } from '../../data/urls';
import DishCard from './DishCard';

const DishesContainer = () => {
  const [flashcards, setFlashcards] = useState([]);
  const navigate = useNavigate();

  useEffect(() => {
    fetch(dishUrl)
      .then(res => res.json())
      .then(data => setFlashcards(data))
  }, []);

  const handleDelete = (deletedId) => {
    const updatedCards = flashcards.filter((card => card.id !== deletedId));
    setFlashcards(updatedCards);
  };

  const flashcardList = flashcards.map(card => {
    return <DishCard card={card} onDelete={handleDelete} key={card.id} />
  });

  return (
    <DishContainer>
      <AddBtn color="secondary" onClick={() => navigate('/new')}>
        <AddIcon />
      </AddBtn>
      <Intro variant="h2">
        <ThumbUpOffAltIcon /> and <ThumbDownOffAltIcon /> indicate whether the allergy is avoidable or not.
      </Intro>
      <FlashcardBox>
        {flashcardList}
      </FlashcardBox>
    </DishContainer>
  )
}

export default DishesContainer;

const DishContainer = styled(Container)({
  padding: '25px 0',
});

const AddBtn = styled(Fab)({
  position: 'fixed',
  right: '20px',
  width: '70px',
  height: '70px',
  backgroundColor: 'lightgreen',
  color: '#000',
  '@media (max-width: 720px)': {
    width: '30px',
    height: '30px',
  },
  '@media (max-width: 540px)': {
    top: '65px',
  },
});

const Intro = styled(Typography)({
  fontSize: '32px',
  color: '#333',
  textAlign: 'center',
  padding: '10px 0 25px',
  '@media (max-width: 1200px)': {
    fontSize: '20px',
  },
  '@media (max-width: 640px)': {
    fontSize: '16px',
  },
});

const FlashcardBox = styled(Box)({
  display: 'flex',
  flexWrap: 'wrap',
  justifyContent: 'center',
});