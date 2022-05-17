import React, { useState } from 'react'
import DishCard from './DishCard'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'
// import Allergy from './Allergy'

const DishesContainer = () => {
  // const [isFront, setIsFront] = useState(true)
  const [flashcards, setFlashcards] = useState(SAMPLE)
  
  const handleCards = () => {
    setFlashcards(SAMPLE)
  }
  const flashcardList = flashcards.map(card => {
    return <DishCard card={card} key={card.id} onClick={handleCards} />
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
    description: 'lo rafkals fl kahsf  klh asklfhalksf hlka shsfl kahkhfa klsh flka h',
    price: 24.00,
    allergies: [
      { allergyName: 'gluten' }
    ],
    ingredients: [
      { ingredient: 'bread' }
    ]
  },
  {
    id: 2,
    name: 'Dish2',
    description: 'hkh fak lsh flkahl ora fka l sfl kahs fklh a sklfhalks f hl k ashsf lka',
    price: 74.42,
    allergies: [
      { allergyName: 'shellfish' }
    ],
    ingredients: [
      { ingredient: 'shrimps' }
    ]
  },
  {
    id: 3,
    name: 'Dish3',
    description: 'halk sfh lk a shsf l kah khfa kls hfllo rafkal sf lkahsf klhask lfkah',
    price: 999,
    allergies: [
      { allergyName: 'dairy' }
    ],
    ingredients: [
      { ingredient: 'cheese' }
    ]
  }
]

export default DishesContainer

const DishContainer = styled(Container)({
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap'
})