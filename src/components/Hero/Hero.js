import React from 'react';
import { Box, Container, Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const slideUp = keyframes`
  from { 
    opacity: 0;
    transform: translateY(30px);
  }
  to { 
    opacity: 1;
    transform: translateY(0);
  }
`;

const VideoBackground = styled.video`
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  object-fit: cover;
  z-index: 1;
  opacity: 1;
  margin: 0;
  border-bottom-left-radius: 30px;
  border-bottom-right-radius: 30px;
`;

const HeroSection = styled(Box)`
  color: white;
  padding: 0;
  height: 100vh;
  width: 100vw;
  position: relative;
  overflow: hidden;
  background: transparent;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background: rgba(0, 0, 0, 0.3);
    z-index: 2;
    border-bottom-left-radius: 30px;
    border-bottom-right-radius: 30px;
  }

  @media (max-width: 1024px) {
    padding: 0;
  }

  @media (max-width: 768px) {
    padding: 0;
    min-height: 100vh;
  }
`;

const ContentWrapper = styled(Container)`
  text-align: center;
  max-width: 1200px;
  margin: 0;
  padding: 0 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
  position: relative;
  z-index: 3;
  height: 100%;
  justify-content: center;

  @media (max-width: 768px) {
    padding: 0 16px;
    gap: 12px;
  }
`;

const MainTitle = styled.h1`
  font-size: 4.5rem;
  line-height: 1.2;
  margin-bottom: 20px;
  background: linear-gradient(135deg, #8BC34A 0%, #4CAF50 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  animation: ${slideUp} 0.8s ease-out;
  text-align: center;
  max-width: 900px;

  span {
    color: #1976D2;
    -webkit-text-fill-color: #1976D2;
  }

  @media (max-width: 1024px) {
    font-size: 3.8rem;
    margin-bottom: 16px;
  }

  @media (max-width: 768px) {
    font-size: 2.8rem;
    margin-bottom: 12px;
  }

  @media (max-width: 480px) {
    font-size: 2.2rem;
  }
`;

const SubTitle = styled.h2`
  font-size: 2.2rem;
  margin-bottom: 40px;
  color: #4CAF50;
  line-height: 1.4;
  animation: ${slideUp} 0.8s ease-out 0.2s backwards;
  text-align: center;
  max-width: 800px;

  @media (max-width: 1024px) {
    font-size: 2rem;
    margin-bottom: 32px;
  }

  @media (max-width: 768px) {
    font-size: 1.6rem;
    margin-bottom: 24px;
  }

  @media (max-width: 480px) {
    font-size: 1.4rem;
    margin-bottom: 20px;
  }
`;

const IntegrationText = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  font-size: 1.8rem;
  color: #1976D2;
  margin-bottom: 30px;
  animation: ${slideUp} 0.8s ease-out 0.3s backwards;

  img {
    height: 35px;
    width: auto;
    margin-left: 10px;
  }

  @media (max-width: 1024px) {
    font-size: 1.6rem;
    img {
      height: 30px;
    }
  }

  @media (max-width: 768px) {
    font-size: 1.4rem;
    img {
      height: 25px;
    }
  }

  @media (max-width: 480px) {
    font-size: 1.2rem;
    img {
      height: 20px;
    }
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 20px;
  justify-content: center;
  animation: ${slideUp} 0.8s ease-out 0.4s backwards;
  margin-top: 6%;
  position: relative;
  z-index: 100;
  pointer-events: auto;

  @media (max-width: 768px) {
    flex-direction: column;
    gap: 16px;
    width: 100%;
    max-width: 300px;
  }
`;

const PremiumButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #FF4081 0%, #E91E63 100%);
    color: white;
    padding: 12px 30px;
    font-size: 1.2rem;
    border-radius: 30px;
    text-transform: none;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    height: 48px;
    line-height: 1;
    display: flex;
    align-items: center;
    z-index: 100;
    cursor: pointer !important;
    pointer-events: auto !important;
    user-select: none;
    -webkit-user-select: none;
    -moz-user-select: none;
    -ms-user-select: none;

    @media (max-width: 768px) {
      width: 100%;
      font-size: 1.1rem;
      height: 44px;
      padding: 10px 24px;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.4),
        transparent
      );
      transition: 0.6s;
      pointer-events: none;
    }

    &:hover {
      background: linear-gradient(135deg, #E91E63 0%, #FF4081 100%);
      transform: translateY(-2px);
      box-shadow: 0 5px 15px rgba(233, 30, 99, 0.3);

      &::before {
        left: 100%;
      }
    }
  }
`;

const Hero = () => {
  return (
    <HeroSection>
      <VideoBackground 
        autoPlay 
        muted 
        loop 
        playsInline
        preload="auto"
        webkit-playsinline="true"
      >
        <source src="/video/robot.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </VideoBackground>
      <ContentWrapper maxWidth="xl">
        <MainTitle>
          Transform Your Business with <span>Dropshipping</span>
        </MainTitle>
        <SubTitle>
          Start your e-commerce journey with our powerful dropshipping solution
        </SubTitle>
        <IntegrationText>
          <strong>Dropship India Integrates with</strong> <img src="/images/shopify.png" alt="Shopify Logo" /> <strong>Shopify</strong>
        </IntegrationText>
        <ButtonGroup>
          <PremiumButton
            variant="contained"
            onClick={() => window.open('https://dropshipindia.live/', '_blank')}
          >
            Link Your Business Store
          </PremiumButton>
        </ButtonGroup>
      </ContentWrapper>
    </HeroSection>
  );
};

export default Hero;
