import React, { useState } from 'react';
import { AppBar, Toolbar, Button, Container, IconButton, Drawer, List, ListItem } from '@mui/material';
import { Link, useLocation } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';

const glowAnimation = keyframes`
  0% { box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1); }
  50% { box-shadow: 0 0 10px rgba(0, 0, 0, 0.2), 0 0 20px rgba(0, 0, 0, 0.2); }
  100% { box-shadow: 0 0 5px rgba(0, 0, 0, 0.1), 0 0 10px rgba(0, 0, 0, 0.1); }
`;

const slideAnimation = keyframes`
  0% { transform: scaleX(0); }
  100% { transform: scaleX(1); }
`;

const neonGlow = keyframes`
  0% { box-shadow: 0 0 5px rgba(82, 157, 255, 0.3), 0 0 10px rgba(82, 157, 255, 0.3), 0 0 15px rgba(82, 157, 255, 0.3); }
  50% { box-shadow: 0 0 10px rgba(82, 157, 255, 0.5), 0 0 20px rgba(82, 157, 255, 0.5), 0 0 25px rgba(82, 157, 255, 0.5); }
  100% { box-shadow: 0 0 5px rgba(82, 157, 255, 0.3), 0 0 10px rgba(82, 157, 255, 0.3), 0 0 15px rgba(82, 157, 255, 0.3); }
`;

const pulseGlow = keyframes`
  0% { box-shadow: 0 0 0 0 rgba(139, 195, 74, 0.4); }
  70% { box-shadow: 0 0 0 10px rgba(139, 195, 74, 0); }
  100% { box-shadow: 0 0 0 0 rgba(139, 195, 74, 0); }
`;

const borderFlow = keyframes`
  0% { background-position: 0% 50%; }
  50% { background-position: 100% 50%; }
  100% { background-position: 0% 50%; }
`;

const HeaderWrapper = styled.header`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.1);
`;

const StyledToolbar = styled(Toolbar)`
  && {
    display: flex;
    justify-content: space-between;
    padding: 0 24px;
    height: 80px;
    
    @media (max-width: 1024px) {
      padding: 0 16px;
      height: 70px;
    }
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  padding: 8px 0;
  margin-left: -3%;

  @media (max-width: 1024px) {
    margin-left: 0;
  }

  @media (max-width: 768px) {
    padding: 4px 0;
  }
`;

const Logo = styled.img`
  height: 63px;
  width: auto;
  cursor: pointer;
  transition: transform 0.3s ease;

  &:hover {
    transform: scale(1.05);
  }

  @media (max-width: 1024px) {
    height: 51px;
  }
`;

const StyledAppBar = styled(AppBar)`
  background: white !important;
  backdrop-filter: blur(8px);
`;

const NavContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 20px;
  margin-left: 30%;

  @media (max-width: 1024px) {
    display: none;
  }
`;

const MobileMenuButton = styled(IconButton)`
  && {
    display: none;
    margin-left: auto;
    color: #1a2b6d;

    @media (max-width: 1024px) {
      display: flex;
    }
  }
`;

const StyledDrawer = styled(Drawer)`
  .MuiDrawer-paper {
    width: 250px;
    background: white;
    padding: 20px;
  }
`;

const DrawerList = styled(List)`
  && {
    margin-top: 20px;
  }
