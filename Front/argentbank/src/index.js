// index.js
// Entry point for the React application. Renders the App component into the DOM.

import React from 'react';
import ReactDOM from 'react-dom';
import App from './App.jsx';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
