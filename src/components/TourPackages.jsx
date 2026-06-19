import React from 'react';

const TourPackages = () => {
  return (
    <section style={{ padding: '80px 0', background: '#f5f7fa', color: '#333' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', marginBottom: '16px' }}>
            Popular Tour Packages
          </h2>
          <p style={{ color: '#666', fontSize: '18px' }}>
            Who are in extremely love with eco friendly system.
          </p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '40px' }}>
          {/* Statue of Unity Package Card */}
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1622359409890-449e78262f3a?q=80&w=1000&auto=format&fit=crop" 
              alt="Statue of Unity" 
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Statue of Unity Cab Packages</h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
                Explore the best Statue of Unity cab packages with our Rann of Kutch Experience stunning landscapes convenient cab services for a memorable journey.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href="tel:9898767619"
                  className="btn-primary"
                  style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', background: '#ff0000', color: 'white', fontWeight: 'bold' }}
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919898767619"
                  target="_blank"
                  rel="noreferrer"
                  style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', background: '#25D366', color: 'white', fontWeight: 'bold' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
          
          {/* Somnath Package Card (Example addition) */}
          <div style={{ 
            background: 'white', 
            borderRadius: '12px', 
            overflow: 'hidden', 
            boxShadow: '0 15px 30px rgba(0,0,0,0.1)',
            transition: 'transform 0.3s ease'
          }}>
            <img 
              src="https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop" 
              alt="Somnath Temple" 
              style={{ width: '100%', height: '250px', objectFit: 'cover' }}
            />
            <div style={{ padding: '30px' }}>
              <h3 style={{ fontSize: '24px', fontWeight: '700', marginBottom: '16px' }}>Somnath & Dwarka Darshan</h3>
              <p style={{ color: '#666', lineHeight: '1.6', marginBottom: '24px' }}>
                Experience the divine aura of Somnath and Dwarka with our comfortable, safe, and reliable premium cab services across Gujarat.
              </p>
              <div style={{ display: 'flex', gap: '12px' }}>
                <a 
                  href="tel:9898767619"
                  className="btn-primary"
                  style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', background: '#ff0000', color: 'white', fontWeight: 'bold' }}
                >
                  Call Now
                </a>
                <a 
                  href="https://wa.me/919898767619"
                  target="_blank"
                  rel="noreferrer"
                  style={{ flex: 1, textAlign: 'center', padding: '12px', borderRadius: '8px', textDecoration: 'none', background: '#25D366', color: 'white', fontWeight: 'bold' }}
                >
                  WhatsApp
                </a>
              </div>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default TourPackages;
