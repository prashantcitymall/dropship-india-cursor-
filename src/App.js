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
import Cards from './pages/Cards/Cards';
import AutoCarousel from './components/AutoCarousel/AutoCarousel';
import FeaturedCard from './components/FeaturedCard/FeaturedCard';
import FeatureTiles from './components/FeatureTiles/FeatureTiles';
import Personnel from './components/Personnel/Personnel';
import Resources from './components/Resources/Resources';
import Graphs from './components/Graphs/Graphs';
import './App.css';

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <Routes>
          <Route path="/" element={
            <div className="home-page">
              <div className="home-content">
                <section className="home-section">
                  <Hero />
                </section>
                <FeaturedCard />
                <FeatureTiles />
                <section className="home-section">
                  <Personnel />
                </section>
                <section className="home-section">
                  <Sourcing />
                </section>
                <section className="home-section">
                  <Shipping />
                </section>
                <AutoCarousel />
                <section className="home-section">
                  <Graphs />
                </section>
                <section className="home-section">
                  <Contact />
                </section>
              </div>
              <Footer />
            </div>
          } />
          <Route path="/cards" element={<Cards />} />
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
