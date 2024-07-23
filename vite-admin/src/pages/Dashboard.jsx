import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import AddCategory from "../components/AddCategory";
import AddMovie from "../components/AddMovie";
import ShowtimeManagement from "../components/ShowtimeManagement";
import BookedMovies from "../components/BookedMovie";
import "./Dashboard.css";

const Dashboard = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="dashboard-container">
      <div className="welcome">
        <h2>Welcome Admin Piyush</h2>
        <p>Email: {currentUser.email}</p>
      </div>

      <div>
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