`;

const HomeButton = styled(Button)`
  && {
    color: #E0F2F1;
    text-transform: none;
    font-size: 1.1rem;
    font-weight: 600;
    padding: 12px 32px;
    border-radius: 20px;
    transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275);
    position: relative;
    overflow: hidden;
    background: linear-gradient(135deg, rgba(33, 150, 243, 0.1), rgba(139, 195, 74, 0.1));
    backdrop-filter: blur(10px);
    border: none;
    letter-spacing: 0.5px;
    
    &::before {
      content: '';
      position: absolute;
      inset: 0;
      border-radius: 20px;
      padding: 2px;
      background: linear-gradient(300deg, #2196F3, #8BC34A, #2196F3);
      background-size: 200% auto;
      animation: ${borderFlow} 3s linear infinite;
      -webkit-mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      mask: 
        linear-gradient(#fff 0 0) content-box, 
        linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    &::after {
      content: '';
      position: absolute;
      inset: 0;
      background: linear-gradient(135deg, #2196F3, #8BC34A);
      opacity: 0;
      transition: opacity 0.4s ease;
      border-radius: 20px;
      z-index: -1;
    }

    span {
      position: relative;
      z-index: 1;
      background: linear-gradient(135deg, #2196F3, #8BC34A);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
      transition: all 0.4s ease;
    }

    &:hover {
      transform: translateY(-2px) scale(1.02);
      background: rgba(33, 150, 243, 0.15);
      animation: ${pulseGlow} 1.5s infinite;

      &::after {
        opacity: 0.1;
      }

      span {
        background: linear-gradient(135deg, #000000, #333333);
        -webkit-background-clip: text;
        -webkit-text-fill-color: transparent;
        transform: scale(1.05);
      }
    }

    &:active {
      transform: translateY(1px) scale(0.98);
    }

    @media (max-width: 1200px) {
      padding: 10px 24px;
      font-size: 1rem;
    }
  }
`;

const StyledButton = styled(Button)`
  && {
    color: ${props => props.active ? '#8BC34A' : 'black'};
    text-transform: none;
    font-size: 1rem;
    padding: 10px 24px;
    border-radius: 12px;
    transition: all 0.3s ease;
    position: relative;
    overflow: hidden;
    background: ${props => props.active ? 'rgba(139, 195, 74, 0.1)' : 'rgba(255, 255, 255, 0.1)'};
    backdrop-filter: blur(10px);
    border: 1px solid ${props => props.active ? '#8BC34A' : 'rgba(0, 0, 0, 0.1)'};

    @media (max-width: 1200px) {
      padding: 8px 20px;
      font-size: 0.95rem;
    }

    &::before {
      content: '';
      position: absolute;
      bottom: 0;
      left: 0;
      width: 100%;
      height: 2px;
      background: linear-gradient(90deg, transparent, ${props => props.active ? '#8BC34A' : 'rgba(0, 0, 0, 0.2)'}, transparent);
      transform: scaleX(${props => props.active ? '1' : '0'});
      transform-origin: left;
      transition: transform 0.3s ease;
    }

    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: -100%;
      width: 100%;
      height: 100%;
      background: linear-gradient(
        90deg,
        transparent,
        rgba(139, 195, 74, 0.2),
        transparent
      );
      transition: 0.5s;
    }

    &:hover {
      background: ${props => props.active ? 'rgba(139, 195, 74, 0.15)' : 'rgba(255, 255, 255, 0.2)'};
      transform: translateY(-2px);
      animation: ${glowAnimation} 3s infinite;

      &::before {
        transform: scaleX(1);
        animation: ${slideAnimation} 0.3s ease forwards;
      }

      &::after {
        left: 100%;
      }
    }
  }
`;

const DrawerItem = styled(ListItem)`
  && {
    padding: 12px;
    margin-bottom: 8px;
    border-radius: 12px;
    transition: all 0.3s ease;
    color: ${props => props.active ? '#8BC34A' : 'inherit'};
    background: ${props => props.active ? 'rgba(139, 195, 74, 0.1)' : 'transparent'};
    
    &:hover {
      background: ${props => props.active ? 'rgba(139, 195, 74, 0.15)' : 'rgba(82, 157, 255, 0.1)'};
    }
  }
`;

const AuthButton = styled(Button)`
  && {
    background: transparent;
    color: #1a2b6d;
    border: 2px solid transparent;
    padding: 10px 24px;
    font-size: 1rem;
    border-radius: 30px;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 0.5px;
    position: relative;
    overflow: hidden;
    transition: all 0.4s ease;

    @media (max-width: 1200px) {
      padding: 8px 20px;
      font-size: 0.95rem;
    }

    &::before {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      border-radius: 30px;
      padding: 2px;
      background: linear-gradient(135deg, #1a2b6d, #529dff);
      -webkit-mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      mask: linear-gradient(#fff 0 0) content-box, linear-gradient(#fff 0 0);
      -webkit-mask-composite: xor;
      mask-composite: exclude;
    }

    &:hover {
      color: #529dff;
      transform: translateY(-2px);
      animation: ${neonGlow} 2s infinite;
    }
  }
`;

const SignUpButton = styled(Button)`
  && {
    background: linear-gradient(135deg, #1a2b6d 0%, #529dff 100%);
    color: white;
    border: none;
    padding: 10px 24px;
    font-size: 1rem;
    border-radius: 30px;
    text-transform: capitalize;
    font-weight: 600;
    letter-spacing: 0.5px;
    transition: all 0.4s ease;
    position: relative;
    overflow: hidden;

    @media (max-width: 1200px) {
      padding: 8px 20px;
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
      background: linear-gradient(135deg, #529dff 0%, #1a2b6d 100%);
      transform: translateY(-2px);
      animation: ${neonGlow} 2s infinite;

      &::before {
        left: 100%;
      }
    }
  }
`;

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const isActive = (path) => {
    return location.pathname === path;
  };

  const handleDrawerToggle = () => {
    setIsOpen(!isOpen);
  };

  const menuItems = [
    { label: 'Home', path: '/' },
  ];

  return (
    <HeaderWrapper>
      <StyledAppBar position="static">
        <Container maxWidth="xl">
          <StyledToolbar>
            <LogoContainer>
              <Link to="/">
                <Logo src="/images/dropship logo.png" alt="Dropship India Logo" />
              </Link>
            </LogoContainer>
            <NavContainer>
              <HomeButton
                component={Link}
                to="/"
                active={isActive('/')}
              >
                <span>Home</span>
              </HomeButton>
              <AuthButton
                onClick={() => window.open('https://dropshipindia.live/', '_blank')}
              >
                Login
              </AuthButton>
              <SignUpButton
                onClick={() => window.open('https://dropshipindia.live/', '_blank')}
              >
                Sign Up
              </SignUpButton>
            </NavContainer>
            <MobileMenuButton
              aria-label="open drawer"
              edge="end"
              onClick={handleDrawerToggle}
            >
              <MenuIcon />
            </MobileMenuButton>
          </StyledToolbar>
        </Container>
      </StyledAppBar>

      <StyledDrawer
        anchor="right"
        open={isOpen}
        onClose={handleDrawerToggle}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <DrawerList>
          {menuItems.map((item, index) => (
            <DrawerItem 
              key={index} 
              button 
              component={Link} 
              to={item.path}
              onClick={handleDrawerToggle}
              active={isActive(item.path)}
            >
              {item.label}
            </DrawerItem>
          ))}
          <DrawerItem button onClick={() => {
            window.open('https://dropshipindia.live/', '_blank');
            handleDrawerToggle();
          }}>
            Login
          </DrawerItem>
          <DrawerItem button onClick={() => {
            window.open('https://dropshipindia.live/', '_blank');
            handleDrawerToggle();
          }}>
            Sign Up
          </DrawerItem>
        </DrawerList>
      </StyledDrawer>
    </HeaderWrapper>
  );
};

export default Navbar;
