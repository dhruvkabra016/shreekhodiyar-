import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <motion.nav 
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        right: 0,
        zIndex: 100,
        padding: '20px 0',
        transition: 'all 0.3s ease',
        background: scrolled ? 'rgba(10, 17, 40, 0.9)' : 'transparent',
        backdropFilter: scrolled ? 'blur(10px)' : 'none',
        borderBottom: scrolled ? '1px solid rgba(212, 175, 119, 0.2)' : 'none'
      }}
    >
      <div className="container flex-between">
        <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
          <div className="text-gold" style={{ fontWeight: 900, fontSize: '24px', letterSpacing: '1px' }}>
            SHREE KHODIYAR
          </div>
        </div>

        <div className="desktop-menu" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <a href="#home" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Home</a>
          <a href="#destinations" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Destinations</a>
          <a href="#fleet" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Fleet</a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-gold)', fontWeight: 700 }}>
            <Phone size={20} />
            7383304550
          </div>
          
          <button 
            className="btn-primary" 
            style={{ padding: '10px 24px' }}
            onClick={() => window.open('https://wa.me/917383304550?text=Hi!%20I%20would%20like%20to%20book%20a%20ride%20with%20Shree%20Khodiyar%20Travels.', '_blank')}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
