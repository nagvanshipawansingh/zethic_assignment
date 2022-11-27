import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { filterUserByManufacturer } from '../Redux/dataSlice';
import './CarManufacturerSidebar.css';

function CarManufacturerSidebar() {
  const countryData = useSelector((state) => state.data.chartDetails.carManufacturer);
  const carManufacturerName = useSelector((state) => state.data.carManufacturerName);
  const dispatch = useDispatch();
  console.log({ carManufacturerName });

  return (
    <div className="sidebar">
      <div className="carDetails">
        <div className="carDetails_heading">
          <h2>Car Details</h2>
        </div>
        {Object.keys(countryData).map((element, index) => {
          return (
            <div
              onClick={() => {
                dispatch(filterUserByManufacturer({ name: element }));
              }}
              className={`carDetails_maker ${
                element === carManufacturerName ? 'isActiveCarDetails' : ''
              }`}
              key={`${index}-${element}`}>
              <h3>{element}</h3>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default CarManufacturerSidebar;
