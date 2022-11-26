import React, { useState, useEffect, useRef } from 'react';
import './Header.css';
import { Link } from 'react-router-dom';

function Header() {
  const [showFilterOption, setShowFilterOption] = useState(false);
  const filterData = () => {
    setShowFilterOption(!showFilterOption);
  };

  const hideUseRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (hideUseRef.current && !hideUseRef.current.contains(event.target)) {
        setShowFilterOption(false);
      }
    }
    // Bind the event listener
    document.addEventListener('mousedown', handleClickOutside, false);
    return () => {
      // Unbind the event listener on clean up
      document.removeEventListener('mousedown', handleClickOutside, false);
    };
  }, []);
  return (
    <div className="header">
      {/* <div className="headerTitle">
        <h2>ZETHIC Assignment</h2>
      </div> */}
      <div className="charts">
        <div className="headerHome">
          <Link to="/">HOME</Link>
        </div>
        <div className="headerFilter">
          <div onClick={() => filterData()}> FILTER</div>
          {showFilterOption ? (
            <div className="filterOptions" ref={hideUseRef}>
              <div className="filterInfo">
                <h3>Filter options</h3>
                <p>(User age - range)</p>
              </div>

              <div className="filterOptionAge">
                <h4>20 - 30</h4>
                <h4>31 - 40</h4>
                <h4>41 - 50</h4>
                <h4>51 - 60</h4>
                <h4>61 - 70</h4>
                <h4>71 - 80</h4>
                <h4>81 - 90</h4>
              </div>
            </div>
          ) : null}
        </div>
      </div>
    </div>
  );
}

export default Header;
