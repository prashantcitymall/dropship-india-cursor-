import React from 'react';
import styled from 'styled-components';
import workflowImage from './image.png';

const WorkflowContainer = styled.section`
  padding: 0;
  width: 100%;
  position: relative;
  z-index: 1;
  background: transparent;
  margin: -45% 0 0 0;
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

const ImageContainer = styled.div`
  max-width: 1400px;
  margin: 0 auto;
  padding: 0 20px;
  
  img {
    width: 100%;
    height: auto;
    object-fit: contain;
    border-radius: 20px;
  }
`;

const WorkflowCard = () => {
  return (
    <WorkflowContainer>
      <Title>WORKFLOW</Title>
      <ImageContainer>
        <img 
          src={workflowImage}
          alt="Dropship India Workflow" 
          loading="lazy"
        />
      </ImageContainer>
    </WorkflowContainer>
  );
};

export default WorkflowCard; 