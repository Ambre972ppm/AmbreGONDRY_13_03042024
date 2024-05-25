// App.jsx
import './index.css';
import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home/home';
import Login from './pages/Login/login';
import Profile from './pages/Profile/profile';
import store from './store/store';
import { Provider, useSelector } from 'react-redux';

// Protected route component
const PrivateRoute = ({ element, ...rest }) => {
  const token = useSelector((state) => state.token.token);
  return token ? element : <Navigate to="/sign-in" />;
};

const App = () => (
  <Provider store={store}>
    <React.StrictMode>
      <Router>
        <Routes>
          <Route path='/' element={<Home />} />
          <Route path='/sign-in' element={<Login />} />
          <Route path='/profile' element={<PrivateRoute element={<Profile />} />} />
        </Routes>
      </Router>
    </React.StrictMode>
  </Provider>
);

export default App;
