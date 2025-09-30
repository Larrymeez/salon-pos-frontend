import React from "react";
import ServiceCard from "../components/ServiceCard.jsx";

const services = [
  { id: 1, name: "Haircut", description: "Basic men haircut", price: 15 },
  { id: 2, name: "Hair Coloring", description: "Full hair color", price: 50 },
];

const Services = () => {
  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Services</h1>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {services.map((service) => (
          <ServiceCard key={service.id} {...service} />
        ))}
      </div>
    </div>
  );
};

export default Services;
