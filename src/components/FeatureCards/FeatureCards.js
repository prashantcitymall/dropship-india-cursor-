import React from 'react';
import styled, { keyframes } from 'styled-components';
import { motion } from 'framer-motion';

const shimmer = keyframes`
  0% {
    background-position: -1000px 0;
  }
  100% {
    background-position: 1000px 0;
  }
`;

const float = keyframes`
  0% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-10px);
  }
  100% {
    transform: translateY(0px);
  }
`;

const Title = styled.h2`
  text-align: center;
  color: #333;
  font-size: 2.8rem;
  font-weight: 700;
  margin-bottom: 50px;
  position: relative;
  padding-bottom: 15px;
  text-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  
  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: #4CAF50;
    box-shadow: 0 0 10px rgba(76, 175, 80, 0.5);
  }
`;

const Container = styled.section`
  padding: 80px 0;
  position: relative;
  width: 100%;
  min-height: 100vh;
  
  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
    mix-blend-mode: soft-light;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    z-index: 1;
  }
`;

const ContentWrapper = styled.div`
  max-width: 1400px;
  width: 100%;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;
`;

const Card = styled(motion.div)`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(20px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 
    0 20px 40px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.1);
  padding: 40px;
  width: 100%;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(76, 175, 80, 0.1) 0%,
      rgba(33, 150, 243, 0.1) 30%,
      rgba(156, 39, 176, 0.1) 60%,
      rgba(255, 193, 7, 0.1) 100%
    );
    z-index: 0;
  }
`;

const ImageGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 30px;
  position: relative;
  z-index: 2;
  
  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
    gap: 25px;
  }
  
  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ImageWrapper = styled(motion.div)`
  position: relative;
  width: 100%;
  border-radius: 20px;
  overflow: hidden;
  cursor: pointer;
  aspect-ratio: 4/3;
  background: rgba(255, 255, 255, 0.95);
  box-shadow: 
    0 4px 15px rgba(0, 0, 0, 0.1),
    inset 0 0 0 1px rgba(255, 255, 255, 0.2);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 
      0 8px 30px rgba(0, 0, 0, 0.2),
      0 0 0 1px rgba(255, 255, 255, 0.3),
      0 0 20px rgba(76, 175, 80, 0.2);
  }

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.4) 0%,
      rgba(255, 255, 255, 0.1) 100%
    );
    z-index: 1;
    opacity: 0;
    transition: opacity 0.3s ease;
  }

  &:hover::before {
    opacity: 1;
  }
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
  display: block;
  padding: 10px;

  ${props => (
    props.$isFirstImage || 
    props.$isSecondImage || 
    props.$isThirdImage ||
    props.$isDeliveryBoy ||
    props.$isDedicatedTeam ||
    props.$isDailyPayment
  ) && `
    object-fit: cover;
    padding: 0;
  `}
`;

const FeatureCards = () => {
  const features = [
    { image: '/cards/pan%20india%20coverage%20.jpg' },
    { image: '/cards/transparency%20.jpg' },
    { image: '/cards/diffrent%20products.jpg' },
    { image: '/cards/diffrent%20prices.jpg' },
    { image: '/cards/dedicated%20team.jpg' },
    { image: '/cards/daily%20payment%201.jpg' }
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: {
        staggerChildren: 0.1
      }
    }
  };

  const itemVariants = {
    hidden: { 
      opacity: 0,
      y: 20,
      scale: 0.95
    },
    visible: { 
      opacity: 1,
      y: 0,
      scale: 1,
      transition: {
        type: "spring",
        stiffness: 100,
        damping: 10
      }
    }
  };

  return (
    <Container>
      <ContentWrapper>
        <Title>Why Choose Dropship India?</Title>
        <Card
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={containerVariants}
        >
          <ImageGrid>
            {features.map((feature, index) => (
              <ImageWrapper
                key={index}
                whileHover={{ 
                  scale: 1.05,
                  transition: { duration: 0.3 }
                }}
              >
                <Image 
                  src={feature.image} 
                  alt={`Feature ${index + 1}`} 
                  loading="lazy"
                  $isFirstImage={index === 0}
                  $isSecondImage={index === 1}
                  $isThirdImage={index === 2}
                  $isDedicatedTeam={index === 4}
                  $isDailyPayment={index === 5}
                />
              </ImageWrapper>
            ))}
          </ImageGrid>
        </Card>
      </ContentWrapper>
    </Container>
  );
};

export default FeatureCards; 