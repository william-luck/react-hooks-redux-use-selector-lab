import React from "react";
// add any needed imports here
import { useSelector } from "react-redux";

function Users() {

  let users = useSelector(state => state.users)
  let userCount = useSelector(state => state.users.length)
  return (
    <div>
      <ul>
        Users!
        {/* Write code here that displays the usernames of all users in the Redux store */}
        {users.map(user => <p key={user.username}>{user.username}</p>)}
        <br></br>
        Total Users: {userCount}
        {/* In addition, display the total number of users curently in the store */}
      </ul>
    </div>
  );
}

export default Users;
