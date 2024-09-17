import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import Router from './routes/Router';
import './assets/reset.css';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Router />
  </StrictMode>,
);
