import React, { useState } from 'react'
import { Card, styled } from '@mui/material'

import Dish from './Dish'
import Allergy from './Allergy'
// import { useNavigate } from 'react-router-dom';

const DishCard = ({card}) => {
  const [flip, setFlip] = useState(true)
  

  return (
    <FlashCard variant="outlined" onClick={() => setFlip(!flip)}>
      {flip ? <Dish card={card} /> : <Allergy card={card} />}
      
    </FlashCard>
  )
}

export default DishCard

const FlashCard = styled(Card)({
  display: 'flex',
  flexDirection: 'column',
  margin: '10px 30px',
  padding: '20px',
  width: '200px',
  height: '300px'
})

