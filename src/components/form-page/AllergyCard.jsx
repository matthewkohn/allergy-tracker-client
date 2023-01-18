import React, { useEffect, useState } from 'react';
import { Card, styled } from '@mui/material';

const AllergyCard = ({ allergy, chosenAllergy, onChooseAllergy }) => {
  const [isChosen, setIsChosen] = useState(false);

  useEffect(() => {
    if (chosenAllergy.id === allergy.id) {
      setIsChosen(true);
    } else {
      setIsChosen(false);
    }
  }, [allergy.id, chosenAllergy.id])

  return (
    <StyledCard
      raised
      onClick={ () => onChooseAllergy(allergy.id) }
      sx={ isChosen ? { background: 'green', color: 'white' } : { background: '#ddc' }}
    >
      <div>{allergy.name}</div>
    </StyledCard>
  )
}

export default AllergyCard

const StyledCard = styled(Card)({
  padding: '10px',
  margin: '3px',
  cursor: 'pointer',
});