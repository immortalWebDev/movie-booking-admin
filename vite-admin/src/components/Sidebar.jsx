import React from "react";
import { Link } from "react-router-dom";
import { useDispatch } from "react-redux";
import { logout } from "../store/authSlice";
import { auth } from "../firebase";
import "./Sidebar.css";

const Sidebar = () => {
  const dispatch = useDispatch();

  const handleLogout = async () => {
    try {
      await auth.signOut();
      console.log("User logged out from firebase server");

      dispatch(logout());
    } catch (error) {
      console.error("Failed to logout:", error);
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li>
          <Link to="/add-category" className="sidebar-link">
            Add Category
          </Link>
        </li>
        <li>
          <Link to="/add-movie" className="sidebar-link">
            Add Movie
          </Link>
        </li>
        <li>
          <Link to="/showtime-management" className="sidebar-link">
            Showtime Management
          </Link>
        </li>
        <li>
          <Link to="/booked-movies" className="sidebar-link">
            Booked Movies
          </Link>
        </li>
      </ul>
      <button className="sidebar-logout" onClick={handleLogout}>
        Logout
      </button>
    </div>
  );
};

export default Sidebar;
