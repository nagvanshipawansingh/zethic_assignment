import React, { useRef, useState } from 'react';
import './Sidebar.css';
import { useSelector } from 'react-redux';
import UserDetails from '../Pages/UserDetails';
import { useDispatch } from 'react-redux';
import { userData } from '../Redux/dataSlice';
import { useOnClickOutside } from '../Hooks/useOnClickOutside';
import { List } from 'react-virtualized';

function Sidebar() {
  const userName = useSelector((state) => state.data.initialData);
  const [showDiv, setShowdiv] = useState(false);

  const dispatch = useDispatch();

  const showUserDetails = (id) => {
    dispatch(userData(id));
    setShowdiv(true);
  };

  const hideUseRef = useRef();
  useOnClickOutside(hideUseRef, () => {
    setShowdiv(false);
  });
  return (
    <div className="sidebar">
      <div>
        <UserDetails showDiv={showDiv} hideUseRef={hideUseRef} />
      </div>

      <div className="sidebarUser">
        <div className="userList">
          <h2>User List</h2>
        </div>

        <List
          width={300}
          height={500}
          rowHeight={50}
          rowCount={userName.length}
          rowRenderer={({ index, style }) => {
            const person = userName[index];
            return (
              <div
                className="userName"
                key={person.id}
                style={style}
                onClick={() => showUserDetails(person.id)}>
                <h4>
                  {`${person.username.firstname} ${person.username.lastname} (${person.age})`}
                </h4>
              </div>
            );
          }}
        />
      </div>
    </div>
  );
}

export default Sidebar;
