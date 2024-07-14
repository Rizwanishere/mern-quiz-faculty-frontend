import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Home";
import UserList from "./UserList";
import UserDetails from "./UserDetails";

const App = () => {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/students" element={<UserList />} />
        <Route path="/students/:rollNumber" element={<UserDetails />} />
      </Routes>
    </Router>
  );
};

export default App;
