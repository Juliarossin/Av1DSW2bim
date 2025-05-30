import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.jsx';
import './index.css';
import { FavoritosProvider } from './context/FavoritosContext.jsx'; // ⬅️ Importa o provider

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <FavoritosProvider> {/* ⬅️ Envolve seu App com o provider */}
      <App />
    </FavoritosProvider>
  </React.StrictMode>
);
