// Navigation.jsx
// This component displays the main navigation bar and handles user authentication links.
// Props:
// - firstName: the first name of the user (for displaying when logged in)

import React from 'react';
import PropTypes from 'prop-types';
import { faCircleUser, faRightFromBracket } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useDispatch, useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { setUserToken } from "../../features/token";

import ArgentBankLogo from "../../assets/argentBankLogo.png";

const Navigation = (props) => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const token = useSelector((state) => state.token.token);

  const handleLogout = (e) => {
    e.preventDefault();

    dispatch(setUserToken(null));
    localStorage.removeItem('token');
    sessionStorage.removeItem('token');
    localStorage.removeItem('remember');

    navigate('/sign-in');
  }

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img className="main-nav-logo-image" src={ArgentBankLogo} alt="Argent Bank Logo" />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>
      <div>
        {token ? (
          <div style={{display: 'flex', gap: '10px'}}>
            <Link className="main-nav-item" to="/profile">
              <FontAwesomeIcon icon={faCircleUser} />
              {props.firstName}
            </Link>
            <Link className="main-nav-item" onClick={handleLogout} style={{ background: 'none', border: 'none', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px' }}>
              <FontAwesomeIcon icon={faRightFromBracket} />
              Sign Out
            </Link>
          </div>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <FontAwesomeIcon icon={faCircleUser} />
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

Navigation.propTypes = {
  firstName: PropTypes.string,
};

export default Navigation;
