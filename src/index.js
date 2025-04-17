
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import { HelmetProvider } from 'react-helmet-async'; // ✅ Import this

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <HelmetProvider> {/* ✅ Wrap App in HelmetProvider */}
      <App />
    </HelmetProvider>
  </React.StrictMode>
);

reportWebVitals();
