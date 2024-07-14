import React from "react";
import usersData from "./database/usersData";

const UserList = () => {
  return (
    <div>
      <h1>User List</h1>
      <table>
        <thead>
          <tr>
            <th>Roll Number</th>
            <th>Name</th>
            <th>Marks</th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((usersData) => (
            <tr key={usersData.rollNumber}>
              <td>{usersData.rollNumber}</td>
              <td>{usersData.name}</td>
              <td>{usersData.marks}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
