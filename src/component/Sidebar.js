import React, { useEffect, useRef, useState } from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import { List } from 'react-virtualized';
import UserDetails from '../Pages/UserDetails';
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/dataSlice';

function Sidebar() {
  const userName = useSelector((state) => state.data.initialData);
  console.log(userName);
  const [showDiv, setShowdiv] = useState(false);

  const dispatch = useDispatch();

  const showUserDetails = (id) => {
    dispatch(userData(id));
    console.log(id);
    setShowdiv(true);
  };

  const hideUseRef = useRef();
  useEffect(() => {
    function handleClickOutside(event) {
      if (hideUseRef.current && !hideUseRef.current.contains(event.target)) {
        setShowdiv(false);
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
    <>
      <div>
        <UserDetails showDiv={showDiv} hideUseRef={hideUseRef} />
      </div>

      <div className="sidebar">
        <div className="userList">
          <h2>User List</h2>
        </div>

        <List
          width={300}
          height={600}
          rowHeight={40}
          rowCount={userName.length}
          rowRenderer={({ key, index, style, parent }) => {
            const person = userName[index];

            return (
              <div
                className="userName"
                key={person.id}
                style={style}
                onClick={() => showUserDetails(person.id)}
              >
                <h4>
                  {`${person.username.firstname} ${person.username.lastname} (${person.age})`}
                </h4>
              </div>
            );
          }}
        ></List>

        {/* {
     userName.map((data) => {
       return  <div className='userName' key={data.id}>
       <NavLink to='/userdetails'><h4>{data.username.firstname} {data.username.firstname}</h4></NavLink>
       </div>
     })
   } */}
      </div>
    </>
  );
}

export default Sidebar;
