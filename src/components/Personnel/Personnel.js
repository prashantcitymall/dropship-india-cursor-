import React from 'react';
import styled from 'styled-components';

const PersonnelSection = styled.section`
  padding: 60px 0;
  background: #1a237e;
  color: white;
  position: relative;
  margin-top: -25%;
  margin-bottom: -25px;
  z-index: 3;
`;

const Title = styled.h2`
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

const CardsContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  gap: 30px;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
`;

const Card = styled.div`
  flex: 1;
  min-width: 250px;
  max-width: 280px;
  background: rgba(255, 255, 255, 0.05);
  padding: 30px;
  border-radius: 15px;
  backdrop-filter: blur(10px);
  border: 1px solid rgba(255, 255, 255, 0.1);
  transition: all 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    background: rgba(255, 255, 255, 0.1);
    box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);
  }
`;

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
  color: #4CAF50;
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: rgba(255, 255, 255, 0.9);
`;

const GreenText = styled.span`
  color: #4CAF50;
  font-weight: 700;
`;

const Personnel = () => {
  const cards = [
    {
      title: 'Who We Are',
      text: <>Dropship India, a <GreenText>Citymall subsidiary</GreenText>, is India&apos;s fastest-growing dropshipping platform & the smart choice for all eCommerce entrepreneurs.</>
    },
    {
      title: 'Our Scale',
      text: 'Built by professionals, Dropship India currently works with 150+ dropshippers & >40,000 orders daily.'
    },
    {
      title: 'Our Products',
      text: 'Wide range of products with highest profit margins and comprehensive end-to-end order delivery and fulfillment.'
    },
    {
      title: 'Our Values',
      text: 'We pride ourselves on maintaining complete Transparency & Trust in all our business operations.'
    }
  ];

  return (
    <PersonnelSection>
      <Title>About Us</Title>
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardsContainer>
    </PersonnelSection>
  );
};

export default Personnel;
