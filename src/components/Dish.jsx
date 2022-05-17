import React, { useState } from 'react'
import { Card } from '@mui/material'
import { styled } from '@mui/material/styles'
import DishInfo from './DishInfo'
import Allergy from './Allergy'


const Dish = ({card}) => {
  const [flip, setFlip] = useState(false)

  return (
    <DishCard variant="outlined" onClick={() => setFlip(!flip)}>
      {flip ? <DishInfo card={card} /> : <Allergy card={card} />}
      
    </DishCard>
  )
}

export default Dish

const DishCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 30px',
  padding: '20px',
  width: '200px',
  height: '300px'
})




// {
//   id: 1,
//   name: 'Dish1',
//   description: 'lorafkalsflkahsfklhasklfhalksfhlkashsflkahkhfaklshflkah',
//   price: 24.00,
//   allergies: [
//     { allergyName: 'gluten' }
//   ],
//   ingredients: [
//     { ingredient: 'bread' }
//   ]
// }