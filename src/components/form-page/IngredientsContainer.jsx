// import React, { useContext, useState } from 'react';
// import { Box, Checkbox, FormControlLabel, FormGroup, IconButton, styled, TextField, Typography } from '@mui/material';
// import AddIcon from '@mui/icons-material/Add';
import React, { useContext } from 'react';
import { Box, Checkbox, FormGroup, styled, Typography } from '@mui/material';
import { AllergyContext } from '../../context/AllergyContext';

const IngredientsContainer = ({ dishAllergies, onAddNew, onChooseIngredients }) => {
  const { currentAllergy } = useContext(AllergyContext);
  // const [newIngredient, setNewIngredient] = useState('');

// pass onChooseIngredients to ingredientsList items
// pass 

  const ingredientsList = currentAllergy.ingredients?.map((ingredient) => (
    <Checkbox 
      key={ ingredient.id } 
      dishAllergies={ dishAllergies }
      ingredient={ ingredient.name }
    />
  ));

  // const handleNewIngredient = (e) => {
  //   setNewIngredient(e.target.value);
  // }

  return (
    <IngredientsBox>
      <Title variant="h3">Ingredients</Title>
      <FormGroup>
        { ingredientsList }
        {/* <AddIngredient>
          <FormControlLabel 
            label={`Add new ${ currentAllergy.name } ingredient`}
            labelPlacement='top' 
            control={ 
              <ControlBox>
                <TextField variant="filled" />  
                <IconButton onClick={ (e) => onAddNew(e) }>
                  <AddIcon />
                </IconButton>
              </ControlBox>
            }
            onChange={ (e) => handleNewIngredient(e) }
            value={ newIngredient }
          />
        </AddIngredient> */}
      </FormGroup>
    </IngredientsBox>
  )
}

export default IngredientsContainer;

const IngredientsBox = styled(Box)({
  // border: '4px solid rebeccapurple',
  width: '100%',
  padding: '20px',
});

const Title = styled(Typography)({
  fontSize: '30px',
  textAlign: 'center',
});

// const AddIngredient = styled(Box)({
//   display: 'flex',
//   background: '#4DC',
//   padding: '3px 0 10px',
//   borderRadius: '5px',
// })

// const ControlBox = styled(Box)({
//   display: 'flex',
// })