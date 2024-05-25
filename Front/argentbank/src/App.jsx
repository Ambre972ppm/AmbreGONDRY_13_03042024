// App.jsx
// This is the main application component that sets up routing and Redux provider.

import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Profile from './pages/Profile/profile';
import store from './store/store';
import { Provider } from 'react-redux';

const App = () => (
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/profile' element={<Profile />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);

export default App;
