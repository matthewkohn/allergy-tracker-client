import React, { useEffect, useState } from 'react'
import DishCard from './DishCard'
import { Container, Fab, styled } from '@mui/material'
import AddIcon from '@mui/icons-material/Add';
import { useNavigate } from 'react-router-dom'
import { formatData } from '../../functions/arrayHelpers';

const DishesContainer = () => {
  const [flashcards, setFlashcards] = useState([])
  const navigate = useNavigate()

  useEffect(() => {
    fetch('http://localhost:9292/dishes')
      .then(res => res.json())
      .then(data => {
        const formatted = formatData(data)
        setFlashcards(formatted)
      })
  }, [])
  
  const handleDelete = (deletedId) => {
    const updatedCards = flashcards.filter((card => card.id !== deletedId))
    setFlashcards(updatedCards)
  }

  //refactor
  const flashcardList = flashcards.map(card => {
    return <DishCard card={card} onDelete={handleDelete} key={card.id} />
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