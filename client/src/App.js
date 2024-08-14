import React from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from "react-router-dom";
import './App.css';
import Home from './pages/Home.js';
import Garden from './pages/Garden.js';
import Brewery from './pages/Brewery.js';
import Shop from './pages/Shop.js';

function App() {
  return (
    <div className="App">
      <Router>
        <div className="navbar">
          <Link to="/" className="link">Home</Link>
          <Link to="/garden" className="link">Garden</Link>
          <Link to="/brewery" className="link">Brewery</Link>
          <Link to="/shop" className="link">Shop</Link>
        </div>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/garden" element={<Garden />} />
          <Route path="/brewery" element={<Brewery />} />
          <Route path="/shop" element={<Shop />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
