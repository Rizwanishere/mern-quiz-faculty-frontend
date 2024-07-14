import React from "react";
import { useNavigate } from "react-router-dom";
import usersData from "./database/usersData";

const UserList = () => {
  const navigate = useNavigate();

  const handleRowClick = (rollNumber) => {
    navigate(`/students/${rollNumber}`);
  };

  return (
    <div>
      <h1 className="text-2xl font-bold mb-4 text-center mt-4">Students List</h1>
      <table className="table-auto w-full border-collapse border border-gray-200">
        <thead>
          <tr className="bg-gray-200">
            <th className="border border-gray-300 px-4 py-2 text-center">
              Roll Number
            </th>
            <th className="border border-gray-300 px-4 py-2 text-left">Name</th>
            <th className="border border-gray-300 px-4 py-2 text-center">
              Marks (out of 5)
            </th>
          </tr>
        </thead>
        <tbody>
          {usersData.map((user) => (
            <tr
              key={user.rollNumber}
              className="hover:bg-gray-100 cursor-pointer"
              onClick={() => handleRowClick(user.rollNumber)}
            >
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.rollNumber}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-left">
                {user.name}
              </td>
              <td className="border border-gray-300 px-4 py-2 text-center">
                {user.marks}
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default UserList;
