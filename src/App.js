import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './Components/Navbar';
function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/"  />
        <Route path="/Acercade"  />
        <Route path="/Servicios"  />
        <Route path="/Educacion"  />
        <Route path="/Contacto"  />
      </Routes>
    </Router>
  );
}

export default App;
