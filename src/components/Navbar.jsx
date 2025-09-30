
import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = () => {
  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-3 py-2 rounded-md"
      : "text-gray-700 hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md";

  return (
    <nav className="bg-gray-100 p-4 flex gap-4">
      <NavLink to="/" className={linkClass}>Dashboard</NavLink>
      <NavLink to="/services" className={linkClass}>Services</NavLink>
      <NavLink to="/appointments" className={linkClass}>Appointments</NavLink>
      <NavLink to="/users" className={linkClass}>Users</NavLink>
    </nav>
  );
};

export default Navbar;
