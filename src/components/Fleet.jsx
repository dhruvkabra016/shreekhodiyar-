import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';

const Fleet = () => {
  const { fleet } = useContext(DataContext);

  return (
    <section id="fleet" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
      <div style={{
        position: 'absolute',
        top: '50%', left: '50%',
        transform: 'translate(-50%, -50%)',
        width: '60vw', height: '60vw',
        background: 'radial-gradient(circle, rgba(212, 175, 119, 0.05) 0%, transparent 70%)',
        zIndex: 0,
        pointerEvents: 'none'
      }}></div>

      <div className="container" style={{ position: 'relative', zIndex: 10 }}>
        <div style={{ textAlign: 'center', marginBottom: '80px' }}>
          <h2 className="text-gradient" style={{ fontSize: '48px', marginBottom: '16px' }}>Our Premium Fleet</h2>
          <p style={{ color: '#ccc', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Travel in ultimate comfort with our meticulously maintained luxury vehicles.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {fleet.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.2 }}
              className="hover-3d"
              style={{
                background: 'linear-gradient(145deg, rgba(20, 25, 50, 0.8), rgba(10, 17, 40, 0.9))',
                borderRadius: '24px',
                padding: '30px',
                border: '1px solid var(--color-glass-border)',
                boxShadow: '0 15px 35px rgba(0,0,0,0.4)',
                textAlign: 'center'
              }}
            >
              <div className="floating" style={{ animationDelay: `${index * 1.5}s`, marginBottom: '30px' }}>
                <img src={car.img} alt={car.name} style={{ width: '100%', height: '200px', objectFit: 'cover', borderRadius: '12px', filter: 'drop-shadow(0 20px 20px rgba(0,0,0,0.5))' }} />
              </div>
              <h3 className="text-gold" style={{ fontSize: '26px', marginBottom: '8px' }}>{car.name}</h3>
              <p style={{ color: '#aaa', fontSize: '16px', marginBottom: '16px' }}>{car.type} • {car.capacity} Seats</p>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderTop: '1px solid rgba(255,255,255,0.1)', paddingTop: '20px' }}>
                <span style={{ fontSize: '22px', fontWeight: 'bold' }}>₹{car.price}/day</span>
                <button 
                  className="btn-primary" 
                  style={{ padding: '10px 20px', fontSize: '14px' }}
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I am interested in booking the ${car.name}.`);
                    window.open(`https://wa.me/917383304550?text=${message}`, '_blank');
                  }}
                >
                  Book Now
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fleet;
