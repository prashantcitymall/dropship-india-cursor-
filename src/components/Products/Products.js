import React from 'react';
import { Container, Typography } from '@mui/material';
import styled from 'styled-components';
import './Products.css';

const ProductsWrapper = styled.div`
  min-height: 100vh;
  padding: 120px 0;
  position: relative;
  overflow: hidden;
  background: transparent !important;
  color: #335da9;

  @media (max-width: 1024px) {
    padding: 100px 0;
  }

  @media (max-width: 768px) {
    padding: 80px 0;
  }

  &:after {
    content: none;
  }
`;

const ProductSection = styled.section`
  margin-bottom: 120px;
  background: transparent !important;

  @media (max-width: 1024px) {
    margin-bottom: 100px;
  }

  @media (max-width: 768px) {
    margin-bottom: 80px;
  }
`;

const Title = styled(Typography)`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;
  color: transparent;
  background: linear-gradient(
    135deg,
    #335da9,
    #8BC34A,
    #335da9
  );
  background-size: 200% auto;
  background-clip: text;
  -webkit-background-clip: text;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;
  text-shadow: 
    2px 2px 4px rgba(51, 93, 169, 0.2),
    -2px -2px 4px rgba(139, 195, 74, 0.2);
  
  @media (max-width: 1200px) {
    font-size: 4rem;
    margin-bottom: 35px;
  }

  @media (max-width: 1024px) {
    font-size: 3.5rem;
    margin-bottom: 30px;
    letter-spacing: 3px;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    letter-spacing: 2px;
    margin-bottom: 25px;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
    letter-spacing: 1px;
    margin-bottom: 20px;
  }
  
  &::before {
    content: 'DROPSHIP INDIA';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      45deg,
      transparent 45%,
      rgba(139, 195, 74, 0.5) 50%,
      transparent 55%
    );
    background-size: 200% auto;
    -webkit-background-clip: text;
    background-clip: text;
    color: transparent;
    z-index: -1;
    animation: shine 3s linear infinite;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 150px;
    height: 4px;
    background: linear-gradient(90deg, #335da9, #8BC34A);
    border-radius: 2px;
    box-shadow: 
      0 0 10px rgba(51, 93, 169, 0.5),
      0 0 20px rgba(139, 195, 74, 0.3);

    @media (max-width: 768px) {
      width: 120px;
      height: 3px;
      bottom: -8px;
    }

    @media (max-width: 480px) {
      width: 100px;
      height: 2px;
      bottom: -6px;
    }
  }

  @keyframes shine {
    0% {
      background-position: 200% center;
    }
    100% {
      background-position: -200% center;
    }
  }
`;

const Products = () => {
  return (
    <ProductsWrapper>
      <Container maxWidth="xl">
        <Title>Our Products</Title>
        <ProductSection>
          {/* Product content will go here */}
        </ProductSection>
      </Container>
    </ProductsWrapper>
  );
};

export default Products;
