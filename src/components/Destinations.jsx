import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';

const Destinations = () => {
  const { destinations } = useContext(DataContext);
  const activeDestinations = destinations.filter(d => d.status === 'Active');

  return (
    <section id="destinations" style={{ padding: '100px 0', background: 'var(--color-bg-navy)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 className="text-gradient" style={{ fontSize: '48px', marginBottom: '16px' }}>Explore Gujarat</h2>
          <p style={{ color: '#ccc', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Discover the rich heritage and culture of Gujarat with our premium travel packages.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
          {activeDestinations.map((dest, index) => (
            <motion.div
              key={dest.id}
              initial={{ opacity: 0, y: 50 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="hover-3d glass-panel"
              style={{
                borderRadius: '20px',
                overflow: 'hidden',
                background: 'rgba(255,255,255,0.02)',
                position: 'relative'
              }}
            >
              <div style={{ height: '200px', width: '100%', overflow: 'hidden' }}>
                <img src={dest.img} alt={dest.name} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'var(--transition-smooth)' }} className="dest-img" />
              </div>
              <div style={{ padding: '24px' }}>
                <h3 className="text-gold" style={{ fontSize: '24px', marginBottom: '8px' }}>{dest.name}</h3>
                <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '20px' }}>{dest.desc}</p>
                <button 
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I am interested in visiting ${dest.name}.`);
                    window.open(`https://wa.me/919898767619?text=${message}`, '_blank');
                  }}
                  style={{ background: 'transparent', border: '1px solid var(--color-primary-gold)', color: 'var(--color-primary-gold)', padding: '8px 16px', borderRadius: '20px', cursor: 'pointer', transition: 'all 0.3s' }}>
                  Book via WhatsApp
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
      <style dangerouslySetInnerHTML={{__html: `
        .hover-3d:hover .dest-img {
          transform: scale(1.1);
        }
      `}} />
    </section>
  );
};

export default Destinations;
