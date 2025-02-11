import React from 'react';
import styled, { keyframes } from 'styled-components';

const waveFlow = keyframes`
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
`;

const rippleEffect = keyframes`
  0% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.8;
  }
  50% {
    transform: translate(-50%, -50%) scale(1.2);
    opacity: 0.3;
  }
  100% {
    transform: translate(-50%, -50%) scale(0.8);
    opacity: 0.8;
  }
`;

const AboutSection = styled.section`
  padding: 120px 24px;
  background: linear-gradient(135deg, #1a2b6d 0%, #182860 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, transparent, rgba(82, 157, 255, 0.3), transparent);
  }

  @media (max-width: 1200px) {
    padding: 100px 20px;
  }

  @media (max-width: 768px) {
    padding: 80px 16px;
  }
`;

const AboutTitle = styled.h2`
  text-align: center;
  font-size: 3.2rem;
  color: #ffffff;
  margin-bottom: 80px;
  text-transform: uppercase;
  letter-spacing: 3px;
  position: relative;
  display: inline-block;
  padding-left: 20px;
  font-weight: 800;
  background: linear-gradient(135deg, #ffffff 0%, #a5c5ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  text-shadow: 0 2px 15px rgba(165, 197, 255, 0.3);

  &::after {
    content: '';
    position: absolute;
    bottom: -15px;
    left: 20px;
    width: calc(100% - 20px);
    height: 3px;
    background: linear-gradient(90deg, #529dff, transparent);
  }

  @media (max-width: 1200px) {
    font-size: 2.8rem;
    margin-bottom: 60px;
  }

  @media (max-width: 768px) {
    font-size: 2.4rem;
    margin-bottom: 50px;
    letter-spacing: 2px;
    padding-left: 10px;

    &::after {
      bottom: -12px;
      height: 2px;
      left: 10px;
      width: calc(100% - 10px);
    }
  }

  @media (max-width: 480px) {
    font-size: 2rem;
    margin-bottom: 40px;
    letter-spacing: 1px;
  }
`;

const CardsContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 40px;
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    gap: 30px;
    padding: 0 16px;
  }

  @media (max-width: 768px) {
    grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
    gap: 24px;
    padding: 0 12px;
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 20px;
    padding: 0 8px;
  }
`;

const Card = styled.div`
  background: rgba(255, 255, 255, 0.03);
  border-radius: 24px;
  padding: 40px 30px;
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-start;
  min-height: 260px;
  position: relative;
  overflow: hidden;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transform-origin: center;
  will-change: transform;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: linear-gradient(
      45deg,
      rgba(33, 150, 243, 0.1),
      rgba(33, 150, 243, 0.05),
      rgba(33, 150, 243, 0.1)
    );
    background-size: 200% 200%;
    animation: ${waveFlow} 8s ease infinite;
    z-index: -1;
  }

  &::after {
    content: '';
    position: absolute;
    top: 50%;
    left: 50%;
    width: 150%;
    height: 150%;
    background: radial-gradient(
      circle,
      rgba(255, 255, 255, 0.1) 0%,
      transparent 60%
    );
    animation: ${rippleEffect} 6s ease-in-out infinite;
    z-index: -1;
  }

  &:hover {
    transform: translateY(-5px) scale(1.05);
    border-color: rgba(255, 255, 255, 0.3);
    box-shadow: 
      0 15px 45px rgba(0, 0, 0, 0.2),
      0 0 20px rgba(33, 150, 243, 0.2),
      0 0 40px rgba(33, 150, 243, 0.1);

    &::before {
      animation: ${waveFlow} 4s ease infinite;
      background: linear-gradient(
        45deg,
        rgba(33, 150, 243, 0.2),
        rgba(33, 150, 243, 0.1),
        rgba(33, 150, 243, 0.2)
      );
    }

    &::after {
      animation: ${rippleEffect} 3s ease-in-out infinite;
    }
  }

  @media (max-width: 1200px) {
    padding: 35px 25px;
    min-height: 240px;
    border-radius: 20px;
  }

  @media (max-width: 768px) {
    padding: 30px 20px;
    min-height: 220px;
    border-radius: 16px;
  }

  @media (max-width: 480px) {
    padding: 25px 16px;
    min-height: 200px;
    border-radius: 12px;
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 12px;
  line-height: 1.3;
  white-space: pre-line;

  @media (max-width: 1200px) {
    font-size: 1.4rem;
    margin-bottom: 10px;
  }

  @media (max-width: 768px) {
    font-size: 1.3rem;
    margin-bottom: 8px;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  white-space: pre-line;

  @media (max-width: 768px) {
    font-size: 0.95rem;
    line-height: 1.5;
  }
`;

const Highlight = styled.span`
  color: #a5c5ff;
  font-weight: 600;
`;

const AboutAnalytics = () => {
  return (
    <AboutSection className="about-analytics-section">
      <AboutTitle>About Us</AboutTitle>
      <CardsContainer>
        <Card>
          <CardTitle>Who We Are</CardTitle>
          <CardText>
            Dropship India, a <Highlight>Citymall subsidiary</Highlight>, is India&apos;s fastest-growing dropshipping platform & the smart choice for all eCommerce entrepreneurs.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Our Scale</CardTitle>
          <CardText>
            Built by professionals, Dropship India currently works with{'\n'}<Highlight>150+ dropshippers</Highlight> &{'\n'}<Highlight>&gt;40,000 orders daily</Highlight>.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Our Products</CardTitle>
          <CardText>
            <Highlight>Wide range of products</Highlight>{'\n'}with highest profit margins and{'\n'}comprehensive end-to-end order{'\n'}delivery and fulfillment.
          </CardText>
        </Card>

        <Card>
          <CardTitle>Our Values</CardTitle>
          <CardText>
            We pride ourselves on maintaining{'\n'}complete <Highlight>Transparency & Trust</Highlight>{'\n'}in all our business operations.
          </CardText>
        </Card>
      </CardsContainer>
    </AboutSection>
  );
};

export default AboutAnalytics;
