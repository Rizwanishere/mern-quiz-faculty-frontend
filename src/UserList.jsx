import React from "react";
import usersData from "./database/usersData";

const UserList = () => {
  return (
    <div className="container mx-auto mt-10">
      <h1 className="text-3xl font-bold mb-6 text-center">User List</h1>
      <div className="overflow-x-auto">
        <table className="min-w-full bg-white border border-gray-200 shadow-md">
          <thead>
            <tr className="bg-gray-200">
              <th className="py-2 px-4 border-b border-r text-center">
                Roll Number
              </th>
              <th className="py-2 px-4 border-b border-r text-center">Name</th>
              <th className="py-2 px-4 border-b text-center">Marks</th>
            </tr>
          </thead>
          <tbody>
            {usersData.map((user) => (
              <tr key={user.rollNumber} className="hover:bg-gray-100">
                <td className="py-2 px-4 border-b border-r text-center">
                  {user.rollNumber}
                </td>
                <td className="py-2 px-4 border-b border-r text-left">
                  {user.name}
                </td>
                <td className="py-2 px-4 border-b text-center">{user.marks}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default UserList;
