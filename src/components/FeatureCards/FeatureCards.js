import React from 'react';
import { Box, Grid, Card, CardContent, CardMedia, Typography } from '@mui/material';
import { styled } from '@mui/material/styles';
import { motion } from 'framer-motion';
import { useLocation } from 'react-router-dom';

const StyledCard = styled(Card)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  borderRadius: '16px',
  overflow: 'hidden',
  boxShadow: '0 4px 20px rgba(0, 0, 0, 0.1)',
  transition: 'transform 0.3s ease-in-out',
  padding: '12px',
  backgroundColor: '#ffffff',
  '&:hover': {
    transform: 'translateY(-8px)',
  },
}));

const StyledCardMedia = styled(CardMedia)(({ showText }) => ({
  height: showText ? '180px' : '280px',
  objectFit: 'contain',
  borderRadius: '12px',
  backgroundColor: '#f5f8ff',
  padding: '12px',
}));

const StyledCardContent = styled(CardContent)({
  flexGrow: 1,
  padding: '16px 8px 8px 8px',
});

const cardData = [
  {
    title: '1Cr+ Orders Fulfilled',
    description: '95% orders delivered in less than 5 days',
    image: '/cards/delivery boy.jpg',
  },
  {
    title: '60,000+ Products',
    description: 'From 8,500 manufacturers, importers & sellers',
    image: '/cards/diffrent products.jpg',
  },
  {
    title: 'Unbeatable Prices',
    description: 'Best prices guaranteed across all platforms',
    image: '/cards/diffrent prices.jpg',
  },
  {
    title: '27,000+ Pincodes',
    description: 'Pan India delivery coverage',
    image: '/cards/pan india coverage .jpg',
  },
  {
    title: 'Daily Payments',
    description: 'Ensure uninterrupted cash flow',
    image: '/cards/daily payment 1.jpg',
  },
  {
    title: 'Transparency',
    description: 'Dedicated KAMs for live support',
    image: '/cards/transparency .jpg',
  },
  {
    title: 'Dedicated Support',
    description: 'Advanced NDR panel with expert team',
    image: '/cards/dedicated team.jpg',
  },
  {
    title: 'Bulk Orders',
    description: 'Efficient handling of large volume orders',
    image: '/cards/bulk orders.jpg',
  },
  {
    title: '20% Lower Shipping',
    description: 'Own supply chain with 8 delivery partners',
    image: '/cards/lower cost.png',
  },
];

const FeatureCards = () => {
  const location = useLocation();
  const showText = location.pathname !== '/cards';

  return (
    <Box sx={{ 
      py: showText ? 6 : 3, 
      px: { xs: 2, md: 4 }, 
      backgroundColor: '#f5f8ff',
      minHeight: '100vh'
    }}>
      {showText && (
        <Typography
          component="h2"
          variant="h3"
          align="center"
          sx={{ mb: 6, fontWeight: 'bold', color: '#1a237e' }}
        >
          Why Choose Us
        </Typography>
      )}
      <Grid container spacing={3}>
        {cardData.map((card, index) => (
          <Grid item xs={12} sm={6} md={3} key={index}>
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
            >
              <StyledCard>
                <StyledCardMedia
                  component="img"
                  image={card.image}
                  alt={card.title}
                  showText={showText}
                />
                {showText && (
                  <StyledCardContent>
                    <Typography
                      gutterBottom
                      variant="h6"
                      component="h3"
                      sx={{ 
                        fontWeight: 'bold',
                        color: '#1a237e',
                        mb: 1,
                        fontSize: '1rem'
                      }}
                    >
                      {card.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      color="text.secondary"
                      sx={{ lineHeight: 1.5 }}
                    >
                      {card.description}
                    </Typography>
                  </StyledCardContent>
                )}
              </StyledCard>
            </motion.div>
          </Grid>
        ))}
      </Grid>
    </Box>
  );
};

export default FeatureCards; 