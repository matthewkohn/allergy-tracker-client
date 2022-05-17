import React, { useState } from 'react'
import Dish from './Dish'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'
// import Allergy from './Allergy'

const Dishes = () => {
  // const [isFront, setIsFront] = useState(true)
  const [flashcards, setFlashcards] = useState(SAMPLE)
  
  const handleCards = () => {
    setFlashcards(SAMPLE)
  }
  const flashcardList = flashcards.map(card => {
    return <Dish card={card} key={card.id} onClick={handleCards} />
  })


  return (
    <DishContainer maxWidth="xl">
      {flashcardList}
    </DishContainer>
  )
}

const SAMPLE = [
  {
    id: 1,
    name: 'Dish1',
    description: 'lorafkalsflkahsfklhasklfhalksfhlkashsflkahkhfaklshflkah',
    price: 24.00,
    allergies: [
      { allergyName: 'gluten' }
    ],
    ingredients: [
      { ingredient: 'bread' }
    ]
  }
]

export default Dishes

const DishContainer = styled(Container)({
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})