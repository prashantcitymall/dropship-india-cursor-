import React from 'react';
import styled, { keyframes } from 'styled-components';
import './Shipping.css';
import Capabilities from '../Capabilities/Capabilities';

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

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(calc(-270px * 5)); /* Reduced from 300px */
  }
`;

const ShippingTitle = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 50px;
  color: #4CAF50;
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
    background: #4CAF50;
  }
`;

const ShippingSection = styled.section`
  padding: 60px 0;
  background: #1a237e;
  position: relative;
  margin-top: -28%;
  z-index: 1;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    background: #1a237e;
    opacity: 0.9;
    z-index: -1;
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  margin: 0 auto;
  position: relative;
  overflow: hidden;
  padding: 20px 0;

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, rgba(26, 43, 109, 1), transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, rgba(26, 43, 109, 1), transparent);
  }
`;

const CardsTrack = styled.div`
  display: flex;
  width: calc(270px * 10); /* Reduced from 300px */
  animation: ${scroll} 60s linear infinite;
  transition: all 0.5s ease-in-out;

  &:hover {
    animation-play-state: paused;
    transform: scale(0.98);
  }
`;

const Card = styled.div`
  flex: 0 0 270px; /* Reduced from 300px */
  height: 270px; /* Reduced from 300px */
  background: rgba(255, 255, 255, 0.03);
  border-radius: 22px; /* Reduced from 24px */
  padding: 36px 27px; /* Reduced from 40px 30px */
  text-align: center;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  border: 1px solid rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;
  margin: 0 18px; /* Reduced from 20px */
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
      0 14px 41px rgba(0, 0, 0, 0.2), /* Reduced from 15px 45px */
      0 0 18px rgba(33, 150, 243, 0.2), /* Reduced from 20px */
      0 0 36px rgba(33, 150, 243, 0.1); /* Reduced from 40px */

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
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
  color: #4CAF50;
  text-align: center;
`;

const CardText = styled.p`
  font-size: 0.9rem; /* Reduced from 1rem */
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.8);
  margin: 0;
  white-space: pre-line;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 0.85rem;
    line-height: 1.5;
  }
`;

const Highlight = styled.span`
  color: #a5c5ff;
  font-weight: 600;
`;

const Shipping = () => {
  const cards = [
    {
      title: "Trusted Delivery Partners",
      text: "Partnered with Delhivery, Blue Dart,\nDTDC, and Ekart for\nreliable shipping"
    },
    {
      title: "Road, Rail & Air Freight",
      text: "Multiple transport capabilities\nfor reducing delivery TATs\nand ensuring faster reach"
    },
    {
      title: "Best in Class Delivery",
      text: "Exceptional performance with\n95% orders delivered\nin less than 5 days"
    },
    {
      title: "Own Supply Chain",
      text: "Extensive infrastructure with\n5 lac+ sq. ft\nwarehouse space"
    },
    {
      title: "Pan India COD",
      text: "Seamless COD Remittance with\ndelivery across\n27,000+ pincodes"
    }
  ];

  // Double the cards array for seamless infinite scroll
  const allCards = [...cards, ...cards];

  return (
    <ShippingSection>
      <ShippingTitle>SHIPPING</ShippingTitle>
      <CarouselContainer>
        <CardsTrack>
          {allCards.map((card, index) => (
            <Card key={index}>
              <CardTitle>{card.title}</CardTitle>
              <CardText>
                {card.text.split('\n').map((line, i) => (
                  <React.Fragment key={i}>
                    {i > 0 && <br />}
                    {line.includes('Delhivery, Blue Dart') ||
                     line.includes('95% orders delivered') ||
                     line.includes('5 lac+ sq. ft') ||
                     line.includes('27,000+ pincodes') ? (
                      <Highlight>{line}</Highlight>
                    ) : line}
                  </React.Fragment>
                ))}
              </CardText>
            </Card>
          ))}
        </CardsTrack>
      </CarouselContainer>
      {/* Adding Capabilities section */}
      <div className="capabilities-wrapper">
        <Capabilities />
      </div>
    </ShippingSection>
  );
};

export default Shipping;
