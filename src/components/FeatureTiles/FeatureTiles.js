import React from 'react';
import styled, { keyframes } from 'styled-components';

const glow = keyframes`
  0% { box-shadow: 0 0 10px rgba(139, 195, 74, 0.3); }
  50% { box-shadow: 0 0 20px rgba(139, 195, 74, 0.5); }
  100% { box-shadow: 0 0 10px rgba(139, 195, 74, 0.3); }
`;

const borderAnimation = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const Container = styled.div`
  width: 100%;
  max-width: 1400px;
  margin: -5vh auto 0;
  padding: 0 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const TileContainer = styled.div`
  width: 100%;
  display: flex;
  gap: 20px;
  padding: 20px;
  justify-content: center;
  flex-wrap: nowrap;

  @media (max-width: 1024px) {
    flex-wrap: wrap;
  }
`;

const Tile = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.05);
  backdrop-filter: blur(10px);
  border-radius: 15px;
  padding: 25px;
  width: calc(33.33% - 14px);
  min-height: 180px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  transition: transform 0.3s ease;

  @media (max-width: 1024px) {
    width: 100%;
    min-height: 160px;
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 15px;
    padding: 1px;
    background: linear-gradient(
      300deg,
      #8BC34A,
      #335da9,
      #8BC34A
    );
    background-size: 200% 200%;
    animation: ${borderAnimation} 3s linear infinite;
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
  }

  &:hover {
    transform: translateY(-5px);
    animation: ${glow} 2s ease-in-out infinite;
  }
`;

const Title = styled.h3`
  color: #8BC34A;
  font-size: 1.6rem;
  font-weight: 700;
  margin-bottom: 12px;
  letter-spacing: 1px;
  text-transform: uppercase;
`;

const Description = styled.p`
  color: rgba(255, 255, 255, 0.9);
  font-size: 0.95rem;
  line-height: 1.5;
  margin: 0;
  letter-spacing: 0.5px;
`;

const features = [
  {
    title: "Extensive Products",
    description: "Explore our diverse catalog of high-quality products from trusted suppliers across India."
  },
  {
    title: "Direct Sourcing",
    description: "Get direct access to manufacturers, ensuring the best prices and authentic products."
  },
  {
    title: "Seamless Integration",
    description: "Easily integrate with your existing systems for streamlined order processing."
  }
];

const FeatureTiles = () => {
  return (
    <Container>
      <TileContainer>
        {features.map((feature, index) => (
          <Tile key={index}>
            <Title>{feature.title}</Title>
            <Description>{feature.description}</Description>
          </Tile>
        ))}
      </TileContainer>
    </Container>
  );
};

export default FeatureTiles;
