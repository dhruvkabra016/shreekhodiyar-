import React, { createContext, useState, useEffect } from 'react';

export const DataContext = createContext();

const initialFleet = [];
const initialDestinations = [];
const initialBookings = [];

export const DataProvider = ({ children }) => {
  const [fleet, setFleet] = useState(() => {
    const saved = localStorage.getItem('shree_khodiyar_fleet_v2');
    return saved ? JSON.parse(saved) : initialFleet;
  });

  const [destinations, setDestinations] = useState(() => {
    const saved = localStorage.getItem('shree_khodiyar_destinations_v2');
    return saved ? JSON.parse(saved) : initialDestinations;
  });

  const [bookings, setBookings] = useState(() => {
    const saved = localStorage.getItem('shree_khodiyar_bookings_v2');
    return saved ? JSON.parse(saved) : initialBookings;
  });

  useEffect(() => {
    localStorage.setItem('shree_khodiyar_fleet_v2', JSON.stringify(fleet));
  }, [fleet]);

  useEffect(() => {
    localStorage.setItem('shree_khodiyar_destinations_v2', JSON.stringify(destinations));
  }, [destinations]);

  useEffect(() => {
    localStorage.setItem('shree_khodiyar_bookings_v2', JSON.stringify(bookings));
  }, [bookings]);

  return (
    <DataContext.Provider value={{ fleet, setFleet, destinations, setDestinations, bookings, setBookings }}>
      {children}
    </DataContext.Provider>
  );
};
