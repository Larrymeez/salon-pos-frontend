import React from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";

// Dummy appointment data
const data = [
  { day: "Mon", appointments: 3 },
  { day: "Tue", appointments: 5 },
  { day: "Wed", appointments: 2 },
  { day: "Thu", appointments: 7 },
  { day: "Fri", appointments: 4 },
  { day: "Sat", appointments: 6 },
  { day: "Sun", appointments: 1 },
];

const AppointmentsChart = () => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-xl p-6 mt-8">
      <h2 className="text-xl font-bold mb-4 text-gray-900 dark:text-gray-100">
        Appointments This Week
      </h2>
      <ResponsiveContainer width="100%" height={300}>
        <LineChart data={data}>
          <CartesianGrid strokeDasharray="3 3" stroke="#ccc" />
          <XAxis dataKey="day" stroke="#888" />
          <YAxis stroke="#888" />
          <Tooltip />
          <Line
            type="monotone"
            dataKey="appointments"
            stroke="#3b82f6" // Tailwind blue-500
            strokeWidth={3}
            dot={{ r: 5 }}
          />
        </LineChart>
      </ResponsiveContainer>
    </div>
  );
};

export default AppointmentsChart;
