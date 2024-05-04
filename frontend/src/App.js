import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
import Home from './Pages/Home';
import About from './Pages/About';
import Services from './Pages/Services';
import Contact from './Pages/Contact';
import Footer from './Components/Footer';
import PricePrediction from './Components/PricePrediction';
import District from './Components/District';
import Weather from './Components/Weather.js';

function App() {
  return (
    <Router>
      <div className="w-full" style={{ fontFamily: 'Corporate S Bold' }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/prediction" element={<PricePrediction />} />
          <Route path="/district" element={<District />} />
          <Route path="/weather" element={<Weather />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}



export default App;
