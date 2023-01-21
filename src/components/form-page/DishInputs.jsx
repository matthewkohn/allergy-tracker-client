import React from 'react';
import { Box, styled, TextField, Typography } from '@mui/material';

const DishInputs = ({ formData, onUpdate }) => {
  const { name, description, price } = formData;

  const textField = (value, inputName, inputLabel, inputType, isMultiLine, max) => {
    return (
      <StyledInput
        required
        variant="filled"
        onChange={ (e) => onUpdate(e) }
        value={ value }
        name={ inputName }
        label={ inputLabel }
        type={ inputType }
        multiline={ isMultiLine }
        inputProps={{ maxLength: max, step: 0.01 }}
      />
    )
  };

  return (
    <DishInputsBox>
      <Title variant="h3">Dish</Title>
      <InputSection>
        { textField(name, "name", "Dish Name", "text", false, 24) }
        { textField(price, "price", "Price", "number", false, 4) }
      </InputSection>
      <InputSection>
        { textField(description, "description", "Description (max 120 characters)", "text", true, 120) }
      </InputSection>
    </DishInputsBox>
  )
}

export default DishInputs;

const DishInputsBox = styled(Box)({
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  width: '30vw',
  height: '50vh',
  padding: '20px',
});

const StyledInput = styled(TextField)({
  background: '#DDC',
});

const InputSection = styled(Box)({
  display: 'inherit',
  flexDirection: 'column',
  justifyContent: 'space-around',
  height: '50%',
})

const Title = styled(Typography)({
  fontSize: '30px',
  textAlign: 'center',
});