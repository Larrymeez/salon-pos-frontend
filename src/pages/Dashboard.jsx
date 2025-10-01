import React from "react";
import { Link } from "react-router-dom";

const Dashboard = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Header with interactive logo */}
      <div className="flex items-center gap-4 mb-8">
        {/* Logo that switches in light/dark mode */}
        <img
          src="/logo-light.png"
          alt="Groomly Logo"
          className="w-40 h-40 dark:hidden transition-transform duration-300 hover:scale-110"
        />
        <img
          src="/logo-dark1.png"
          alt="Groomly Logo"
          className="w-40 h-40 hidden dark:block transition-transform duration-300 hover:scale-110"
        />

      </div>

      {/* Welcome text */}
      <p className="text-lg text-gray-700 dark:text-gray-300 mb-8">
        Welcome to <span className="font-semibold">Groomly</span> – your modern salon management system.
      </p>

      {/* Quick stats */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-blue-500">12</h2>
          <p className="text-gray-700 dark:text-gray-300">Services</p>
          <Link to="/services" className="text-sm text-blue-500 hover:underline">
            View Services
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-green-500">8</h2>
          <p className="text-gray-700 dark:text-gray-300">Appointments</p>
          <Link to="/appointments" className="text-sm text-green-500 hover:underline">
            View Appointments
          </Link>
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300">
          <h2 className="text-2xl font-bold text-purple-500">5</h2>
          <p className="text-gray-700 dark:text-gray-300">Users</p>
          <Link to="/users" className="text-sm text-purple-500 hover:underline">
            View Users
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
