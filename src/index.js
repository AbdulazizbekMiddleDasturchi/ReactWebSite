import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import ContextAbdulazizbek from './Component/Context/Context';
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <ContextAbdulazizbek>
    <BrowserRouter>
    <App />
    </BrowserRouter>
    </ContextAbdulazizbek>
  </React.StrictMode>
);