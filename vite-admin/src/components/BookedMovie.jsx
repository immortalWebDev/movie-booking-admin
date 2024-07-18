import React, { useEffect, useState } from 'react';
import { db } from '../firebase';
import { collection, getDocs } from 'firebase/firestore';
import './BookedMovies.css'; 

const BookedMovies = () => {
  const [bookedMovies, setBookedMovies] = useState([]);

  useEffect(() => {
    const fetchBookedMovies = async () => {
      const querySnapshot = await getDocs(collection(db, 'bookings'));
      setBookedMovies(querySnapshot.docs.map(doc => doc.data()));
    };
    fetchBookedMovies();
  }, []);

  return (
    <div className="booked-movies-container">
      <h2>Booked Movies</h2>
      <ul>
        {bookedMovies.map((booking, index) => (
          <li key={index}>
            <strong>{booking.name}</strong> ({booking.email}) booked <em>{booking.movieName}</em> at <em>{booking.showtime}</em>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default BookedMovies;








