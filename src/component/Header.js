import React from 'react';
import './Header.css';
import { Link, useLocation } from 'react-router-dom';
import zethic from '../component/ZethicLogo/zethic.png';

function Header() {
  const location = useLocation();
  const injectActive = (pathname) => {
    if (location.pathname === pathname) return 'active';
  };
  return (
    <div className="header">
      <div className="zethicLogo">
        <div className="headerLogo">
          <img src={zethic} alt="" srcSet="" />
        </div>
        <h4>Assignment</h4>
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
