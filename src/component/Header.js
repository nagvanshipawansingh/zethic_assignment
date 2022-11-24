import React from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <div className="header">
      <div className="charts">
        <div className="headerHome">
          <Link to="/">HOME</Link>
        </div>
        <div className="filter">FILTER</div>
      </div>
    </div>
  );
}

export default Header;
