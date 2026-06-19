import React from 'react';
import Navbar from '../../components/Navbar';
import HeroSection from '../../components/HeroSection';
import Destinations from '../../components/Destinations';
import Fleet from '../../components/Fleet';
import Footer from '../../components/Footer';
import RoutesTable from '../../components/RoutesTable';
import TourPackages from '../../components/TourPackages';
import FloatingContact from '../../components/FloatingContact';

const Home = () => {
  return (
    <div style={{ background: 'var(--color-bg-navy)', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      <HeroSection />
      <RoutesTable />
      <TourPackages />
      <Destinations />
      <Fleet />
      <Footer />
      <FloatingContact />
    </div>
  );
};

export default Home;
