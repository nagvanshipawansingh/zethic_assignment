import React from 'react';
import { useSelector } from 'react-redux';
import './FilterUserByManufacturer.css';

function FilterUserByManufacturer() {
  const userData = useSelector((state) => state.data.filteredUserByCarDetails);
  console.log(userData);
  return (
    <div className="main">
      <div className="carManufacturer">
        <h2>List of Users</h2>
      </div>
      {userData.map((user) => {
        return (
          <div key={userData.id} className="userName">
            <h4>{`${user.username.firstname} ${user.username.lastname}`}</h4>
            <h4> Email: {user.email}</h4>
          </div>
        );
      })}
    </div>
  );
}

export default FilterUserByManufacturer;
