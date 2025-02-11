import React from 'react';
import AboutTiles from '../components/AboutTiles/AboutTiles';
import AboutAnalytics from '../components/AboutAnalytics/AboutAnalytics';
import styled from 'styled-components';
import { motion } from 'framer-motion';

const AboutContainer = styled.div`
  min-height: 100vh;
  padding: 0px 20px;
  background: #335da9;
  color: #ffffff;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const FuturisticBox = styled(motion.div)`
  max-width: 1000px;
  margin: 0 auto;
  padding: 40px;
  background: rgba(255, 255, 255, 0.05);
  border: 2px solid rgba(255, 255, 255, 0.1);
  border-radius: 20px;
  position: relative;
  backdrop-filter: blur(10px);
  box-shadow: 0 8px 32px 0 rgba(0, 0, 0, 0.1);
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
  }

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 1px;
    background: linear-gradient(90deg, 
      transparent,
      rgba(255, 255, 255, 0.3),
      transparent
    );
  }
`;

const AboutTitle = styled.h1`
  font-size: 3.2rem;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 40px;
  position: relative;
  display: inline-block;
  width: 100%;
  text-align: center;

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, 
      transparent,
      #8BC34A,
      transparent
    );
  }
`;

const AboutList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ListItem = styled.li`
  margin-bottom: 20px;
  padding: 15px;
  background: rgba(255, 255, 255, 0.03);
  border-radius: 10px;
  border-left: 3px solid #8BC34A;
  transition: transform 0.3s ease;

  &:last-child {
    margin-bottom: 0;
  }

  &:hover {
    transform: translateX(5px);
  }
`;

const Bullet = styled.span`
  color: #8BC34A;
  margin-right: 10px;
  font-size: 1.2em;
`;

const HighlightText = styled.span`
  color: #8BC34A;
  font-weight: 500;
`;

const About = () => {
  return (
    <AboutContainer>
      <FuturisticBox
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <AboutTitle>About Us</AboutTitle>
        <AboutList>
          <ListItem>
            <Bullet>•</Bullet>
            Dropship India, a <HighlightText>Citymall subsidiary</HighlightText> is India&apos;s fastest-growing dropshipping platform &amp; the smart choice for all eCommerce entrepreneurs.
          </ListItem>
          <ListItem>
            <Bullet>•</Bullet>
            Built by professionals, Dropship India currently works with <HighlightText>150+ dropshippers</HighlightText> &amp; <HighlightText>&gt;40,000 orders daily</HighlightText>.
          </ListItem>
          <ListItem>
            <Bullet>•</Bullet>
            <HighlightText>Wide range of products</HighlightText> with highest profit margins
          </ListItem>
          <ListItem>
            <Bullet>•</Bullet>
            <HighlightText>End to end order delivery</HighlightText> and fulfillment
          </ListItem>
          <ListItem>
            <Bullet>•</Bullet>
            <HighlightText>Transparency &amp; Trust</HighlightText>
          </ListItem>
        </AboutList>
      </FuturisticBox>
      <AboutTiles />
      <AboutAnalytics />
    </AboutContainer>
  );
};

export default About;
