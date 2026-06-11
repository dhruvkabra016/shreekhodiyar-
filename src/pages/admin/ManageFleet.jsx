import React, { useState, useContext } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { DataContext } from '../../context/DataContext';

const ManageFleet = () => {
  const { fleet, setFleet } = useContext(DataContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', type: '', capacity: '', price: '', img: '' });

  const handleEdit = (car) => {
    setFormData(car);
    setShowForm(true);
  };

  const handleDelete = (id) => {
    if (window.confirm('Are you sure you want to delete this vehicle?')) {
      setFleet(fleet.filter(car => car.id !== id));
    }
  };

  const handleSave = () => {
    if (formData.id) {
      setFleet(fleet.map(car => car.id === formData.id ? formData : car));
    } else {
      setFleet([...fleet, { ...formData, id: Date.now() }]);
    }
    setShowForm(false);
    setFormData({ id: null, name: '', type: '', capacity: '', price: '', img: '' });
  };

  return (
    <div>
      <div className="flex-between" style={{ marginBottom: '32px' }}>
        <h2 className="text-gradient" style={{ margin: 0 }}>Manage Cars</h2>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => { setFormData({ id: null, name: '', type: '', capacity: '', price: '', img: '' }); setShowForm(!showForm); }}>
          <Plus size={20} /> Add New Car
        </button>
      </div>

      {showForm && (
        <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
          <h3 className="text-gold" style={{ marginBottom: '20px' }}>{formData.id ? 'Edit Vehicle' : 'Add New Vehicle'}</h3>
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Car Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g., BMW 7 Series" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Type</label>
              <input type="text" value={formData.type} onChange={e => setFormData({...formData, type: e.target.value})} placeholder="e.g., Luxury Sedan" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Capacity</label>
              <input type="number" value={formData.capacity} onChange={e => setFormData({...formData, capacity: e.target.value})} placeholder="e.g., 4" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Price per Day (₹)</label>
              <input type="number" value={formData.price} onChange={e => setFormData({...formData, price: e.target.value})} placeholder="e.g., 10000" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Image URL</label>
              <input type="text" value={formData.img} onChange={e => setFormData({...formData, img: e.target.value})} placeholder="https://..." style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px' }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ padding: '10px 24px', background: 'transparent', border: '1px solid #aaa', color: '#aaa', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
              <button type="button" onClick={handleSave} className="btn-primary">Save Vehicle</button>
            </div>
          </form>
        </div>
      )}

      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Image</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Car Name</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Type</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Capacity</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Price (₹/day)</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {fleet.map((car) => (
              <tr key={car.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px' }}><img src={car.img} alt={car.name} style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}/></td>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>{car.name}</td>
                <td style={{ padding: '16px', color: '#aaa' }}>{car.type}</td>
                <td style={{ padding: '16px' }}>{car.capacity} Seats</td>
                <td style={{ padding: '16px' }}>₹{car.price}</td>
                <td style={{ padding: '16px', display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleEdit(car)} style={{ background: 'rgba(52, 152, 219, 0.2)', color: '#3498db', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(car.id)} style={{ background: 'rgba(231, 76, 60, 0.2)', color: '#e74c3c', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageFleet;
