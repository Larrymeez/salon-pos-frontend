import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Line } from "react-chartjs-2";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend } from "chart.js";
import Calendar from "react-calendar";
import 'react-calendar/dist/Calendar.css';

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Legend);

const Dashboard = () => {
  const [date, setDate] = useState(new Date());

  // Sample stats
  const stats = [
    { label: "Services", value: 12, color: "blue", link: "/services" },
    { label: "Appointments", value: 8, color: "green", link: "/appointments" },
    { label: "Users", value: 5, color: "purple", link: "/users" },
    { label: "Revenue ($)", value: 1200, color: "yellow", link: "#" },
  ];

  // Sample chart data
  const chartData = {
    labels: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
    datasets: [
      {
        label: "Appointments",
        data: [3, 5, 2, 8, 4, 6, 7],
        borderColor: "rgb(34, 197, 94)",
        backgroundColor: "rgba(34, 197, 94, 0.2)",
      },
      {
        label: "Revenue",
        data: [200, 450, 150, 700, 300, 600, 500],
        borderColor: "rgb(59, 130, 246)",
        backgroundColor: "rgba(59, 130, 246, 0.2)",
      },
    ],
  };

  // Sample recent appointments
  const recentAppointments = [
    { id: 1, customer: "John Doe", service: "Haircut", staff: "Alice", time: "10:00 AM" },
    { id: 2, customer: "Jane Smith", service: "Hair Coloring", staff: "Bob", time: "11:30 AM" },
    { id: 3, customer: "Mark Lee", service: "Beard Trim", staff: "Alice", time: "1:00 PM" },
  ];

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      {/* Stats cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 mb-8">
        {stats.map((stat) => (
          <div key={stat.label} className={`bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 text-center hover:shadow-lg transition-shadow duration-300`}>
            <h2 className={`text-2xl font-bold text-${stat.color}-500`}>{stat.value}</h2>
            <p className="text-gray-700 dark:text-gray-300">{stat.label}</p>
            {stat.link && (
              <Link to={stat.link} className={`text-sm text-${stat.color}-500 hover:underline`}>
                View {stat.label}
              </Link>
            )}
          </div>
        ))}
      </div>

      {/* Charts & Calendar */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-8">
        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Weekly Trends</h3>
          <Line data={chartData} />
        </div>

        <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
          <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Calendar</h3>
          <Calendar
            onChange={setDate}
            value={date}
            className="dark:text-gray-100"
          />
          <p className="mt-2 text-gray-700 dark:text-gray-300">Selected Date: {date.toDateString()}</p>
        </div>
      </div>

      {/* Recent Appointments */}
      <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6">
        <h3 className="text-xl font-semibold mb-4 text-gray-900 dark:text-gray-100">Recent Appointments</h3>
        <table className="w-full text-left border-collapse">
          <thead>
            <tr>
              <th className="border-b p-2 text-gray-700 dark:text-gray-300">Customer</th>
              <th className="border-b p-2 text-gray-700 dark:text-gray-300">Service</th>
              <th className="border-b p-2 text-gray-700 dark:text-gray-300">Staff</th>
              <th className="border-b p-2 text-gray-700 dark:text-gray-300">Time</th>
            </tr>
          </thead>
          <tbody>
            {recentAppointments.map((appt) => (
              <tr key={appt.id} className="hover:bg-gray-100 dark:hover:bg-gray-700">
                <td className="p-2">{appt.customer}</td>
                <td className="p-2">{appt.service}</td>
                <td className="p-2">{appt.staff}</td>
                <td className="p-2">{appt.time}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Dashboard;
