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
          <h4>Age:</h4>
          <h4>Email Id:</h4>
          <h4>Phone Number:</h4>
          <h4>Occupation:</h4>
          <p><strong>Job Descriptor :</strong></p>
          <p><strong>Job Type:</strong></p>
          <p><strong>Job Area:</strong></p>
          <p><strong>Title:</strong></p>

          <h4>Vehicle: </h4>
          <p><strong>Age:</strong></p>
          <p><strong>Manufacturer:</strong></p>
          <p><strong>Model:</strong></p>
          <h4>Address:</h4>
          <p><strong>Street:</strong></p>
          <p><strong>City:</strong></p>
          <p><strong>State:</strong></p>
          <p><strong>Country:</strong></p>
          <p><strong>Zip Code:</strong></p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
