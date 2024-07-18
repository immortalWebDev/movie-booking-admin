import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Sidebar from './components/Sidebar';
import AddCategory from './components/AddCategory';
import AddMovie from './components/AddMovie';
import BookedMovies from './components/BookedMovie';
import ShowtimeManagement from './components/ShowtimeManagement';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import { AuthProvider, useAuth } from './components/AuthContext';
import PrivateRoute from './components/PrivateRoute';
import './styles.css';
import Header from './components/Header';
import Footer from './components/Footer';

const AppContent = () => {
  const { currentUser } = useAuth();

  return (
    <>
    <div className="app">
      <Header></Header>
      <div className="content">
        
        {currentUser && <Sidebar />}
        <Routes>

          <Route path="/admin/login" element={<Login />} />


          <Route path="/admin/dashboard/*" element={<PrivateRoute element={Dashboard} />} />
          <Route path="/add-category" element={<PrivateRoute element={AddCategory} />} />
          <Route path="/add-movie" element={<PrivateRoute element={AddMovie} />} />
          <Route path="/booked-movies" element={<PrivateRoute element={BookedMovies} />} />
          <Route path="/showtime-management" element={<PrivateRoute element={ShowtimeManagement} />} />
        </Routes>
      </div>
    </div>
    <Footer></Footer>
    </>
  );
};

const App = () => (
  <AuthProvider>
    <Router>
      <AppContent />
    </Router>
  </AuthProvider>
);

export default App;

