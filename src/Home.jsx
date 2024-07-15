import React from "react";
import logo from '../assets/lords_logo.jpeg';
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <img src={logo} alt="Lords-logo Logo" className="h-200 w-200 ml-2" />

      <h1 className="text-3xl font-bold mb-4">Faculty Dashboard</h1>
      <div className="border border-black p-4 rounded-lg">
        <Link to="/students" className="text-blue-500 hover:text-red-500">
          View Previous Results
        </Link>
      </div>
    </div>
  );
};

export default Home;
