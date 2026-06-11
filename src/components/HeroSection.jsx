import React from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';

const HeroSection = () => {
  const navigate = useNavigate();

  return (
    <section id="home" style={{ 
      minHeight: '100vh', 
      display: 'flex', 
      alignItems: 'center',
      position: 'relative',
      overflow: 'hidden',
      paddingTop: '80px'
    }}>
      {/* Background with cinematic lighting */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'radial-gradient(circle at center, rgba(10, 17, 40, 0.4) 0%, rgba(10, 17, 40, 1) 100%)',
        zIndex: 1
      }}></div>
      
      {/* Placeholder for 3D Landscape background (CSS gradient for now) */}
      <div style={{
        position: 'absolute',
        top: 0, left: 0, right: 0, bottom: 0,
        background: 'linear-gradient(to bottom, #050814, #1a2a5e)',
        zIndex: 0
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10, display: 'flex', flexWrap: 'wrap', alignItems: 'center', justifyContent: 'space-between' }}>
        
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          style={{ flex: '1 1 500px', paddingRight: '40px' }}
        >
          <h1 className="text-gradient" style={{ fontSize: '64px', lineHeight: 1.1, marginBottom: '24px' }}>
            Experience Gujarat <br/> in Style
          </h1>
          <p style={{ fontSize: '20px', color: '#ccc', marginBottom: '40px', maxWidth: '500px', lineHeight: 1.6 }}>
            Premium travel experiences with our luxury fleet. Explore Dwarka, Somnath, and beyond with supreme comfort and zero gravity smooth rides.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', alignItems: 'center' }}>
            <button onClick={() => navigate('/book')} className="btn-primary" style={{ padding: '16px 36px', fontSize: '18px' }}>Book Now</button>
          </div>
        </motion.div>

        <motion.div 
          className="floating"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1, delay: 0.5 }}
          style={{ flex: '1 1 500px', display: 'flex', justifyContent: 'center', position: 'relative' }}
        >
          {/* Abstract 3D shape or placeholder for a 3D Car */}
          <div style={{
            width: '400px',
            height: '400px',
            background: 'linear-gradient(135deg, rgba(212, 175, 119, 0.4), rgba(128, 0, 0, 0.2))',
            borderRadius: '30% 70% 70% 30% / 30% 30% 70% 70%',
            boxShadow: '0 0 100px rgba(212, 175, 119, 0.3)',
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            border: '2px solid rgba(212, 175, 119, 0.5)'
          }}>
             <h2 className="text-gold" style={{ opacity: 0.5 }}>Premium Vehicle</h2>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
