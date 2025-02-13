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
  max-width: 1400px;
  margin: 33vh auto 0;
  padding: 30px 20px 60px;
  display: flex;
  flex-direction: column;
  align-items: center;
  position: relative;
  z-index: 2;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #335da9;
  text-transform: uppercase;
  letter-spacing: 2px;
  position: relative;
  padding-bottom: 15px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 3px;
    background: linear-gradient(90deg, #4CAF50, #45a049);
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 40px;
  width: 100%;

  @media (max-width: 1024px) {
    flex-direction: column;
    gap: 30px;
  }
`;

const ImageCard = styled.div`
  flex: 1.5;
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 20px;
  overflow: visible;
  backdrop-filter: blur(10px);
  min-width: 600px;
  filter: drop-shadow(0 35px 35px rgba(0, 0, 0, 0.4));
  box-shadow: 0 30px 60px rgba(0, 0, 0, 0.3);

  @media (max-width: 1024px) {
    min-width: 100%;
  }

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
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -40px;
    left: 0;
    right: 0;
    height: 40px;
    background: radial-gradient(ellipse at center, rgba(0, 0, 0, 0.35) 0%, transparent 80%);
    filter: blur(8px);
    z-index: -1;
  }
`;

const TextContent = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  gap: 20px;
  padding: 20px;
  min-width: 400px;

  @media (max-width: 1024px) {
    min-width: 100%;
  }
`;

const MainTitle = styled.h2`
  font-size: 4rem;
  color: #4B9BFF;
  margin-bottom: 20px;
  font-weight: 600;
`;

const SubTitle = styled.div`
  display: flex;
  flex-direction: column;
  gap: 10px;
`;

const SourceText = styled.h3`
  font-size: 3.5rem;
  color: #000;
  font-weight: 500;
  line-height: 1.2;
`;

const ShipText = styled.h3`
  font-size: 3.5rem;
  color: #000;
  font-weight: 600;
  font-style: italic;
  line-height: 1.2;
`;

const Description = styled.p`
  font-size: 2rem;
  line-height: 1.4;
  color: #333;
  margin-top: 20px;
`;

const TextCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  padding: 30px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(76, 175, 80, 0.2);
    box-shadow: 
      0 14px 41px rgba(0, 0, 0, 0.1),
      0 0 18px rgba(76, 175, 80, 0.2),
      0 0 36px rgba(76, 175, 80, 0.1);
  }
`;

const Heading = styled.h3`
  font-size: 2rem;
  color: #335da9;
  margin-bottom: 15px;
  font-weight: bold;
`;

const Highlight = styled.span`
  color: #4CAF50;
  font-weight: 600;
`;

const ImageWrapper = styled.div`
  position: relative;
  width: 100%;
  height: 100%;
  border-radius: 15px;
  overflow: hidden;
  box-shadow: 0 25px 50px rgba(0, 0, 0, 0.3);
`;

const Image = styled.img`
  width: 100%;
  height: auto;
  display: block;
  border-radius: 15px;
  max-height: 600px;
  object-fit: contain;
`;

const FeaturedCard = () => {
  return (
    <CardContainer>
      <ContentWrapper>
        <TextContent>
          <MainTitle>Dropship India:</MainTitle>
          <SubTitle>
            <SourceText>Source Anything,</SourceText>
            <ShipText>Ship Everything</ShipText>
          </SubTitle>
          <Description>
            Become a part of India's fastest growing dropshipping platform!
          </Description>
        </TextContent>
        <ImageCard>
          <ImageWrapper>
            <Image src="/images/products.png" alt="Dropship India Products" />
          </ImageWrapper>
        </ImageCard>
      </ContentWrapper>
    </CardContainer>
  );
};

export default FeaturedCard;
