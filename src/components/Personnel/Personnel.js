import React from 'react';
import styled from 'styled-components';

const PersonnelSection = styled.section`
  padding: 70px 0;
  background: transparent;
  color: #333;
  position: relative;
  margin-top: -25%;
  margin-bottom: -25px;
  z-index: 3;
  overflow: hidden;

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0, 245, 160, 0.1), transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(0, 217, 245, 0.1), transparent 25%);
    pointer-events: none;
  }
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
  background: rgba(255, 255, 255, 0.1);
  padding: 30px;
  border-radius: 24px;
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

const CardTitle = styled.h3`
  font-size: 1.5rem;
  margin-bottom: 15px;
  font-weight: bold;
  color: #333;
  position: relative;
  padding-bottom: 8px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 50px;
    height: 2px;
    background: #4CAF50;
  }
`;

const CardText = styled.p`
  font-size: 1rem;
  line-height: 1.6;
  color: #666;
`;

const GreenText = styled.span`
  color: #4CAF50;
  font-weight: 700;
`;

const ImageWrapper = styled.div`
  width: 100%;
  height: 150px;
  margin-bottom: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
  }

  @media (max-width: 768px) {
    height: 120px;
    margin-bottom: 15px;
  }
`;

const Personnel = () => {
  const cards = [
    {
      title: 'Who We Are',
      text: <>Dropship India, a <GreenText>Citymall subsidiary</GreenText>, is India&apos;s fastest-growing dropshipping platform & the smart choice for all eCommerce entrepreneurs.</>,
      image: "/images/about us images/who.png"
    },
    {
      title: 'Our Scale',
      text: 'Built by professionals, Dropship India currently works with 150+ dropshippers & >40,000 orders daily.',
      image: "/images/about us images/scale.png"
    },
    {
      title: 'Our Products',
      text: 'Wide range of products with highest profit margins and comprehensive end-to-end order delivery and fulfillment.',
      image: "/images/about us images/product.png"
    },
    {
      title: 'Our Values',
      text: 'We pride ourselves on maintaining complete Transparency & Trust in all our business operations.',
      image: "/images/about us images/values.png"
    }
  ];

  return (
    <PersonnelSection>
      <Title>About Us</Title>
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            {card.image && (
              <ImageWrapper>
                <img src={card.image} alt={card.title} />
              </ImageWrapper>
            )}
            <CardTitle>{card.title}</CardTitle>
            <CardText>{card.text}</CardText>
          </Card>
        ))}
      </CardsContainer>
    </PersonnelSection>
  );
};

export default Personnel;
