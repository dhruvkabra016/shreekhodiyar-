import React, { useState } from 'react';
import { Outlet, Link, useNavigate } from 'react-router-dom';
import { LayoutDashboard, Car, Calendar, MapPin, Settings, LogOut, Lock } from 'lucide-react';

const AdminLayout = () => {
  const [isAuthenticated, setIsAuthenticated] = useState(
    sessionStorage.getItem('adminAuth') === 'true'
  );
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigate = useNavigate();

  const handleLogin = (e) => {
    e.preventDefault();
    if (username === 'admin' && password === 'admin123') {
      sessionStorage.setItem('adminAuth', 'true');
      setIsAuthenticated(true);
      setError('');
    } else {
      setError('Invalid username or password');
    }
  };

  const handleLogout = () => {
    sessionStorage.removeItem('adminAuth');
    setIsAuthenticated(false);
    navigate('/');
  };

  if (!isAuthenticated) {
    return (
      <div style={{ minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center', background: 'var(--color-bg-navy)' }}>
        <div className="glass-panel" style={{ padding: '40px', width: '100%', maxWidth: '400px', textAlign: 'center' }}>
          <div style={{ display: 'inline-flex', background: 'rgba(212, 175, 119, 0.1)', padding: '20px', borderRadius: '50%', marginBottom: '20px' }}>
            <Lock size={40} color="var(--color-primary-gold)" />
          </div>
          <h2 className="text-gradient" style={{ marginBottom: '30px' }}>Admin Access</h2>
          
          <form onSubmit={handleLogin} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            {error && <p style={{ color: '#e74c3c', fontSize: '14px', margin: 0 }}>{error}</p>}
            <input 
              type="text" 
              placeholder="Username" 
              value={username}
              onChange={(e) => setUsername(e.target.value)}
              style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px' }}
            />
            <input 
              type="password" 
              placeholder="Password" 
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px' }}
            />
            <button type="submit" className="btn-primary" style={{ padding: '16px', fontSize: '16px', marginTop: '10px' }}>
              Login to Dashboard
            </button>
          </form>
          <p style={{ marginTop: '24px', fontSize: '14px', color: '#aaa' }}><Link to="/" style={{ color: 'var(--color-primary-gold)', textDecoration: 'none' }}>&larr; Back to Public Website</Link></p>
        </div>
      </div>
    );
  }

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--color-bg-navy)', color: 'white' }}>
      <aside className="admin-sidebar" style={{ width: '250px', padding: '24px', display: 'flex', flexDirection: 'column', gap: '16px', borderRight: '1px solid rgba(255,255,255,0.05)' }}>
        <h2 className="text-gold" style={{ marginBottom: '32px' }}>Admin Panel</h2>
        <Link to="/admin" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <LayoutDashboard size={20} /> Dashboard
        </Link>
        <Link to="/admin/fleet" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Car size={20} /> Manage Cars
        </Link>
        <Link to="/admin/bookings" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <Calendar size={20} /> Bookings
        </Link>
        <Link to="/admin/destinations" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
          <MapPin size={20} /> Destinations
        </Link>
        <div style={{ marginTop: 'auto', display: 'flex', flexDirection: 'column', gap: '16px' }}>
          <Link to="/admin/settings" style={{ color: 'white', textDecoration: 'none', display: 'flex', alignItems: 'center', gap: '12px' }}>
            <Settings size={20} /> Settings
          </Link>
          <button onClick={handleLogout} style={{ background: 'none', border: 'none', color: '#e74c3c', display: 'flex', alignItems: 'center', gap: '12px', cursor: 'pointer', padding: 0, fontSize: '16px', marginTop: '16px' }}>
            <LogOut size={20} /> Logout
          </button>
        </div>
      </aside>
      <main style={{ flex: 1, padding: '32px', overflowY: 'auto' }}>
        <Outlet />
      </main>
    </div>
  );
};

export default AdminLayout;
