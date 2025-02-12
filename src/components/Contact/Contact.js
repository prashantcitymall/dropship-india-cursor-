import React, { useState } from 'react';
import { Box, TextField, Button } from '@mui/material';
import styled, { keyframes } from 'styled-components';

const gradientFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(82, 157, 255, 0.3), 0 0 10px rgba(82, 157, 255, 0.3); }
  50% { box-shadow: 0 0 10px rgba(82, 157, 255, 0.5), 0 0 20px rgba(82, 157, 255, 0.5); }
  100% { box-shadow: 0 0 5px rgba(82, 157, 255, 0.3), 0 0 10px rgba(82, 157, 255, 0.3); }
`;

const ContactWrapper = styled.section`
  min-height: 100vh;
  padding: 60px 0;
  position: relative;
  margin-top: -7%;
  z-index: 2;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 16px;
  }
`;

const ContactContainer = styled.div`
  width: 100%;
  max-width: 1200px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 40px;
  margin: 0 auto;
  
  @media (max-width: 1024px) {
    max-width: 90%;
    gap: 30px;
  }
  
  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const GlassCard = styled.div`
  background: rgba(255, 255, 255, 0.1);
  backdrop-filter: blur(10px);
  border-radius: 30px;
  border: 1px solid rgba(255, 255, 255, 0.2);
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  padding: 40px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 30px;
  }

  @media (max-width: 768px) {
    padding: 24px;
  }

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      120deg,
      transparent,
      rgba(255, 255, 255, 0.1),
      transparent
    );
    transition: 0.8s;
  }

  &:hover {
    transform: translateY(-5px);
    border-color: rgba(76, 175, 80, 0.2);
    box-shadow: 
      0 14px 41px rgba(0, 0, 0, 0.1),
      0 0 18px rgba(76, 175, 80, 0.2),
      0 0 36px rgba(76, 175, 80, 0.1);

    &::before {
      left: 100%;
    }
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  margin-bottom: 30px;
  color: #333;
  position: relative;
  display: inline-block;

  @media (max-width: 768px) {
    font-size: 1.75rem;
    margin-bottom: 24px;
  }

  &::after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 0;
    width: 60px;
    height: 3px;
    background: #4CAF50;
  }
`;

const ContactInfo = styled.div`
  display: flex;
  flex-direction: column;
  gap: 30px;

  @media (max-width: 768px) {
    gap: 20px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  flex-direction: column;
  gap: 8px;
  transition: all 0.3s ease;
  
  &:hover {
    transform: translateX(10px);
  }

  @media (max-width: 768px) {
    gap: 6px;
  }
`;

const InfoLabel = styled.span`
  color: #666;
  font-size: 0.9rem;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 768px) {
    font-size: 0.85rem;
  }
`;

const InfoText = styled.span`
  color: #333;
  font-size: 1.1rem;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

const StyledTextField = styled(TextField)`
  margin-bottom: 20px;
  width: 100%;
  
  .MuiOutlinedInput-root {
    height: ${props => props.multiline ? 'auto' : '55px'};
    background: rgba(255, 255, 255, 0.1);
    border-radius: 15px;
    transition: all 0.3s ease;
    
    @media (max-width: 768px) {
      height: ${props => props.multiline ? 'auto' : '50px'};
    }
    
    &:hover {
      background: rgba(255, 255, 255, 0.2);
    }
    
    &.Mui-focused {
      background: rgba(255, 255, 255, 0.15);
    }
    
    fieldset {
      border: 1px solid rgba(76, 175, 80, 0.2);
      transition: all 0.3s ease;
    }
    
    &:hover fieldset {
      border-color: rgba(76, 175, 80, 0.3);
    }
    
    &.Mui-focused fieldset {
      border-color: #4CAF50;
      border-width: 2px;
    }
  }
  
  .MuiInputLabel-root {
    color: #666;
    font-size: 1rem;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
    }
    
    &.Mui-focused {
      color: #4CAF50;
    }
  }
  
  input, textarea {
    color: #333;
    font-size: 1rem;
    padding: 15px;
    
    @media (max-width: 768px) {
      font-size: 0.9rem;
      padding: 12px;
    }
    
    &::placeholder {
      color: rgba(0, 0, 0, 0.5);
    }
  }
`;

const SubmitButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #4CAF50 0%, #45a049 100%);
    color: white;
    padding: 15px 40px;
    font-size: 1rem;
    border-radius: 30px;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    
    @media (max-width: 768px) {
      padding: 12px 30px;
      font-size: 0.95rem;
    }
    
    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        120deg,
        transparent,
        rgba(255, 255, 255, 0.6),
        transparent
      );
      transition: 0.6s;
    }
    
    &:hover {
      transform: translateY(-3px);
      background: linear-gradient(135deg, #45a049 0%, #4CAF50 100%);
      box-shadow: 
        0 14px 41px rgba(0, 0, 0, 0.1),
        0 0 18px rgba(76, 175, 80, 0.2),
        0 0 36px rgba(76, 175, 80, 0.1);

      &::before {
        left: 100%;
      }
    }
    
    &:active {
      transform: translateY(-1px);
    }
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phoneNumber: '',
    message: ''
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission
    console.log(formData);
  };

  return (
    <ContactWrapper>
      <ContactContainer>
        <GlassCard>
          <Title>Contact Us</Title>
          <ContactInfo>
            <InfoItem>
              <InfoLabel>Phone</InfoLabel>
              <InfoText>+91 9643532726, +91 7428229339</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Email</InfoLabel>
              <InfoText>support@dropshipindia.live</InfoText>
            </InfoItem>
            <InfoItem>
              <InfoLabel>Instagram</InfoLabel>
              <InfoText>@dropshipindia.live</InfoText>
            </InfoItem>
          </ContactInfo>
        </GlassCard>

        <GlassCard>
          <Title>Send Us A Message</Title>
          <form onSubmit={handleSubmit}>
            <Box sx={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 2, mb: 2 }}>
              <StyledTextField
                name="fullName"
                label="Full Name"
                variant="outlined"
                value={formData.fullName}
                onChange={handleChange}
                required
              />
              <StyledTextField
                name="email"
                label="Email"
                variant="outlined"
                value={formData.email}
                onChange={handleChange}
                required
              />
            </Box>
            <StyledTextField
              name="phoneNumber"
              label="Phone Number"
              variant="outlined"
              value={formData.phoneNumber}
              onChange={handleChange}
              required
              fullWidth
              sx={{ mb: 3 }}
            />
            <Box sx={{ mb: 3 }} />
            <StyledTextField
              name="message"
              label="Message"
              variant="outlined"
              multiline
              rows={4}
              value={formData.message}
              onChange={handleChange}
              required
              fullWidth
              sx={{ mb: 3 }}
            />
            <SubmitButton type="submit" variant="contained" fullWidth>
              Send Message
            </SubmitButton>
          </form>
        </GlassCard>
      </ContactContainer>
    </ContactWrapper>
  );
};

export default Contact;
