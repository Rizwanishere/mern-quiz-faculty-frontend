import React from "react";
import { useParams, Link } from "react-router-dom";
import usersData from "./database/usersData";

const UserDetails = () => {
  const { rollNumber } = useParams();
  const student = usersData.find((user) => user.rollNumber === rollNumber);

  if (!student) {
    return <div>Student not found</div>;
  }

  return (
    <div>
      <h1 className="text-2xl font-bold m-2">
        Answers by {student.name}
        <Link
          to="/students"
          className="ml-20 text-lg p-1 text-black border rounded border-black"
        >
          Back to Students List
        </Link>
      </h1>

      <ol className="list-decimal pl-5">
        {student.questions.map((q, index) => (
          <li key={index} className="mb-2">
            {q.question} - <span className="text-red-500">{q.selected}</span>
          </li>
        ))}
      </ol>
    </div>
  );
};

export default UserDetails;
