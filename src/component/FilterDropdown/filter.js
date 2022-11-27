import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useOnClickOutside } from '../../Hooks/useOnClickOutside';
import { filter } from '../../Redux/dataSlice';
import './filter.css';

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

const generateText = (min, max) => `${min} - ${max}`;

const Filter = () => {
  const dispatch = useDispatch();
  const [showFilterOption, setShowFilterOption] = React.useState(false);
  const filterRef = React.useRef();
  const filterName = useSelector((state) => state.data.filterName);

  useOnClickOutside(filterRef, () => {
    setShowFilterOption(false);
  });

  const onFilter = (range) => (event) => {
    event.preventDefault();
    const rangeText = generateText(range.min, range.max);
    const payload = {
      min: range.min,
      max: range.max,
      name: rangeText
    };
    dispatch(filter(payload));
  };

  return (
    <div className="headerFilter">
      <div className="filterButton" onClick={() => setShowFilterOption(!showFilterOption)}>
        FILTER
      </div>
      {showFilterOption ? (
        <div className="filterOptions" ref={filterRef}>
          <div className="filterInfo">
            <h3>Filter options</h3>
            <h5>{`(User age range)`}</h5>
          </div>

          <div className="filterOptionAge">
            {userAgeRange.map((range) => {
              const rangeText = generateText(range.min, range.max);
              return (
                <h4
                  onClick={onFilter(range)}
                  key={rangeText}
                  className={filterName === rangeText ? 'activeAge' : ''}>
                  {rangeText}
                </h4>
              );
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
