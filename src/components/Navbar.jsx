import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx";

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-3 py-2 rounded-md"
      : "text-gray-700 dark:text-gray-200 hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md";

  return (
    <nav className="bg-gray-100 dark:bg-gray-900 p-4 flex gap-4 items-center">
      <NavLink to="/" className={linkClass}>Dashboard</NavLink>
      <NavLink to="/services" className={linkClass}>Services</NavLink>
      <NavLink to="/appointments" className={linkClass}>Appointments</NavLink>
      <NavLink to="/users" className={linkClass}>Users</NavLink>

      {/* Dark Mode Toggle */}
      <button
        onClick={toggleTheme}
        className="ml-auto px-3 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
      >
        {theme === "light" ? "Dark Mode" : "Light Mode"}
      </button>
    </nav>
  );
};

export default Navbar;

