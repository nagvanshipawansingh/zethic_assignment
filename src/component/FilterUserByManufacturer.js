import React from 'react';
import { useSelector } from 'react-redux';
import './FilterUserByManufacturer.css';

function FilterUserByManufacturer() {
  const userData = useSelector((state) => state.data.filteredUserByCarDetails);
  console.log({ userData });
  return (
    <div className="main">
      <div className="carManufacturer">
        <h2>List of Users</h2>
      </div>
      <div className="userDetails">
        {userData.map((user) => {
          return (
            <div key={userData.id} className="user">
              <h4>{`${user.username.firstname} ${user.username.lastname} (${user.age})`}</h4>
              <div className="userEmail"> {`Email: ${user.email}`}</div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default FilterUserByManufacturer;
