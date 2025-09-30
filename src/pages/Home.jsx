import React from "react";
import SalonCard from "../components/SalonCard";

export default function Home() {
  const sampleSalons = [
    { id: 1, name: "Downtown Salon", location: "Nairobi" },
    { id: 2, name: "Uptown Salon", location: "Nairobi" },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
      {sampleSalons.map((salon) => (
        <SalonCard key={salon.id} salon={salon} />
      ))}
    </div>
  );
}
