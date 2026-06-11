import React, { useContext } from 'react';
import { Edit2, Eye, Trash2 } from 'lucide-react';
import { DataContext } from '../../context/DataContext';

const getStatusColor = (status) => {
  switch (status) {
    case 'Confirmed': return '#2ecc71';
    case 'Pending': return '#f39c12';
    case 'Completed': return '#3498db';
    case 'Cancelled': return '#e74c3c';
    default: return '#fff';
  }
};

const ManageBookings = () => {
  const { bookings, setBookings } = useContext(DataContext);

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this booking?')) {
      setBookings(bookings.filter(b => b.id !== id));
    }
  };

  const handleUpdateStatus = (id) => {
    const newStatus = window.prompt("Enter new status (Pending, Confirmed, Completed, Cancelled):");
    if (newStatus) {
      setBookings(bookings.map(b => b.id === id ? { ...b, status: newStatus } : b));
    }
  };

  return (
    <div>
      <h2 className="text-gradient" style={{ marginBottom: '32px' }}>Manage Bookings</h2>
      
      <div className="glass-panel" style={{ overflow: 'auto' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left', minWidth: '800px' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>ID</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Customer</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Phone</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Car</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Route</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Date & Time</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Status</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {bookings.length === 0 ? (
              <tr>
                <td colSpan="8" style={{ padding: '32px', textAlign: 'center', color: '#aaa' }}>No bookings found.</td>
              </tr>
            ) : bookings.map((booking) => (
              <tr key={booking.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>{booking.id}</td>
                <td style={{ padding: '16px' }}>{booking.customer}</td>
                <td style={{ padding: '16px', color: '#aaa' }}>{booking.phone}</td>
                <td style={{ padding: '16px', color: '#aaa' }}>{booking.car}</td>
                <td style={{ padding: '16px', color: '#aaa' }}>{booking.pickup} → {booking.destination}</td>
                <td style={{ padding: '16px', color: '#aaa' }}>{booking.date} {booking.time}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ 
                    background: `${getStatusColor(booking.status)}22`, 
                    color: getStatusColor(booking.status), 
                    padding: '6px 12px', 
                    borderRadius: '20px', 
                    fontSize: '12px', 
                    fontWeight: 'bold' 
                  }}>
                    {booking.status}
                  </span>
                </td>
                <td style={{ padding: '16px', display: 'flex', gap: '8px' }}>
                  <button onClick={() => handleUpdateStatus(booking.id)} style={{ background: 'rgba(52, 152, 219, 0.2)', color: '#3498db', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} title="Update Status"><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(booking.id)} style={{ background: 'rgba(231, 76, 60, 0.2)', color: '#e74c3c', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }} title="Delete"><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageBookings;
