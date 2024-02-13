import './App.css';
import React from "react";
import Header from "./components/Header";
import Navbar from "./components/Navbar";
import Profile from "./comp onents/Profile";

const App = () => {
  return (
    <div className="app-wrapper" >
      <Header />
      <Navbar />
      <Profile />
    </div>
  );
}

export default App;
