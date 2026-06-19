import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const initialFleet = [
  {
    id: 1,
    name: 'SWIFT DZIRE',
    type: 'Sedan',
    capacity: '4+1',
    bags: '3',
    passengers: '4 PERSON',
    price: '11',
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop' // Using a clean white car image
  }
];

const initialDestinations = [
  { id: 1, name: 'Dwarka', desc: 'Visit the sacred city of Lord Krishna.', img: 'https://images.unsplash.com/photo-1605646197116-4354228c2e68?q=80&w=1000&auto=format&fit=crop', status: 'Active' },
  { id: 2, name: 'Somnath', desc: 'Experience the first among the twelve Aadi Jyotirlingas of India.', img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop', status: 'Active' },
  { id: 3, name: 'Statue of Unity', desc: 'The tallest statue in the world, a tribute to Sardar Vallabhbhai Patel.', img: 'https://images.unsplash.com/photo-1622359409890-449e78262f3a?q=80&w=1000&auto=format&fit=crop', status: 'Active' },
  { id: 4, name: 'Rann of Kutch', desc: 'Witness the breathtaking beauty of the endless white salt desert.', img: 'https://images.unsplash.com/photo-1598218128362-7201c13d7065?q=80&w=1000&auto=format&fit=crop', status: 'Active' }
];

const initialBookings = [];

export const DataProvider = ({ children }) => {
  const [fleet, setFleet] = useState(() => {
    const saved = localStorage.getItem('shree_khodiyar_fleet_v4');
    return saved ? JSON.parse(saved) : initialFleet;
  });

  const [destinations, setDestinations] = useState(() => {
    const saved = localStorage.getItem('shree_khodiyar_destinations_v4');
    return saved ? JSON.parse(saved) : initialDestinations;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('shree_khodiyar_bookings_v4');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  useEffect(() => {
    localStorage.setItem('shree_khodiyar_fleet_v4', JSON.stringify(fleet));
  }, [fleet]);

  useEffect(() => {
    localStorage.setItem('shree_khodiyar_destinations_v4', JSON.stringify(destinations));
  }, [destinations]);

  useEffect(() => {
    localStorage.setItem('shree_khodiyar_bookings_v4', JSON.stringify(bookings));
  }, [bookings]);

  return (
    <DataContext.Provider value={{ fleet, setFleet, destinations, setDestinations, bookings, setBookings }}>
      {children}
    </DataContext.Provider>
  );
};
