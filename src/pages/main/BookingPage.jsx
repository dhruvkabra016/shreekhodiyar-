import React, { useState, useContext } from 'react';
import { motion } from 'framer-motion';
import { useNavigate } from 'react-router-dom';
import { DataContext } from '../../context/DataContext';
import Navbar from '../../components/Navbar';
import Footer from '../../components/Footer';

const BookingPage = () => {
  const { fleet, bookings, setBookings } = useContext(DataContext);
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: '',
    phone: '',
    pickup: '',
    destination: '',
    date: '',
    time: '',
    members: '',
    days: '',
    car: ''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Save to Admin Bookings
    const newBooking = {
      id: `BKG${Date.now().toString().slice(-4)}`,
      customer: formData.name,
      phone: formData.phone,
      car: formData.car,
      pickup: formData.pickup,
      destination: formData.destination,
      date: formData.date,
      time: formData.time,
      members: formData.members,
      days: formData.days,
      status: 'Pending',
      amount: 'TBD' // Can be calculated based on car price * days later
    };
    
    setBookings([...bookings, newBooking]);

    alert('Booking submitted successfully! Our team will contact you shortly to confirm the details.');
    
    // Redirect user back to home
    navigate('/');
  };

  return (
    <div style={{ background: 'var(--color-bg-navy)', minHeight: '100vh', color: 'white' }}>
      <Navbar />
      
      <section style={{ paddingTop: '150px', paddingBottom: '100px' }}>
        <div className="container">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            className="glass-panel"
            style={{ maxWidth: '800px', margin: '0 auto', padding: '40px' }}
          >
            <h2 className="text-gradient" style={{ textAlign: 'center', fontSize: '36px', marginBottom: '30px' }}>Book Your Premium Ride</h2>
            
            <form onSubmit={handleSubmit} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '24px' }}>
              
              <div style={{ gridColumn: '1 / -1' }}>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Full Name</label>
                <input required name="name" onChange={handleChange} type="text" placeholder="John Doe" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Phone Number</label>
                <input required name="phone" onChange={handleChange} type="tel" placeholder="+91..." style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Preferred Car</label>
                <select required name="car" onChange={handleChange} style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }}>
                  <option value="" style={{ background: '#0a1128' }}>Select a car...</option>
                  {fleet.map(car => (
                    <option key={car.id} value={car.name} style={{ background: '#0a1128' }}>{car.name}</option>
                  ))}
                  <option value="Any available luxury car" style={{ background: '#0a1128' }}>Any available luxury car</option>
                </select>
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Pickup Location (Home/City)</label>
                <input required name="pickup" onChange={handleChange} type="text" placeholder="e.g., Ahmedabad Airport" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Destination</label>
                <input required name="destination" onChange={handleChange} type="text" placeholder="e.g., Dwarka" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Date</label>
                <input required name="date" onChange={handleChange} type="date" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Time</label>
                <input required name="time" onChange={handleChange} type="time" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Total Members</label>
                <input required name="members" onChange={handleChange} type="number" min="1" placeholder="e.g., 4" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div>
                <label style={{ display: 'block', color: 'var(--color-primary-gold)', marginBottom: '8px', fontWeight: 600 }}>Number of Days</label>
                <input required name="days" onChange={handleChange} type="number" min="1" placeholder="e.g., 3" style={{ width: '100%', padding: '14px', background: 'rgba(255,255,255,0.05)', border: '1px solid rgba(255,255,255,0.1)', color: 'white', borderRadius: '10px', fontSize: '16px' }} />
              </div>

              <div style={{ gridColumn: '1 / -1', marginTop: '20px', textAlign: 'center' }}>
                <button type="submit" className="btn-primary" style={{ padding: '16px 40px', fontSize: '18px', width: '100%', maxWidth: '300px' }}>Submit Booking</button>
                <p style={{ marginTop: '16px', color: '#aaa', fontSize: '14px' }}>This will save your booking and connect you with us on WhatsApp.</p>
              </div>

            </form>
          </motion.div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default BookingPage;
