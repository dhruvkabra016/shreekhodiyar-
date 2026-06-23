import React, { createContext, useState, useEffect } from 'react';
import { collection, onSnapshot, doc, setDoc } from 'firebase/firestore';
import { db } from '../firebase';

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
    img: 'https://images.unsplash.com/photo-1549317661-bd32c8ce0db2?q=80&w=1000&auto=format&fit=crop'
  }
];

const initialDestinations = [
  { id: 1, name: 'Dwarka', desc: 'Visit the sacred city of Lord Krishna.', img: 'https://images.unsplash.com/photo-1605646197116-4354228c2e68?q=80&w=1000&auto=format&fit=crop', status: 'Active' },
  { id: 2, name: 'Somnath', desc: 'Experience the first among the twelve Aadi Jyotirlingas of India.', img: 'https://images.unsplash.com/photo-1582555172866-f73bb12a2ab3?q=80&w=1000&auto=format&fit=crop', status: 'Active' },
  { id: 3, name: 'Statue of Unity', desc: 'The tallest statue in the world, a tribute to Sardar Vallabhbhai Patel.', img: 'https://images.unsplash.com/photo-1622359409890-449e78262f3a?q=80&w=1000&auto=format&fit=crop', status: 'Active' },
  { id: 4, name: 'Rann of Kutch', desc: 'Witness the breathtaking beauty of the endless white salt desert.', img: 'https://images.unsplash.com/photo-1598218128362-7201c13d7065?q=80&w=1000&auto=format&fit=crop', status: 'Active' }
];

export const DataProvider = ({ children }) => {
  const [fleet, setFleet] = useState(initialFleet);
  const [destinations, setDestinations] = useState(initialDestinations);
  const [bookings, setBookings] = useState([]);

  useEffect(() => {
    let unsubscribeFleet = () => {};
    let unsubscribeDest = () => {};

    try {
      unsubscribeFleet = onSnapshot(collection(db, 'fleet'), (snapshot) => {
        const fleetData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (fleetData.length > 0) {
          setFleet(fleetData);
        } else {
          initialFleet.forEach(async (car) => {
            try { await setDoc(doc(db, 'fleet', car.id.toString()), car); } catch(e) {}
          });
        }
      }, (error) => {
        console.error("Firebase Fleet Error:", error);
        setFleet(initialFleet); // Fallback to default if error
      });

      unsubscribeDest = onSnapshot(collection(db, 'destinations'), (snapshot) => {
        const destData = snapshot.docs.map(doc => ({ id: doc.id, ...doc.data() }));
        if (destData.length > 0) {
          setDestinations(destData);
        } else {
          initialDestinations.forEach(async (dest) => {
            try { await setDoc(doc(db, 'destinations', dest.id.toString()), dest); } catch(e) {}
          });
        }
      }, (error) => {
        console.error("Firebase Destinations Error:", error);
        setDestinations(initialDestinations); // Fallback
      });
    } catch (err) {
      console.error("Firebase Init Error:", err);
    }

    return () => {
      unsubscribeFleet();
      unsubscribeDest();
    };
  }, []);

  return (
    <DataContext.Provider value={{ fleet, setFleet, destinations, setDestinations, bookings, setBookings }}>
      {children}
    </DataContext.Provider>
  );
};
