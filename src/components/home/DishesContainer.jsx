import React, { useEffect, useState } from 'react'
import DishCard from './DishCard'
import { Container, Fab, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'

const DishesContainer = () => {
  const [flashcards, setFlashcards] = useState([])
  const navigate = useNavigate()
  
  useEffect(() => {
    fetch('http://localhost:9292/dishes')
      .then(res => res.json())
      .then(setFlashcards)
  }, [])

  //refactor
  const flashcardList = flashcards.map(card => {
    return <DishCard card={card} key={card.id} />
  })

  return (
    <DishContainer >
      <AddBtn color="secondary" onClick={() => navigate('/new')}>
        <AddIcon />
      </AddBtn>
      {flashcardList}
    </DishContainer>
  )
}

export default DishesContainer

const DishContainer = styled(Container)({
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
})

const AddBtn = styled(Fab)({
  position: 'fixed',
  right: '20px',
  width: '70px',
  height: '70px',
  backgroundColor: 'lightgreen',
  color: '#000'
})