import React, { useEffect, useState } from 'react'
import DishCard from './DishCard'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const DishesContainer = () => {
  const [flashcards, setFlashcards] = useState([])
  
  useEffect(() => {
    fetch('http://localhost:9292/dishes')
      .then(res => res.json())
      .then(setFlashcards)
  }, [])

  const flashcardList = flashcards.map(card => {
    return <DishCard card={card} key={card.id} />
  })

  return (
    <DishContainer >
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