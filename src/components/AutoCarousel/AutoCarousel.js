import React from 'react';
import PropTypes from 'prop-types';
import styled, { keyframes } from 'styled-components';

const scroll = keyframes`
  0% {
    transform: translateX(0);
  }
  100% {
    transform: translateX(-50%);
  }
`;

const CarouselContainer = styled.div`
  width: 100%;
  overflow: hidden;
  position: relative;
  margin-top: -10%;
  z-index: 2;
  background: #1a237e;
  padding: 60px 0;

  @media (max-width: 1024px) {
    padding: 50px 0;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
  }

  &::before,
  &::after {
    content: '';
    position: absolute;
    top: 0;
    width: 200px;
    height: 100%;
    z-index: 2;

    @media (max-width: 1024px) {
      width: 150px;
    }

    @media (max-width: 768px) {
      width: 100px;
    }

    @media (max-width: 480px) {
      width: 60px;
    }
  }

  &::before {
    left: 0;
    background: linear-gradient(to right, #335da9, transparent);
  }

  &::after {
    right: 0;
    background: linear-gradient(to left, #335da9, transparent);
  }
`;

const CarouselTrack = styled.div`
  display: flex;
  width: fit-content;
  animation: ${scroll} 20s linear infinite;
  padding: 10px 0;

  @media (max-width: 768px) {
    animation-duration: 15s;
  }

  @media (max-width: 480px) {
    animation-duration: 12s;
  }

  &:hover {
    animation-play-state: paused;
  }
`;

const CardContainer = styled.div`
  display: flex;
  padding: 0 30px;

  @media (max-width: 768px) {
    padding: 0 20px;
  }

  @media (max-width: 480px) {
    padding: 0 15px;
  }
`;

const Card = styled.div`
  width: 220px;
  height: 120px;
  margin: 0 30px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 20px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  overflow: hidden;
  position: relative;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.1);

  @media (max-width: 1024px) {
    width: 200px;
    height: 110px;
    margin: 0 25px;
    border-radius: 16px;
  }

  @media (max-width: 768px) {
    width: 180px;
    height: 100px;
    margin: 0 20px;
    border-radius: 14px;
  }

  @media (max-width: 480px) {
    width: 150px;
    height: 85px;
    margin: 0 15px;
    border-radius: 12px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(255, 255, 255, 0.2),
      transparent
    );
    transition: 0.5s;
  }

  &:hover {
    transform: translateY(-5px) scale(1.02);
    box-shadow: 0 8px 25px rgba(0, 0, 0, 0.15);
    border-color: rgba(255, 255, 255, 0.2);

    &::before {
      left: 100%;
    }

    img {
      filter: brightness(1) contrast(1.05);
      transform: scale(1.05);
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    padding: 15px;
    filter: brightness(0.9) contrast(1.1);
    transition: all 0.3s ease;

    @media (max-width: 768px) {
      padding: 12px;
    }

    @media (max-width: 480px) {
      padding: 10px;
    }
  }
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

const AutoCarousel = ({ images = ['blue.png', 'del.png', 'ekart.png', 'express.png', 'shadow.png'] }) => {
  const duplicatedImages = [...images, ...images];

  return (
    <CarouselContainer>
      <Title>Our Shipping Partners</Title>
      <CarouselTrack>
        <CardContainer>
          {duplicatedImages.map((image, index) => (
            <Card key={index}>
              <img src={`/images/${image}`} alt={`Brand ${index + 1}`} loading="lazy" />
            </Card>
          ))}
        </CardContainer>
      </CarouselTrack>
    </CarouselContainer>
  );
};

AutoCarousel.propTypes = {
  images: PropTypes.arrayOf(PropTypes.string)
};

AutoCarousel.defaultProps = {
  images: ['blue.png', 'del.png', 'ekart.png', 'express.png', 'shadow.png']
};

export default AutoCarousel;
