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
            Premium travel experiences with our luxury cars. Explore Dwarka, Somnath, and beyond with supreme comfort and zero gravity smooth rides.
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
          <div style={{
            width: '100%',
            maxWidth: '500px',
            height: '350px',
            borderRadius: '24px',
            overflow: 'hidden',
            boxShadow: '0 30px 60px rgba(0,0,0,0.6)',
            border: '2px solid rgba(212, 175, 119, 0.3)',
            position: 'relative'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop" 
              alt="Premium Luxury Car" 
              style={{ width: '100%', height: '100%', objectFit: 'cover' }}
            />
            {/* Elegant overlay gradient */}
            <div style={{
              position: 'absolute',
              top: 0, left: 0, right: 0, bottom: 0,
              background: 'linear-gradient(to top, rgba(10,17,40,0.8) 0%, transparent 50%)'
            }}></div>
          </div>
        </motion.div>
        
      </div>
    </section>
  );
};

export default HeroSection;
