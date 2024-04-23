import React from 'react';
import ReactDOM from 'react-dom'; // Corregido: Importa de 'react-dom' en lugar de 'react-dom/client'
import './index.css';
import Navbar from './Components/Navbar';
import Home from './Components/Home';
import Acercade from './Components/Acercade';
import Servicios from './Components/Servicios';
import Contacto from './Components/Contacto';
import Educacion from './Components/Educacion';
import Redes from './Components/Redes';
import Proyectos from './Components/Proyectos';
import Responsive from './Components/Responsive';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <>
      <Navbar/>
      <Home/>
      <Acercade />
      <Servicios/>
      <Educacion/>
      <Proyectos/>
      <Contacto/>
      <Redes/>
      <Responsive/>
  </>
);