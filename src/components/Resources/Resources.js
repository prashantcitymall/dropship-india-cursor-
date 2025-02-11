import React from 'react';
import styled from 'styled-components';
import Sourcing from '../Sourcing/Sourcing';
import Shipping from '../Shipping/Shipping';
import Personnel from '../Personnel/Personnel';

const ResourcesContainer = styled.div`
  padding-top: 80px;
  min-height: 100vh;
  background: linear-gradient(135deg, #f5f7fa 0%, #e4e8eb 100%);
`;

const SectionContainer = styled.div`
  margin-bottom: 40px;
`;

const Resources = () => {
  return (
    <ResourcesContainer>
      <SectionContainer>
        <Personnel />
      </SectionContainer>
      <SectionContainer>
        <Sourcing />
      </SectionContainer>
      <SectionContainer>
        <Shipping />
      </SectionContainer>
    </ResourcesContainer>
  );
};

export default Resources;
