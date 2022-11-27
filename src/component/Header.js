import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';

function Header() {
  const location = useLocation();
  const injectActive = (pathname) => {
    if (location.pathname === pathname) return 'active';
  };
  return (
    <div className="header">
      <div className="headerLogo">
        <h2>Zethic Assignment</h2>
      </div>
      <div className="headerHome">
        <Link to="/" className={injectActive('/')}>
          Home
        </Link>
        <Link to="/car" className={injectActive('/car')}>
          Car Details
        </Link>
      </div>
    </div>
  );
}

export default Header;
