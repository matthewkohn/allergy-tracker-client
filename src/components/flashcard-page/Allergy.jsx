import React from 'react';
import { Box, styled, Typography } from '@mui/material';
import ThumbUpOffAltIcon from '@mui/icons-material/ThumbUpOffAlt';
import ThumbDownOffAltIcon from '@mui/icons-material/ThumbDownOffAlt';


const Allergy = ({ allergy }) => {
  return (
    <AllergyBox>
      <Typography variant="caption" align="inherit">
        {allergy.allergy.name} from {allergy.ingredient_name} 
      </Typography>
      { allergy.is_omittable ? <ThumbUpOffAltIcon /> : <ThumbDownOffAltIcon /> }
    </AllergyBox>
  )
}

export default Allergy

const AllergyBox = styled(Box)({
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'space-between',
  borderBottom: '1px solid #DDC',
  padding: '2px 0',
});