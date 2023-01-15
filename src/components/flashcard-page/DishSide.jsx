import React from 'react';
import { Box, Typography } from '@mui/material';
import { styled } from '@mui/material';

const DishSide = ({card}) => {
  return (
    <DishBox>
      <Details variant="p">{card.description}</Details>
      <Details variant="subtitle">${card.price}</Details>
    </DishBox>
  )
}

export default DishSide;


const DishBox = styled(Box)({
  height: '100%',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-between',
  padding: '15px',
});

const Details = styled(Typography)({
  overflowY: 'auto',
  color: 'grey',
  lineHeight: '20px',
  fontSize: '15px',
});