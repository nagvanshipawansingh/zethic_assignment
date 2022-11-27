import React from 'react';
import { useOnClickOutside } from '../../Hooks/useOnClickOutside';

const userAgeRange = [
  {
    min: 20,
    max: 30
  },
  {
    min: 31,
    max: 40
  },
  {
    min: 41,
    max: 50
  },
  {
    min: 51,
    max: 60
  },
  {
    min: 61,
    max: 70
  },
  {
    min: 71,
    max: 80
  },
  {
    min: 81,
    max: 90
  }
];

const Filter = () => {
  const [showFilterOption, setShowFilterOption] = React.useState(false);
  const filterRef = React.useRef();
  useOnClickOutside(filterRef, () => {
    setShowFilterOption(false);
  });

  return (
    <div className="headerFilter">
      <div onClick={() => setShowFilterOption(!showFilterOption)}>FILTER</div>
      {showFilterOption ? (
        <div className="filterOptions" ref={filterRef}>
          <div className="filterInfo">
            <h3>Filter options</h3>
          </div>

          <div className="filterOptionAge">
            {userAgeRange.map((range) => {
              const rangeText = `${range.min} - ${range.max}`;
              return <div key={rangeText}>{rangeText}</div>;
            })}
          </div>
        </div>
      ) : (
        <React.Fragment />
      )}
    </div>
  );
};

export default Filter;
