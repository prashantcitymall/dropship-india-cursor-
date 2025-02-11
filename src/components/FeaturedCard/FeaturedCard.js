import React from 'react';
import styled, { keyframes } from 'styled-components';

const float = keyframes`
  0% { transform: translateY(0px) rotate(0deg); }
  50% { transform: translateY(-20px) rotate(1deg); }
  100% { transform: translateY(0px) rotate(0deg); }
`;

const glowPulse = keyframes`
  0% { box-shadow: 0 0 20px rgba(51, 93, 169, 0.3); }
  50% { box-shadow: 0 0 40px rgba(139, 195, 74, 0.3); }
  100% { box-shadow: 0 0 20px rgba(51, 93, 169, 0.3); }
`;

const scanline = keyframes`
  0% { transform: translateY(-100%); }
  100% { transform: translateY(100%); }
`;

const CardContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  margin: -17vh auto 0;
  padding: 30px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 4.5rem;
  font-weight: 900;
  text-align: center;
  margin-bottom: 40px;
  color: #8BC34A;
  text-transform: uppercase;
  letter-spacing: 4px;
  position: relative;

  @media (max-width: 768px) {
    font-size: 3rem;
    letter-spacing: 2px;
  }
`;

const Card = styled.div`
  position: relative;
  width: 100%;
  max-width: 800px;
  margin: 40px auto;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  overflow: hidden;
  backdrop-filter: blur(10px);
  animation: ${float} 6s ease-in-out infinite;

  &::before {
    content: '';
    position: absolute;
    inset: 0;
    border-radius: 20px;
    padding: 2px;
    background: linear-gradient(135deg, #335da9, #8BC34A);
    -webkit-mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    mask: 
      linear-gradient(#fff 0 0) content-box, 
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    animation: ${glowPulse} 4s infinite;
  }

  &::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      transparent 0%,
      rgba(139, 195, 74, 0.1) 50%,
      transparent 100%
    );
    animation: ${scanline} 4s linear infinite;
    pointer-events: none;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 50%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transform: skewX(-25deg);
    animation: shine 3s infinite;
  }

  @keyframes shine {
    100% {
      left: 200%;
    }
  }
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  transform: scale(0.98);
  transition: transform 0.3s ease;

  ${Card}:hover & {
    transform: scale(1);
  }
`;

const FeaturedCard = () => {
  return (
    <CardContainer>
      <Title>DROPSHIP INDIA</Title>
      <Card>
        <ImageWrapper>
          <Image src="/images/products.png" alt="Dropship India Products" />
        </ImageWrapper>
      </Card>
    </CardContainer>
  );
};

export default FeaturedCard;
