import React, { useState } from 'react'
import DishCard from './DishCard'
import { Container } from '@mui/material'
import { styled } from '@mui/material/styles'

const DishesContainer = () => {
  const [flashcards, setFlashcards] = useState(SAMPLE)
  
  const handleCards = () => {
    setFlashcards(SAMPLE)
  }
  const flashcardList = flashcards.map(card => {
    return <DishCard card={card} key={card.id} onClick={handleCards} />
  })


  return (
    <DishContainer >
      {flashcardList}
    </DishContainer>
  )
}

const SAMPLE = [
  {
    "id": 1,
    "name": "Chicken",
    "description": "Wood fired rotisserie chicken, juicy delicious",
    "price": 22.94,
    "allergies": [
        // {
        //     "name": "shellfish"
        // },
        // {
        //     "name": "allium"
        // }
    ],
    "ingredients": [
        {
            "id": 1,
            "name": "broccoli",
            "is_avoidable": true,
            "dish_id": 1,
            "allergy_id": 2
        },
        {
          "id": 2,
            "name": "donuts",
            "is_avoidable": false,
            "dish_id": 1,
            "allergy_id": 1
        }
    ]
},
  {
    "id": 2,
    "name": "Corned Pork Shank",
    "description": "Corned pork shank with gruyere whipped potatoes, apple cabbage slaw, and puffed farro",
    "price": 36.99,
    "allergies": [
        {
            "id": 2,
            "name": "dairy"
        },
        {
            "id": 1,
            "name": "gluten"
        }
    ],
    "ingredients": [
        {
          "id": 3,
            "name": "Cheese and cream",
            "is_avoidable": false,
            "dish_id": 1,
            "allergy_id": 2
        },
        {
          "id": 4,
            "name": "Puffed farro",
            "is_avoidable": true,
            "dish_id": 1,
            "allergy_id": 1
        }
    ]
},
  {
    "id": 3,
    "name": "Trout",
    "description": "Rocky Mountain Trout with the head still on, just looking right at you",
    "price": 31.22,
    "allergies": [
        {
            "id": 3,
            "name": "seafood"
        },
        {
            "id": 4,
            "name": "nut"
        }
    ],
    "ingredients": [
        {
          "id": 5,
            "name": "Cheese",
            "is_avoidable": false,
            "dish_id": 1,
            "allergy_id": 2
        },
        {
          "id": 6,
            "name": "eyes",
            "is_avoidable": false,
            "dish_id": 1,
            "allergy_id": 1
        }
    ]
}
]

export default DishesContainer

const DishContainer = styled(Container)({
  marginTop: '100px',
  display: 'flex',
  flexDirection: 'row',
  flexWrap: 'wrap',
  justifyContent: 'space-around'
})