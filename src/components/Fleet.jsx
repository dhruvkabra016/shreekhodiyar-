import React, { useContext } from 'react';
import { motion } from 'framer-motion';
import { DataContext } from '../context/DataContext';

const Fleet = () => {
  const { fleet } = useContext(DataContext);

  return (
    <section id="cars" style={{ padding: '100px 0', position: 'relative', overflow: 'hidden' }}>
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
          <h2 className="text-gradient" style={{ fontSize: '48px', marginBottom: '16px' }}>Our Premium Cars</h2>
          <p style={{ color: '#ccc', fontSize: '18px', maxWidth: '600px', margin: '0 auto' }}>
            Travel in ultimate comfort with our meticulously maintained luxury vehicles.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {fleet.map((car, index) => (
            <motion.div
              key={car.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'white',
                borderRadius: '16px',
                overflow: 'hidden',
                boxShadow: '0 10px 30px rgba(0,0,0,0.15)',
                color: '#333',
                display: 'flex',
                flexDirection: 'column'
              }}
            >
              {/* Image Container with Badge */}
              <div style={{ position: 'relative', background: '#f5f5f5', padding: '20px 0', borderBottom: '1px solid #eee' }}>
                <img 
                  src={car.img} 
                  alt={car.name} 
                  style={{ width: '100%', height: '180px', objectFit: 'contain', filter: 'drop-shadow(0 10px 10px rgba(0,0,0,0.2))' }} 
                />
                <div style={{
                  position: 'absolute',
                  top: '20px',
                  right: '0',
                  background: '#FFD700', // Yellow badge
                  color: '#000',
                  padding: '8px 24px',
                  fontWeight: 'bold',
                  fontSize: '18px',
                  borderTopLeftRadius: '8px',
                  borderBottomLeftRadius: '8px',
                  boxShadow: '-4px 4px 10px rgba(0,0,0,0.1)'
                }}>
                  ₹{car.price}/- KM
                </div>
              </div>

              {/* Card Content */}
              <div style={{ padding: '24px', flex: 1, display: 'flex', flexDirection: 'column' }}>
                <h3 style={{ fontSize: '24px', fontWeight: '800', textAlign: 'center', marginBottom: '24px', textTransform: 'uppercase' }}>
                  {car.name}
                </h3>
                
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px', marginBottom: '24px', flex: 1 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '15px' }}>
                    <span style={{ textTransform: 'uppercase' }}>{car.name}</span>
                    <span>₹{car.price}/- KM</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '15px' }}>
                    <span>SEATS:</span>
                    <span style={{ fontWeight: '500', color: '#333' }}>{car.capacity || '4+1'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '15px' }}>
                    <span>BAG:</span>
                    <span style={{ fontWeight: '500', color: '#333' }}>{car.bags || '3'}</span>
                  </div>
                  <div style={{ display: 'flex', justifyContent: 'space-between', color: '#666', fontSize: '15px' }}>
                    <span>PASSENGERS:</span>
                    <span style={{ fontWeight: '500', color: '#333', textTransform: 'uppercase' }}>{car.passengers || '4 PERSON'}</span>
                  </div>
                  <div style={{ color: '#666', fontSize: '15px', marginTop: '8px' }}>
                    GPS ENABLED VEHICLES
                  </div>
                </div>

                <button 
                  style={{ 
                    width: '100%', 
                    padding: '16px', 
                    background: '#FFD700', 
                    border: 'none', 
                    borderRadius: '4px',
                    color: '#000',
                    fontWeight: '800',
                    fontSize: '16px',
                    cursor: 'pointer',
                    transition: 'background 0.3s'
                  }}
                  onMouseEnter={(e) => e.target.style.background = '#e6c200'}
                  onMouseLeave={(e) => e.target.style.background = '#FFD700'}
                  onClick={() => {
                    const message = encodeURIComponent(`Hi! I am interested in booking the ${car.name}.`);
                    window.open(`https://wa.me/919898767619?text=${message}`, '_blank');
                  }}
                >
                  BOOK TAXI NOW
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
