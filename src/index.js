import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';  // Importuj BrowserRouter
import './style.css';  // Stilizacija
import App from './App';  // Glavna aplikacija

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <BrowserRouter> {/* Wrap entire app with BrowserRouter */}
      <App />
    </BrowserRouter>
  </React.StrictMode>
);