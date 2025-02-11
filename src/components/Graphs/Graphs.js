import React from 'react';
import styled from '@emotion/styled';

const GraphsSection = styled.section`
  padding: 30px 0 60px;
  background: transparent;
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: -40px;
`;

const Title = styled.h2`
  font-size: 2.5rem;
  text-align: center;
  margin-bottom: 40px;
  color: #4CAF50;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const CardsContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-template-rows: repeat(2, auto);
  column-gap: 0;
  row-gap: 30px;
  justify-items: center;
  align-items: start;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 30px;
  }
`;

const ImageWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 2px;
  overflow: hidden;

  &:nth-of-type(3),
  &:nth-of-type(4) {
    margin-top: -20px;
  }

  @media (max-width: 768px) {
    &:nth-of-type(3),
    &:nth-of-type(4) {
      margin-top: 0;
    }
  }
`;

const GraphImage = styled.img`
  width: auto;
  height: auto;
  max-width: 100%;
  object-fit: contain;
  border-radius: 15px;
  cursor: pointer;
  transition: transform 0.5s cubic-bezier(0.165, 0.84, 0.44, 1);
  transform: scale(0.95);
  opacity: 0.9;

  &:hover {
    transform: scale(1);
    opacity: 1;
    box-shadow: 0 10px 20px rgba(0, 0, 0, 0.2);
  }
`;

const Graphs = () => {
  const images = ['A1.png', 'A2.png', 'A3.png', 'A4.png'];

  return (
    <GraphsSection>
      <Title>Analytics Dashboard</Title>
      <CardsContainer>
        {images.map((image, index) => (
          <ImageWrapper key={index}>
            <GraphImage 
              src={`/images/${image}`}
              alt={`Analytics ${index + 1}`}
            />
          </ImageWrapper>
        ))}
      </CardsContainer>
    </GraphsSection>
  );
};

export default Graphs;
