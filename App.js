import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import "font-awesome/css/font-awesome.min.css";

import Home from "./Home.js";
import Contact from "./Contact.js";
import Profile from "./Profile.js";
import "./App.css";

function App() {
  const [searchActive, setSearchActive] = useState(false);

  const toggleSearch = () => {
    setSearchActive(!searchActive);
  };

  return (
    <Router>
      <header className="navbar">
        <div className="logo">QuickRent</div>
        <div className="nav-links">
          <Link to="/" className="nav-btn">
            Home
          </Link>
          <Link to="/contact" className="nav-btn">
            Contact
          </Link>
          <Link to="/profile" className="nav-btn">
            Profile
          </Link>
          <button className="search-btn" onClick={toggleSearch}>
            <i className="fa fa-search"></i>
          </button>
        </div>
        {searchActive && (
          <div className="search-bar">
            <input type="text" placeholder="Search..." />
          </div>
        )}
      </header>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/profile" element={<Profile />} />
      </Routes>
    </Router>
  );
}

export default App;
