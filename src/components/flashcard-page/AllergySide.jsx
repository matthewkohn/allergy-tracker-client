import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import Allergy from './Allergy';

const AllergySide = ({ card }) => {
  const allergiesArr = card.dish_allergies;
  let allergiesList = 'none';

  if (allergiesArr.length > 0) {
    allergiesList = allergiesArr.map(allergy => 
      <Allergy key={ allergy.id } allergy={ allergy } />
    )
  };

  return (
    <AllergiesBox>
      <Title gutterBottom variant="h4" >Allergies:</Title>
      {allergiesList}
    </AllergiesBox>
  )
}

export default AllergySide;

const AllergiesBox = styled(Box)({
  height: '100%',
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  padding: '15px',
});

const Title = styled(Typography)({
  fontSize: '20px',
  textAlign: 'center',
  padding: '0 0 3px',
});
