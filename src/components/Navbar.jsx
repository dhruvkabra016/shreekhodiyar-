import React, { useState, useEffect } from 'react';
import { Phone, Menu, X } from 'lucide-react';
import { motion } from 'framer-motion';
import { Link, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const navigate = useNavigate();

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
        <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ display: 'flex', alignItems: 'center', gap: '10px', textDecoration: 'none' }}>
          <div className="text-gold" style={{ fontWeight: 900, fontSize: '24px', letterSpacing: '1px' }}>
            SHREE KHODIYAR
          </div>
        </Link>

        <div className="desktop-menu" style={{ display: 'flex', gap: '32px', alignItems: 'center' }}>
          <Link to="/" onClick={() => window.scrollTo(0, 0)} style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Home</Link>
          <a href="/#destinations" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Destinations</a>
          <a href="/#cars" style={{ color: 'white', textDecoration: 'none', fontWeight: 600 }}>Cars</a>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--color-primary-gold)', fontWeight: 700 }}>
            <Phone size={20} />
            9898767619
          </div>
          
          <button 
            className="btn-primary" 
            style={{ padding: '10px 24px' }}
            onClick={() => navigate('/book')}
          >
            Book Now
          </button>
        </div>
      </div>
    </motion.nav>
  );
};

export default Navbar;
