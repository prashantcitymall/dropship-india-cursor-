import React from 'react';
import styled from 'styled-components';

const SourcingSection = styled.section`
  padding: 70px 0;
  background: transparent;
  color: #333;
  position: relative;
  z-index: 2;
  overflow: hidden;
  margin-top: -62%;

  @media (max-width: 1024px) {
    margin-top: -65%;
  }

  @media (max-width: 768px) {
    margin-top: -67%;
  }

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
  color: #333;
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

  @media (max-width: 768px) {
    gap: 20px;
  }
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
  text-align: left;
`;

const Highlight = styled.span`
  color: #4CAF50;
  font-weight: 600;
`;

const Sourcing = () => {
  const cards = [
    {
      title: "48-Hours Quick Sourcing",
      text: "Fast sourcing service for new products at unbeatable prices across India."
    },
    {
      title: "60K+ High Quality Products",
      text: "Access to 60K+ high quality curated products from verified suppliers."
    },
    {
      title: "Top Manufacturers Network",
      text: "Sourced from 8,500+ top manufacturers, importers and sellers nationwide."
    },
    {
      title: "Better Pricing Guaranteed",
      text: "Minimum 30% better pricing for products vs all other platforms in the market."
    }
  ];

  return (
    <SourcingSection>
      <Title>SOURCING</Title>
      <CardsContainer>
        {cards.map((card, index) => (
          <Card key={index}>
            <CardTitle>{card.title}</CardTitle>
            <CardText>
              {card.text.split(' ').map((word, i) => (
                word.includes('60K+') || 
                word.includes('8,500+') ||
                word.includes('30%') ? (
                  <Highlight key={i}>{word} </Highlight>
                ) : (
                  word + ' '
                )
              ))}
            </CardText>
          </Card>
        ))}
      </CardsContainer>
    </SourcingSection>
  );
};

export default Sourcing;
