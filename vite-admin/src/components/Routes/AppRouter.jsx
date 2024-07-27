import React from "react";
import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Sidebar from "../../components/Sidebar/Sidebar";
import AddCategory from "../../components/AddCategory/AddCategory";
import AddMovie from "../../components/AddMovie/AddMovie";
import BookedMovies from "../../components/BookedMovies/BookedMovie";
import ShowtimeManagement from "../../components/ShowtimeManagement/ShowtimeManagement";
import Login from "../../pages/Login/Login";
import Dashboard from "../../pages/Dashboard/Dashboard";
import PrivateRoute from "./PrivateRoute";

const AppRouter = () => {
  const currentUser = useSelector((state) => state.auth.currentUser);

  return (
    <div className="content">
      {currentUser && <Sidebar />}
      <Routes>
        <Route path="/admin/login" element={<Login />} />

        <Route
          path="/admin/dashboard/*"
          element={<PrivateRoute element={Dashboard} />}
        />
        <Route
          path="/add-category"
          element={<PrivateRoute element={AddCategory} />}
        />
        <Route
          path="/add-movie"
          element={<PrivateRoute element={AddMovie} />}
        />
        <Route
          path="/booked-movies"
          element={<PrivateRoute element={BookedMovies} />}
        />
        <Route
          path="/showtime-management"
          element={<PrivateRoute element={ShowtimeManagement} />}
        />

        <Route path="/*" element={<PrivateRoute element={Dashboard} />} />
      </Routes>
    </div>
  );
};

export default AppRouter;
