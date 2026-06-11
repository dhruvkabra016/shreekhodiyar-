import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';

const Footer = () => {
  return (
    <footer style={{ background: '#050814', paddingTop: '80px', paddingBottom: '30px', borderTop: '1px solid rgba(212, 175, 119, 0.2)' }}>
      <div className="container">
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '60px' }}>
          
          <div>
            <h3 className="text-gold" style={{ fontSize: '24px', marginBottom: '20px', fontWeight: 800 }}>SHREE KHODIYAR</h3>
            <p style={{ color: '#aaa', lineHeight: 1.6, marginBottom: '20px' }}>
              Experience Gujarat in style. We provide premium luxury cars for all your travel needs across the state, ensuring safety, comfort, and elegance.
            </p>
            <div style={{ display: 'flex', gap: '16px' }}>
              <span style={{ color: 'var(--color-primary-gold)', fontWeight: 'bold' }}>FB</span>
              <span style={{ color: 'var(--color-primary-gold)', fontWeight: 'bold' }}>IG</span>
              <span style={{ color: 'var(--color-primary-gold)', fontWeight: 'bold' }}>X</span>
            </div>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', marginBottom: '20px', fontWeight: 600 }}>Quick Links</h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '12px' }}>
              <li><a href="#home" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Home</a></li>
              <li><a href="#destinations" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Destinations</a></li>
              <li><a href="#fleet" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Our Fleet</a></li>
              <li><a href="/admin" style={{ color: '#aaa', textDecoration: 'none', transition: 'color 0.3s' }}>Admin Dashboard</a></li>
            </ul>
          </div>

          <div>
            <h4 style={{ fontSize: '18px', marginBottom: '20px', fontWeight: 600 }}>Contact Us</h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: '16px' }}>
              <div style={{ display: 'flex', alignItems: 'flex-start', gap: '12px' }}>
                <MapPin style={{ color: 'var(--color-primary-gold)', flexShrink: 0 }} />
                <span style={{ color: '#aaa' }}>123, Luxury Drive, SG Highway, Ahmedabad, Gujarat, India</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Phone style={{ color: 'var(--color-primary-gold)', flexShrink: 0 }} />
                <span style={{ color: 'white', fontWeight: 'bold', fontSize: '18px' }}>7383304550</span>
              </div>
              <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
                <Mail style={{ color: 'var(--color-primary-gold)', flexShrink: 0 }} />
                <span style={{ color: '#aaa' }}>info@shreekhodiyartravels.com</span>
              </div>
            </div>
          </div>

        </div>

        <div style={{ textAlign: 'center', color: '#666', borderTop: '1px solid rgba(255,255,255,0.05)', paddingTop: '30px' }}>
          <p>&copy; {new Date().getFullYear()} Shree Khodiyar Travels. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
