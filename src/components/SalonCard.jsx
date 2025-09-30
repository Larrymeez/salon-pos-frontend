import React from "react";

export default function SalonCard({ salon }) {
  return (
    <div className="bg-white shadow-md rounded p-4 hover:scale-105 transition-transform">
      <h2 className="text-lg font-semibold">{salon.name}</h2>
      <p className="text-gray-600">{salon.location}</p>
    </div>
  );
}
