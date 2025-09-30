
import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar.jsx";
import Dashboard from "./pages/Dashboard.jsx";

const App = () => {
  return (
    <Router>
      <Navbar />
      <div className="container mx-auto mt-6">
        <Routes>
          <Route path="/" element={<Dashboard />} />
          {/* We'll add Services, Appointments, Users routes later */}
        </Routes>
      </div>
    </Router>
  );
};

export default App;
