import React from 'react';
import { Container, Grid, Box, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const FooterWrapper = styled.footer`
  position: relative;
  background: transparent;
  color: #333;
  padding: 70px 0 40px;
  overflow: hidden;

  @media (max-width: 960px) {
    padding: 60px 0 30px;
  }

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 2px;
    background: linear-gradient(90deg, #4CAF50, #45a049);
    opacity: 0.5;
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

const GlowingCard = styled.div`
  position: relative;
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 24px;
  padding: 20px;
  margin-bottom: 12px;
  transition: transform 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);

  @media (max-width: 960px) {
    padding: 15px;
    margin-bottom: 8px;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(76, 175, 80, 0.2);
    box-shadow: 
      0 14px 41px rgba(0, 0, 0, 0.1),
      0 0 18px rgba(76, 175, 80, 0.2),
      0 0 36px rgba(76, 175, 80, 0.1);
  }
`;

const FooterTitle = styled.h3`
  font-size: 1.2rem;
  font-weight: 600;
  margin-bottom: 16px;
  color: #333;
  position: relative;
  display: inline-block;
  padding-bottom: 6px;

  &:after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    width: 100%;
    height: 2px;
    background: #4CAF50;
  }
`;

const FooterLink = styled(Link)`
  color: #666;
  text-decoration: none;
  display: block;
  margin-bottom: 16px;
  transition: all 0.3s ease;
  position: relative;
  padding-left: 0;
  width: fit-content;

  &:before {
    content: '→';
    position: absolute;
    left: -20px;
    opacity: 0;
    transition: all 0.3s ease;
  }

  &:hover {
    color: #4CAF50;
    padding-left: 20px;
    
    &:before {
      opacity: 1;
      left: 0;
    }
  }
`;

const ClickableText = styled(Typography)`
  cursor: pointer;
  transition: all 0.3s ease;
  position: relative;
  display: inline-block;
  color: #666 !important;

  &:after {
    content: '';
    position: absolute;
    bottom: -2px;
    left: 0;
    width: 0;
    height: 1px;
    background: #4CAF50;
    transition: width 0.3s ease;
  }

  &:hover {
    color: #4CAF50 !important;
    transform: translateX(5px);

    &:after {
      width: 100%;
    }
  }
`;

const BottomBar = styled.div`
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  text-align: center;
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: -1px;
    left: 50%;
    transform: translateX(-50%);
    width: 100px;
    height: 2px;
    background: linear-gradient(90deg, transparent, #4CAF50, #45a049, transparent);
  }
`;

const HeartIcon = styled.span`
  display: inline-block;
  color: #FF0066;
  margin: 0 5px;
`;

const GridContainer = styled(Grid)`
  margin-top: -20px;
`;

const CitymallLogo = styled.div`
  text-align: center;
  margin: 0;
  transform: translateX(-20%);
  position: relative;
  top: 20px;
  
  img {
    height: 153px;
    opacity: 1;
    clip-path: inset(7% 0 0 0);
    object-fit: cover;
    object-position: center bottom;

    @media (max-width: 768px) {
      height: 128px;
    }
  }

  @media (max-width: 768px) {
    transform: translateX(-10%);
    top: 15px;
  }
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <Container maxWidth="lg">
        <GridContainer container spacing={3}>
          <Grid item xs={12} md={3}>
            <GlowingCard>
              <FooterTitle>PRODUCTS</FooterTitle>
              <FooterLink to="/directory">Directory</FooterLink>
              <FooterLink to="/dropship">Dropship</FooterLink>
              <FooterLink to="/educate">Educate</FooterLink>
              <FooterLink to="/insights">Insights</FooterLink>
              <FooterLink to="/wholesale">Wholesale</FooterLink>
            </GlowingCard>
          </Grid>

          <Grid item xs={12} md={3}>
            <GlowingCard>
              <FooterTitle>USE CASES</FooterTitle>
              <FooterLink to="/start-business">Start your online business</FooterLink>
              <FooterLink to="/find-products">Find winning products</FooterLink>
              <FooterLink to="/connect-suppliers">Connect with suppliers</FooterLink>
              <FooterLink to="/get-traffic">Get traffic and conversions</FooterLink>
            </GlowingCard>
          </Grid>

          <Grid item xs={12} md={3}>
            <GlowingCard>
              <FooterTitle>RESOURCES</FooterTitle>
              <FooterLink to="/forum">Forum</FooterLink>
              <FooterLink to="/developer">Developer Program</FooterLink>
              <FooterLink to="/partners">Partners</FooterLink>
              <FooterLink to="/glossary">Ecommerce Glossary</FooterLink>
              <FooterLink to="/calculator">PayPal Calculator</FooterLink>
            </GlowingCard>
          </Grid>

          <Grid item xs={12} md={3}>
            <GlowingCard>
              <FooterTitle>CONTACT US</FooterTitle>
              <Box mb={1}>
                <Typography variant="h6" style={{ color: '#333', marginBottom: '4px', fontWeight: 'normal', fontSize: '1rem' }}>
                  Phone
                </Typography>
                <ClickableText variant="body1">
                  +91 9643532726, +91 7428229339
                </ClickableText>
              </Box>
              <Box mb={1}>
                <Typography variant="h6" style={{ color: '#333', marginBottom: '4px', fontWeight: 'normal', fontSize: '1rem' }}>
                  Email
                </Typography>
                <ClickableText variant="body1">
                  support@dropshipindia.live
                </ClickableText>
              </Box>
              <Box mb={1}>
                <Typography variant="h6" style={{ color: '#333', marginBottom: '4px', fontWeight: 'normal', fontSize: '1rem' }}>
                  Instagram
                </Typography>
                <ClickableText variant="body1">
                  @dropshipindia.live
                </ClickableText>
              </Box>
            </GlowingCard>
          </Grid>
        </GridContainer>

        <CitymallLogo>
          <img src="/images/citymall.png" alt="Citymall Logo" />
        </CitymallLogo>

        <BottomBar>
          <Typography variant="body2" style={{ color: '#666' }}>
            {new Date().getFullYear()} Dropship India. All rights reserved. Made with 
            <HeartIcon>❤️</HeartIcon> 
            in India
          </Typography>
        </BottomBar>
      </Container>
    </FooterWrapper>
  );
};

export default Footer;
