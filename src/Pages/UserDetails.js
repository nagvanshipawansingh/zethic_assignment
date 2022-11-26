import React from 'react';
import './UserDetails.css';
import { useSelector } from 'react-redux';

function UserDetails(propType) {
  const { showDiv, hideUseRef } = propType;
  const userDetailsClass = showDiv ? 'userDetailsAfter' : 'userDetailsBefore';
  const singleDetailsClass = showDiv ? 'singleDetailsAfter' : 'singleDetailsBefore';

  const useData = useSelector((state) => state.data.userDetais);

  return (
    <div className={userDetailsClass}>
      <div className={singleDetailsClass} ref={hideUseRef}>
        <div className="name">
          <h2>{`${useData?.username?.firstname} ${useData?.username?.lastname}`}</h2>
        </div>
        <div className="userNameDetails">
          <h4>
            Age: <span className="span">{useData?.age}</span>
          </h4>
          <h4>
            Email Id: <span className="span">{useData?.email}</span>
          </h4>
          <h4>
            Phone Number: <span className="span">{useData?.phoneNumber}</span>
          </h4>
          <h4>Occupation:</h4>
          <p>
            <strong>
              Job Descriptor: <span className="span">{useData?.occupation?.jobDescriptor}</span>
            </strong>
          </p>
          <p>
            <strong>
              Job Type: <span className="span">{useData?.occupation?.jobType}</span>
            </strong>
          </p>
          <p>
            <strong>
              Job Area: <span className="span">{useData?.occupation?.jobArea}</span>
            </strong>
          </p>
          <p>
            <strong>
              Title: <span className="span">{useData?.occupation?.title}</span>
            </strong>
          </p>

          <h4>Vehicle: </h4>
          <p>
            <strong>
              Age: <span className="span">{useData?.vehicle?.age}</span>
            </strong>
          </p>
          <p>
            <strong>
              Manufacturer: <span className="span">{useData?.vehicle?.manufacturer}</span>
            </strong>
          </p>
          <p>
            <strong>
              Model: <span className="span">{useData?.vehicle?.model}</span>
            </strong>
          </p>
          <h4>Address:</h4>
          <p>
            <strong>
              Street: <span className="span">{useData?.address?.street}</span>
            </strong>
          </p>
          <p>
            <strong>
              City: <span className="span">{useData?.address?.city}</span>
            </strong>
          </p>
          <p>
            <strong>
              State: <span className="span">{useData?.address?.state}</span>
            </strong>
          </p>
          <p>
            <strong>
              Country: <span className="span">{useData?.address?.country}</span>
            </strong>
          </p>
          <p>
            <strong>
              Zip Code: <span className="span">{useData?.address?.zipCode}</span>
            </strong>
          </p>
        </div>
      </div>
    </div>
  );
}

export default UserDetails;
