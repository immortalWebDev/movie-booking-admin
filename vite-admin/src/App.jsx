import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "react-redux";
import AppRouter from "./components/Routes/AppRouter";
import Header from './components/Header/Header'
import Footer from './components/Footer/Footer'
import store from "./store/store";
import "./App.css";

const App = () => (

  <Provider store={store}>
    <Router>
      <Header/>
      <AppRouter/>
      <Footer/>
    </Router>
  </Provider>
);

export default App;