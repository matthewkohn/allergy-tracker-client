// import React, { useContext, useEffect, useState } from 'react';
import { Box, styled, Typography } from '@mui/material';
// import { AllergyContext } from '../../context/chosenAllergyContext';

const Ingredients = () => {
  // const [chosenAllergy] = useContext(AllergyContext);
  // const [ingredients, setIngredients] = useState([]);

  // console.log(ingredients.map((i) => console.log(i)))

  // useEffect(() => {
    // if (chosenAllergy !== []) {
    //   setIngredients(chosenAllergy.ingredients)
    // }
  // }, [chosenAllergy])
  
  // const ingredientsList = ingredients.map((ingredient) => (
  //   <Typography key={ ingredient.id } >{ ingredient.name }</Typography>
  // ))

  return (
    <IngredientsBox>
      <Title variant="h3">Ingredients</Title>
      {/* {ingredientsList} */}
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