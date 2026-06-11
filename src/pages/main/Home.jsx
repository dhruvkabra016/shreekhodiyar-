import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Destinations from '../../components/Destinations';
import Fleet from '../../components/Fleet';
import Footer from '../../components/Footer';

const Home = () => {
  return (
    <div style={{ background: 'var(--color-bg-navy)', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <HeroSection />
      <Destinations />
      <Fleet />
      <Footer />
    </div>
  );
};

export default Home;
