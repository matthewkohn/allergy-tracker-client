import React, { useContext, useEffect, useState } from 'react';
import { Card, styled } from '@mui/material';
import { AllergyContext } from '../../context/AllergyContext';

const AllergySelection = ({ allergy, onChooseAllergy }) => {
  const { currentAllergy } = useContext(AllergyContext);
  const [isChosen, setIsChosen] = useState(false);

  useEffect(() => {
    if (currentAllergy.id === allergy.id) {
      setIsChosen(true);
    } else {
      setIsChosen(false);
    }
  }, [allergy.id, currentAllergy.id])

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

export default AllergySelection

const StyledCard = styled(Card)({
  padding: '10px',
  margin: '3px',
  cursor: 'pointer',
});