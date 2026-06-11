import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { DataProvider } from './context/DataContext';

// Main Site Components
import Home from './pages/main/Home';
import BookingPage from './pages/main/BookingPage';

// Admin Components
import AdminLayout from './pages/admin/AdminLayout';
import AdminDashboard from './pages/admin/Dashboard';
import ManageFleet from './pages/admin/ManageFleet';
import ManageBookings from './pages/admin/ManageBookings';
import ManageDestinations from './pages/admin/ManageDestinations';

function App() {
  return (
    <DataProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/book" element={<BookingPage />} />
          <Route path="/admin" element={<AdminLayout />}>
            <Route index element={<AdminDashboard />} />
            <Route path="fleet" element={<ManageFleet />} />
            <Route path="bookings" element={<ManageBookings />} />
            <Route path="destinations" element={<ManageDestinations />} />
          </Route>
        </Routes>
      </Router>
    </DataProvider>
  );
}

export default App;
