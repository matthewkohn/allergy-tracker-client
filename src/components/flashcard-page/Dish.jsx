import React from 'react';
import { CardActionArea, CardContent, Typography } from '@mui/material';
import { styled } from '@mui/material';

const Dish = ({card}) => {
  return (
    <CardActionArea>
      <CardContent>
        <Header gutterBottom variant="h5">{card.name}</Header>
        <Details variant="p">{card.description}</Details>
        <br/><br/>
        <Details variant="subtitle">${card.price}</Details>
      </CardContent>
    </CardActionArea>
  )
}

export default Dish;

const Header = styled(Typography)({
  fontSize: '22px',
  fontWeight: 'bold'
});

const Details = styled(Typography)({
  padding: '10px 0',
  overflow: 'auto',
  color: 'grey',
  lineHeight: '20px',
  fontSize: '15px'
});