import React from "react";

const User = ({ users, deleteHandler }) => {
  return (
    <>
      {users.map((user) => (
        <div key={user.id}>
          {user.name}
          <div>
            <button onClick={() => deleteHandler(user.id)}>Delete</button>
          </div>
        </div>
      ))}
    </>
  );
};

export default User;
