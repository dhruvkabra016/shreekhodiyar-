import React, { useContext } from 'react';
import { Users, Car, CalendarCheck, DollarSign } from 'lucide-react';
import { DataContext } from '../../context/DataContext';

const StatCard = ({ icon: Icon, title, value, color }) => (
  <div className="glass-panel" style={{ flex: 1, minWidth: '200px', display: 'flex', alignItems: 'center', gap: '20px' }}>
    <div style={{ background: `rgba(${color}, 0.1)`, padding: '16px', borderRadius: '12px' }}>
      <Icon size={32} color={`rgb(${color})`} />
    </div>
    <div>
      <p style={{ color: '#aaa', fontSize: '14px', marginBottom: '4px' }}>{title}</p>
      <h3 style={{ fontSize: '28px', color: 'white', margin: 0 }}>{value}</h3>
    </div>
  </div>
);

const getStatusColor = (status) => {
  switch (status) {
    case 'Confirmed': return '#2ecc71';
    case 'Pending': return '#f39c12';
    case 'Completed': return '#3498db';
    case 'Cancelled': return '#e74c3c';
    default: return '#fff';
  }
};

const AdminDashboard = () => {
  const { bookings, fleet } = useContext(DataContext);
  const recentBookings = [...bookings].reverse().slice(0, 5); // Get last 5 bookings
  
  return (
    <div>
      <h1 className="text-gradient" style={{ marginBottom: '32px' }}>Dashboard Overview</h1>
      <div style={{ display: 'flex', gap: '24px', flexWrap: 'wrap', marginBottom: '40px' }}>
        <StatCard icon={CalendarCheck} title="Total Bookings" value={bookings.length} color="212, 175, 119" />
        <StatCard icon={DollarSign} title="Revenue" value="₹TBD" color="46, 204, 113" />
        <StatCard icon={Car} title="Active Cars" value={fleet.length} color="52, 152, 219" />
        <StatCard icon={Users} title="New Customers" value={bookings.length} color="155, 89, 182" />
      </div>

      <div className="glass-panel" style={{ padding: '32px', minHeight: '300px', overflow: 'auto' }}>
        <h3 className="text-gold" style={{ marginBottom: '20px' }}>Recent Bookings</h3>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ borderBottom: '1px solid rgba(255,255,255,0.1)' }}>
              <th style={{ padding: '12px 0', color: '#aaa' }}>Customer</th>
              <th style={{ padding: '12px 0', color: '#aaa' }}>Car</th>
              <th style={{ padding: '12px 0', color: '#aaa' }}>Status</th>
              <th style={{ padding: '12px 0', color: '#aaa', textAlign: 'right' }}>Amount</th>
            </tr>
          </thead>
          <tbody>
            {recentBookings.length === 0 ? (
              <tr>
                <td colSpan="4" style={{ padding: '24px 0', textAlign: 'center', color: '#666' }}>No recent bookings found.</td>
              </tr>
            ) : recentBookings.map((b) => (
              <tr key={b.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '12px 0' }}>{b.customer}</td>
                <td style={{ padding: '12px 0', color: '#aaa' }}>{b.car}</td>
                <td style={{ padding: '12px 0' }}>
                  <span style={{ 
                    color: getStatusColor(b.status), 
                    background: `${getStatusColor(b.status)}22`, 
                    padding: '4px 8px', 
                    borderRadius: '4px', 
                    fontSize: '12px' 
                  }}>
                    {b.status}
                  </span>
                </td>
                <td style={{ padding: '12px 0', textAlign: 'right' }}>{b.amount}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AdminDashboard;
