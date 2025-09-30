import React, { useContext } from "react";
import { NavLink } from "react-router-dom";
import { ThemeContext } from "../context/ThemeContext.jsx"; 

const Navbar = () => {
  const { theme, toggleTheme } = useContext(ThemeContext);

  const linkClass = ({ isActive }) =>
    isActive
      ? "text-white bg-blue-500 px-3 py-2 rounded-md"
      : "text-gray-700 hover:text-white hover:bg-blue-400 px-3 py-2 rounded-md";

  return (
    <nav className="bg-gray-100 dark:bg-gray-800 p-4 flex justify-between items-center">
      <div className="flex gap-4">
        <NavLink to="/" className={linkClass}>Dashboard</NavLink>
        <NavLink to="/services" className={linkClass}>Services</NavLink>
        <NavLink to="/appointments" className={linkClass}>Appointments</NavLink>
        <NavLink to="/users" className={linkClass}>Users</NavLink>
      </div>

      {/* Dark/Light toggle */}
      <button
        onClick={toggleTheme}
        className="px-3 py-1 rounded bg-gray-200 dark:bg-gray-700 text-gray-800 dark:text-gray-100"
      >
        {theme === "dark" ? "Light Mode" : "Dark Mode"}
      </button>
    </nav>
  );
};

export default Navbar;
