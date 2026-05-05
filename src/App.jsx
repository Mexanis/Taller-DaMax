import React from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import { Car, Droplets, PenTool, Wrench } from 'lucide-react';

import Navbar from './components/layout/Navbar';
import Footer from './components/layout/Footer';
import Home from './pages/Home';
import CarWashing from './pages/CarWashing';
import PaintingBody from './pages/PaintingBody';
import Mechanical from './pages/Mechanical';
import VehicleSelling from './pages/VehicleSelling';

function App() {
  return (
    <Router>
      <Navbar />
      <main style={{ flex: 1 }}>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/lavado" element={<CarWashing />} />
          <Route path="/chapa-pintura" element={<PaintingBody />} />
          <Route path="/mecanica" element={<Mechanical />} />
          <Route path="/venta" element={<VehicleSelling />} />
        </Routes>
      </main>
      <Footer />
    </Router>
  );
}

export default App;
