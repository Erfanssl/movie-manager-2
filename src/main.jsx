import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from "react-router-dom";
import Main from './App';
import '../node_modules/bootstrap/dist/css/bootstrap.css';
import './scss/index.scss';

createRoot(document.getElementById('root')).render(
  <StrictMode>
      <BrowserRouter>
          <Main />
      </BrowserRouter>
  </StrictMode>,
)
