// import React from 'react';
// import { Link } from 'react-router-dom';
// import { useAuth } from './AuthContext';

// const Sidebar = () => {
//   const { currentUser, logout } = useAuth();

//   // if (!currentUser) {
//   //   return null; // Do not render Sidebar if user is not authenticated
//   // }

//   const handleLogout = async () => {
//     try {
//       await logout();
//     } catch (error) {
//       console.error('Failed to logout:', error);
//     }
//   };

//   return (
//     <div className="sidebar">
//       <h2>Admin Panel</h2>
//       <ul>
//         <li><Link to="/add-category">Add Category</Link></li>
//         <li><Link to="/add-movie">Add Movie</Link></li>
//         <li><Link to="/showtime-management">Showtime Management</Link></li>
//         <li><Link to="/booked-movies">Booked Movies</Link></li>
//       </ul>
//       <button onClick={handleLogout}>Logout</button>
//     </div>
//   );
// };

// export default Sidebar;




import React from 'react';
import { Link } from 'react-router-dom';
import { useAuth } from './AuthContext';
import './Sidebar.css';  // Import the new CSS file

const Sidebar = () => {
  const { currentUser, logout } = useAuth();

  const handleLogout = async () => {
    try {
      await logout();
    } catch (error) {
      console.error('Failed to logout:', error);
    }
  };

  return (
    <div className="sidebar">
      <h2 className="sidebar-heading">Admin Panel</h2>
      <ul className="sidebar-menu">
        <li><Link to="/add-category" className="sidebar-link">Add Category</Link></li>
        <li><Link to="/add-movie" className="sidebar-link">Add Movie</Link></li>
        <li><Link to="/showtime-management" className="sidebar-link">Showtime Management</Link></li>
        <li><Link to="/booked-movies" className="sidebar-link">Booked Movies</Link></li>
      </ul>
      <button className="sidebar-logout" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default Sidebar;






