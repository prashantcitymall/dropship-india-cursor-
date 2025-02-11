import React from 'react';
import FeatureCards from '../../components/FeatureCards/FeatureCards';
import { Box } from '@mui/material';

const Cards = () => {
  return (
    <Box sx={{ 
      pt: { xs: 8, sm: 9, md: 10 }, // Add padding top to account for navbar
      minHeight: '100vh',
      background: '#ffffff'
    }}>
      <FeatureCards />
    </Box>
  );
};

export default Cards; 