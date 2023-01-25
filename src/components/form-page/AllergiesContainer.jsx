import React, { useContext } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { AllergyContext } from '../../context/AllergyContext';
import AllergySelection from './AllergySelection';

const AllergiesContainer = ({ onChoose }) => {
  const { currentAllergy, setCurrentAllergy, allergyIngredients } = useContext(AllergyContext);

  const handleAllergyChoice = (id) => {
    const chosen = allergyIngredients.find(a => a.id === id);
    setCurrentAllergy(chosen);
  }

  const allergyCards = allergyIngredients.map((allergy) => (
    <AllergySelection key={ allergy.id } allergy={ allergy } onChooseAllergy={ handleAllergyChoice } />
  ));

  return (
    <AllergiesBox>
      <Title variant="h3">Allergies</Title>
      { allergyCards }
    </AllergiesBox>
  )
};

export default AllergiesContainer;

const AllergiesBox = styled(Box)({
  width: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'space-around',
  margin: '0 10px',
  padding: '20px',
});

const Title = styled(Typography)({
  fontSize: '30px',
  textAlign: 'center',
});