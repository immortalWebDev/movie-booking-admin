import React, { useEffect, useState } from "react";
import { db } from "../../firebase";
import { collection, getDocs } from "firebase/firestore";
import "./BookedMovies.css";

const BookedMovies = () => {
  const [bookedMovies, setBookedMovies] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    const fetchBookedMovies = async () => {
      setLoading(true);
      try {
        const querySnapshot = await getDocs(collection(db, "bookings"));
        const bookings = querySnapshot.docs.map((doc) => doc.data());
        bookings.sort((a, b) => b.timestamp - a.timestamp); 
        setBookedMovies(bookings);
        
      } catch (error) {
        console.error("Error fetching booked movies: ", error);
      } finally {
        setLoading(false);
      }
    };
    fetchBookedMovies();
    // console.log(bookedMovies)
  }, []);

  return (
    <div className="booked-movies-container">
      <h2>Booked Movies</h2>
      {loading ? (
        <p style={{textAlign:'center'}}>Fetching Booking Details...</p>
      ) : (
        <ul>
          {bookedMovies.map((booking, index) => (
            <li key={index}>
              <span style={{fontWeight:"bold"}}>{booking.name}</span> ({booking.email}) booked{" "}
              <strong><em>{booking.movieName}</em></strong> at <span style={{fontWeight:'bold'}}>{booking.showtime}</span> for <span style={{fontWeight:'bold'}}>{booking.date}</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default BookedMovies;

