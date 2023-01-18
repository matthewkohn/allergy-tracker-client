import React, { useContext } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { AllergyContext } from '../../context/chosenAllergyContext';

const Ingredients = () => {
  const [chosenAllergy] = useContext(AllergyContext);
  // const ingredients = chosenAllergy.ingredients;

  console.log(chosenAllergy)

  // const ingredientsList = ingredients.map((ingredient) => (
  //   <Typography key={ ingredient.id } >{ ingredient.name }</Typography>
  // ))

  return (
    <IngredientsBox>
      <Title variant="h3">Ingredients</Title>
      {/* { chosenAllergy ? ingredientsList : null } */}
    </IngredientsBox>
  )
}

export default Ingredients

const IngredientsBox = styled(Box)({
  border: '4px solid rebeccapurple',
  width: '100%',
  padding: '20px',
});

const Title = styled(Typography)({
  fontSize: '30px',
  textAlign: 'center',
});