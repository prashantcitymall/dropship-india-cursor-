import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar/Navbar';
import Hero from './components/Hero/Hero';
import Products from './components/Products/Products';
import Shipping from './components/Shipping/Shipping';
import Sourcing from './components/Sourcing/Sourcing';
import Contact from './components/Contact/Contact';
import Footer from './components/Footer/Footer';
import About from './pages/About';
import AutoCarousel from './components/AutoCarousel/AutoCarousel';
import FeaturedCard from './components/FeaturedCard/FeaturedCard';
import FeatureTiles from './components/FeatureTiles/FeatureTiles';
import Personnel from './components/Personnel/Personnel';
import Resources from './components/Resources/Resources';
import Graphs from './components/Graphs/Graphs';
import FeatureCards from './components/FeatureCards/FeatureCards';
import WorkflowCard from './components/WorkflowCard/WorkflowCard';
import styled from 'styled-components';
import './App.css';

const HomePage = styled.div`
  background: linear-gradient(135deg, #e6cdcd 0%, #ffffff 100%);
  width: 100%;
  position: relative;
  overflow-x: hidden;
  overflow-y: auto;
  scroll-behavior: smooth;
  padding-top: 0;

  .home-section {
    background: transparent !important;
  }

  & > * {
    background: transparent !important;
  }
`;

const HomeContent = styled.div`
  position: relative;
  z-index: 1;
  background: transparent;
  display: flex;
  flex-direction: column;
  gap: 0;
  margin: 0 auto;
  max-width: 1400px;
  padding: 0;
`;

const BaseSection = styled.section`
  background: transparent;
  position: relative;
  width: 100%;
  padding: 70px 0;
  margin-top: -25%;
  z-index: 1;

  &:first-child {
    margin-top: 0;
    padding-top: 40px;
  }

  &:after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: 
      radial-gradient(circle at 20% 20%, rgba(0, 245, 160, 0.05), transparent 25%),
      radial-gradient(circle at 80% 80%, rgba(0, 217, 245, 0.05), transparent 25%);
    pointer-events: none;
    z-index: -1;
  }

  @media (max-width: 1024px) {
    padding: 60px 0;
    margin-top: -35%;
  }

  @media (max-width: 768px) {
    padding: 40px 0;
    margin-top: -45%;
  }
`;

const ShiftedSection = styled(BaseSection)`
  margin-top: -8%;

  @media (max-width: 1024px) {
    margin-top: -18%;
  }

  @media (max-width: 768px) {
    margin-top: -28%;
  }
`;

const WorkflowSection = styled(BaseSection)``;

const ShippingSection = styled(BaseSection)``;

const SourcingSection = styled(BaseSection)``;

const RegularSection = styled(BaseSection)``;

const AnalyticsSection = styled(BaseSection)`
  margin-top: -20%;

  @media (max-width: 1024px) {
    margin-top: -30%;
  }

  @media (max-width: 768px) {
    margin-top: -40%;
  }
`;

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <HomePage>
              <HomeContent>
                <RegularSection className="home-section">
                  <Hero />
                </RegularSection>
                <RegularSection>
                  <FeaturedCard />
                </RegularSection>
                <RegularSection>
                  <FeatureTiles />
                </RegularSection>
                <RegularSection>
                  <FeatureCards />
                </RegularSection>
                <ShiftedSection className="home-section">
                  <Personnel />
                </ShiftedSection>
                <WorkflowSection className="home-section">
                  <WorkflowCard />
                </WorkflowSection>
                <SourcingSection className="home-section">
                  <Sourcing />
                </SourcingSection>
                <ShippingSection className="home-section">
                  <Shipping />
                </ShippingSection>
                <RegularSection style={{ marginTop: '-57%' }}>
                  <AutoCarousel />
                </RegularSection>
                <AnalyticsSection className="home-section">
                  <Graphs />
                </AnalyticsSection>
                <RegularSection className="home-section">
                  <Contact />
                </RegularSection>
              </HomeContent>
              <Footer />
            </HomePage>
          } />
          <Route path="/products" element={
            <div style={{ background: 'none' }}>
              <Products />
            </div>
          } />
          <Route path="/about" element={<About />} />
          <Route path="/graphs" element={<Graphs />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/resources" element={<Resources />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
