import React, { useContext } from 'react';
import { Box, styled, Typography } from '@mui/material';
import { AllergyContext } from '../../context/chosenAllergyContext';
import AllergyCard from './AllergyCard';

const Allergies = ({ allergies, onChoose }) => {
  const [chosenAllergy, setChosenAllergy] = useContext(AllergyContext);

  const handleAllergyChoice = (id) => {
    const chosen = allergies.find(a => a.id === id);
    setChosenAllergy(chosen);
  }

  const allergyCards = allergies.map((allergy) => (
    <AllergyCard key={ allergy.id } allergy={ allergy } chosenAllergy={ chosenAllergy } onChooseAllergy={ handleAllergyChoice } />
  ));

  return (
    <AllergiesBox>
      <Title variant="h3">Allergies</Title>
      { allergyCards }
    </AllergiesBox>
  )
};

export default Allergies;

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