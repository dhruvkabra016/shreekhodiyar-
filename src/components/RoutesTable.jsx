import React from 'react';
import { Phone } from 'lucide-react';

const routes = [
  { id: 1, from: 'Ahmedabad', to: 'Surat', distance: '265', sedan: '₹1,600', suv: '₹2,300' },
  { id: 2, from: 'Ahmedabad', to: 'Rajkot', distance: '215', sedan: '₹2,200', suv: '₹3,000' },
  { id: 3, from: 'Ahmedabad', to: 'Vadodara', distance: '110', sedan: '₹3,500', suv: '₹4,500' },
  { id: 4, from: 'Ahmedabad', to: 'Anand', distance: '75', sedan: '₹3,000', suv: '₹4,000' },
  { id: 5, from: 'Ahmedabad', to: 'Nadiad', distance: '60', sedan: '₹5,000', suv: '₹6,500' },
  { id: 6, from: 'Ahmedabad', to: 'Junagadh', distance: '315', sedan: '₹1,800', suv: '₹2,500' },
  { id: 7, from: 'Ahmedabad', to: 'Bhuj', distance: '330', sedan: '₹6,500', suv: '₹7,500' },
  { id: 8, from: 'Ahmedabad', to: 'Dwarka', distance: '440', sedan: '₹7,000', suv: '₹8,500' },
];

const RoutesTable = () => {
  return (
    <section style={{ padding: '80px 0', background: 'var(--color-bg-navy)' }}>
      <div className="container">
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <h2 style={{ fontSize: '36px', fontWeight: '800', color: 'white', marginBottom: '16px' }}>
            Famous Oneway Taxi Routes from Ahmedabad to Gujarat
          </h2>
          <p style={{ color: '#aaa', fontSize: '18px' }}>
            Estimated prices for both Sedan and SUV vehicles
          </p>
        </div>

        <div style={{ overflowX: 'auto', borderRadius: '12px', boxShadow: '0 10px 30px rgba(0,0,0,0.5)' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', backgroundColor: 'white', color: '#333' }}>
            <thead>
              <tr style={{ backgroundColor: '#222', color: 'white', textAlign: 'left' }}>
                <th style={{ padding: '16px', borderBottom: '1px solid #444' }}>#</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #444' }}>From</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #444' }}>To</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #444' }}>Distance (km)</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #444' }}>Price - Sedan (INR)</th>
                <th style={{ padding: '16px', borderBottom: '1px solid #444' }}>Price - SUV (INR)</th>
              </tr>
            </thead>
            <tbody>
              {routes.map((route, index) => (
                <tr key={route.id} style={{ backgroundColor: index % 2 === 0 ? '#f9f9f9' : '#fff', borderBottom: '1px solid #eee' }}>
                  <td style={{ padding: '16px', color: '#666' }}>{route.id}</td>
                  <td style={{ padding: '16px' }}>{route.from}</td>
                  <td style={{ padding: '16px' }}>{route.to}</td>
                  <td style={{ padding: '16px' }}>{route.distance}</td>
                  <td style={{ padding: '16px', fontWeight: '500', color: '#555' }}>{route.sedan}</td>
                  <td style={{ padding: '16px', fontWeight: '500', color: '#555' }}>{route.suv}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};

export default RoutesTable;
