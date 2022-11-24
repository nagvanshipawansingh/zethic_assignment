import React from "react";
import "./UserDetails.css";
import { useSelector } from "react-redux";

function UserDetails(props) {
  const { showDiv, hideUseRef } = props;
  const userDetailsClass = showDiv ? "userDetailsAfter" : "userDetailsBefore";
  const singleDetailsClass = showDiv
    ? "singleDetailsAfter"
    : "singleDetailsBefore";

  const useData = useSelector((state) => state.data.userDetais);

  return (
    <div className={userDetailsClass}>
      <div className={singleDetailsClass} ref={hideUseRef}>
        <div className="name">
          <h2>{`${useData?.username?.firstname} ${useData?.username?.lastname}`}</h2>
        </div>
        <div className="userNameDetails">
          <h4>Age: {useData?.age}</h4>
          <h4>Email Id: {useData?.email}</h4>
          <h4>Phone Number: {useData?.phoneNumber}</h4>
          <h4>Occupation:</h4>
          <p><strong>Job Descriptor: {useData?.occupation?.jobDescriptor}</strong></p>
          <p><strong>Job Type: {useData?.occupation?.jobType}</strong></p>
          <p><strong>Job Area: {useData?.occupation?.jobArea}</strong></p>
          <p><strong>Title: {useData?.occupation?.title}</strong></p>

          <h4>Vehicle: </h4>
          <p><strong>Age: {useData?.vehicle?.age}</strong></p>
          <p><strong>Manufacturer: {useData?.vehicle?.manufacturer}</strong></p>
          <p><strong>Model: {useData?.vehicle?.model}</strong></p>
          <h4>Address:</h4>
          <p><strong>Street: {useData?.address?.street}</strong></p>
          <p><strong>City: {useData?.address?.city}</strong></p>
          <p><strong>State: {useData?.address?.state}</strong></p>
          <p><strong>Country: {useData?.address?.country}</strong></p>
          <p><strong>Zip Code: {useData?.address?.zipCode}</strong></p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
