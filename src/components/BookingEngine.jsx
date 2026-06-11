import React from 'react';
import { motion } from 'framer-motion';
import { MapPin, Calendar, Search } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const BookingEngine = () => {
  const navigate = useNavigate();

  return (
    <section id="booking" style={{ padding: '60px 0', marginTop: '-80px', position: 'relative', zIndex: 20 }}>
      <div className="container">
        <motion.div 
          initial={{ y: 50, opacity: 0 }}
          whileInView={{ y: 0, opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="glass-panel"
          style={{
            padding: '30px',
            background: 'rgba(20, 25, 50, 0.8)',
            border: '1px solid rgba(212, 175, 119, 0.4)',
            boxShadow: '0 20px 40px rgba(0,0,0,0.5)',
            borderRadius: '20px'
          }}
        >
          <div style={{ display: 'flex', flexWrap: 'wrap', gap: '20px', alignItems: 'center' }}>
            
            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Pickup Location</label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <MapPin size={20} style={{ color: 'var(--color-primary-gold)', marginRight: '10px' }} />
                <select style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '16px', appearance: 'none' }}>
                  <option style={{ background: '#0a1128' }}>Ahmedabad</option>
                  <option style={{ background: '#0a1128' }}>Dwarka</option>
                  <option style={{ background: '#0a1128' }}>Somnath</option>
                  <option style={{ background: '#0a1128' }}>Rajkot</option>
                  <option style={{ background: '#0a1128' }}>Bhuj</option>
                </select>
              </div>
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Drop Location</label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <MapPin size={20} style={{ color: 'var(--color-primary-gold)', marginRight: '10px' }} />
                <select style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '16px', appearance: 'none' }}>
                  <option style={{ background: '#0a1128' }}>Dwarka</option>
                  <option style={{ background: '#0a1128' }}>Somnath</option>
                  <option style={{ background: '#0a1128' }}>Ahmedabad</option>
                  <option style={{ background: '#0a1128' }}>Rajkot</option>
                  <option style={{ background: '#0a1128' }}>Bhuj</option>
                </select>
              </div>
            </div>

            <div style={{ flex: '1 1 200px' }}>
              <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Date</label>
              <div style={{ display: 'flex', alignItems: 'center', background: 'rgba(255,255,255,0.05)', borderRadius: '10px', padding: '12px', border: '1px solid rgba(255,255,255,0.1)' }}>
                <Calendar size={20} style={{ color: 'var(--color-primary-gold)', marginRight: '10px' }} />
                <input type="date" style={{ background: 'transparent', border: 'none', color: 'white', width: '100%', outline: 'none', fontSize: '16px' }} />
              </div>
            </div>

            <div style={{ flex: '0 0 auto', alignSelf: 'flex-end' }}>
              <button 
                className="btn-primary" 
                style={{ display: 'flex', alignItems: 'center', gap: '8px', padding: '16px 32px' }}
                onClick={() => navigate('/book')}
              >
                <Search size={20} />
                Search Rides
              </button>
            </div>

          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default BookingEngine;
