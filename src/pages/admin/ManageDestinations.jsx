import React, { useState, useContext } from 'react';
import { Edit2, Trash2, Plus } from 'lucide-react';
import { DataContext } from '../../context/DataContext';
import { doc, setDoc, deleteDoc } from 'firebase/firestore';
import { db } from '../../firebase';

const ManageDestinations = () => {
  const { destinations } = useContext(DataContext);
  const [showForm, setShowForm] = useState(false);
  const [formData, setFormData] = useState({ id: null, name: '', desc: '', img: '', status: 'Active' });

  const handleEdit = (dest) => {
    setFormData(dest);
    setShowForm(true);
  };

  const handleDelete = async (id) => {
    if (window.confirm('Are you sure you want to delete this destination?')) {
      await deleteDoc(doc(db, 'destinations', id.toString()));
    }
  };

  const handleSave = async () => {
    const id = formData.id ? formData.id.toString() : Date.now().toString();
    await setDoc(doc(db, 'destinations', id), { ...formData, id });
    setShowForm(false);
    setFormData({ id: null, name: '', desc: '', img: '', status: 'Active' });
  };

  return (
    <div>
      <div className="flex-between" style={{ marginBottom: '32px' }}>
        <h2 className="text-gradient" style={{ margin: 0 }}>Manage Destinations</h2>
        <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '8px' }} onClick={() => { setFormData({ id: null, name: '', desc: '', img: '', status: 'Active' }); setShowForm(!showForm); }}>
          <Plus size={20} /> Add Destination
        </button>
      </div>

      {showForm && (
        <div className="glass-panel" style={{ padding: '24px', marginBottom: '32px' }}>
          <h3 className="text-gold" style={{ marginBottom: '20px' }}>{formData.id ? 'Edit Destination' : 'Add New Destination'}</h3>
          <form style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
            <div>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Destination Name</label>
              <input type="text" value={formData.name} onChange={e => setFormData({...formData, name: e.target.value})} placeholder="e.g., Dwarka" style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Status</label>
              <select value={formData.status} onChange={e => setFormData({...formData, status: e.target.value})} style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }}>
                <option value="Active" style={{ background: '#0a1128' }}>Active</option>
                <option value="Inactive" style={{ background: '#0a1128' }}>Inactive</option>
              </select>
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Description</label>
              <input type="text" value={formData.desc} onChange={e => setFormData({...formData, desc: e.target.value})} placeholder="Short description..." style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} />
            </div>
            <div style={{ gridColumn: '1 / -1' }}>
              <label style={{ display: 'block', color: '#aaa', marginBottom: '8px' }}>Upload Image</label>
              <input 
                type="file" 
                accept="image/*" 
                onChange={e => {
                  const file = e.target.files[0];
                  if (file) {
                    const reader = new FileReader();
                    reader.onloadend = () => {
                      setFormData({...formData, img: reader.result});
                    };
                    reader.readAsDataURL(file);
                  }
                }} 
                style={{ width: '100%', padding: '12px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '8px' }} 
              />
              {formData.img && (
                <div style={{ marginTop: '12px' }}>
                  <img src={formData.img} alt="Preview" style={{ height: '80px', borderRadius: '8px', objectFit: 'cover' }} />
                </div>
              )}
            </div>
            <div style={{ gridColumn: '1 / -1', display: 'flex', justifyContent: 'flex-end', gap: '16px', marginTop: '16px' }}>
              <button type="button" onClick={() => setShowForm(false)} style={{ padding: '10px 24px', background: 'transparent', border: '1px solid #aaa', color: '#aaa', borderRadius: '8px', cursor: 'pointer' }}>Cancel</button>
              <button type="button" onClick={handleSave} className="btn-primary">Save Destination</button>
            </div>
          </form>
        </div>
      )}

      <div className="glass-panel" style={{ overflow: 'hidden' }}>
        <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'left' }}>
          <thead>
            <tr style={{ background: 'rgba(255,255,255,0.05)' }}>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Image</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Destination Name</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Status</th>
              <th style={{ padding: '16px', color: 'var(--color-primary-gold)' }}>Actions</th>
            </tr>
          </thead>
          <tbody>
            {destinations.map((dest) => (
              <tr key={dest.id} style={{ borderBottom: '1px solid rgba(255,255,255,0.05)' }}>
                <td style={{ padding: '16px' }}><img src={dest.img} alt={dest.name} style={{ width: '60px', height: '40px', objectFit: 'cover', borderRadius: '4px' }}/></td>
                <td style={{ padding: '16px', fontWeight: 'bold' }}>{dest.name}</td>
                <td style={{ padding: '16px' }}>
                  <span style={{ color: dest.status === 'Active' ? '#2ecc71' : '#e74c3c' }}>{dest.status}</span>
                </td>
                <td style={{ padding: '16px', display: 'flex', gap: '12px' }}>
                  <button onClick={() => handleEdit(dest)} style={{ background: 'rgba(52, 152, 219, 0.2)', color: '#3498db', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Edit2 size={16} /></button>
                  <button onClick={() => handleDelete(dest.id)} style={{ background: 'rgba(231, 76, 60, 0.2)', color: '#e74c3c', border: 'none', padding: '8px', borderRadius: '4px', cursor: 'pointer', display: 'flex', alignItems: 'center' }}><Trash2 size={16} /></button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageDestinations;
