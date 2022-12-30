import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';

function Appsin() {
  return (
    <h1 id='title'>
      Oli React
    </h1>
  );
}

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    // <App saludito='1 saludito'/>
    <App saludo='holi'>
    {/* Esto es mala practica btw */}
      <h1>Esto es un titulo</h1>
      {/* Esto es la propiedad children */}
    </App>
);
