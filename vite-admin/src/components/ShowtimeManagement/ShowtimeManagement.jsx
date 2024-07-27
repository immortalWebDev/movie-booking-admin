import React, { useState } from 'react';
import { db } from '../../firebase';
import { collection, addDoc } from 'firebase/firestore';
import './ShowtimeManagement.css'; 

const ShowtimeManagement = () => {
  const [showtime, setShowtime] = useState('');
  const [loading,setLoading] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      setLoading(true)
      await addDoc(collection(db, 'showtimes'), { time: showtime });
      setShowtime('');
      alert('Showtime added successfully');
    } catch (error) {
      console.error('Error adding showtime: ', error);
      alert('Error adding showtime');
    }
    finally{
      setLoading(false)
    }
  };

  return (
    <div className="showtime-management-container">
      <h2>Showtime Management</h2>
      <form onSubmit={handleSubmit}>
        <label>
          Showtime:{' '}
          <input
            type="text"
            value={showtime}
            onChange={(e) => setShowtime(e.target.value)}
            required
          />
        </label>
        <button type="submit">{loading ? "Adding..." : "Add showtime"}</button>
      </form>
    </div>
  );
};

export default ShowtimeManagement;











