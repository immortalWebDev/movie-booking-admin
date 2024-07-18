// src/pages/Dashboard.js
import React from 'react';
import { Routes, Route} from 'react-router-dom';
import Sidebar from '../components/Sidebar';
import AddCategory from '../components/AddCategory';
import AddMovie from '../components/AddMovie';
import ShowtimeManagement from '../components/ShowtimeManagement';
import BookedMovies from '../components/BookedMovie';
import { useAuth } from '../components/AuthContext';

const Dashboard = () => {
  const { currentUser } = useAuth(); 

  return (
    <div className="dashboard-container">
      <div style={{marginLeft:'33rem'}}>
      <h2>Welcome Admin Piyush</h2>
      <p>Email: {currentUser.email}</p>
      </div>
      {/* <Sidebar /> */}
      <div className="dashboard-content">
        <Routes>
          <Route path="add-category" element={<AddCategory />} />
          <Route path="add-movie" element={<AddMovie />} />
          <Route path="showtime-management" element={<ShowtimeManagement />} />
          <Route path="booked-movies" element={<BookedMovies />} />
        </Routes>
      </div>
    </div>
  );
};

export default Dashboard;
