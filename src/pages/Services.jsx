import React, { useEffect, useState } from "react";
import ServiceCard from "../components/ServiceCard.jsx";

const Services = () => {
  const [services, setServices] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchServices = async () => {
      try {
        const res = await fetch("http://localhost:5000/services"); // your backend port
        if (!res.ok) {
          throw new Error("Failed to fetch services");
        }
        const data = await res.json();
        setServices(data);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchServices();
  }, []);

  if (loading) return <p className="text-center text-gray-600">Loading services...</p>;
  if (error) return <p className="text-center text-red-500">Error: {error}</p>;

  return (
    <div className="p-6 bg-gray-50 dark:bg-gray-900 min-h-screen">
      <h1 className="text-3xl font-bold mb-6 text-gray-900 dark:text-gray-100">Services</h1>
      {services.length === 0 ? (
        <p className="text-gray-600 dark:text-gray-300">No services available.</p>
      ) : (
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {services.map((service) => (
            <ServiceCard
              key={service.id}
              name={service.name}
              description={service.description}
              price={service.price}
            />
          ))}
        </div>
      )}
    </div>
  );
};

export default Services;
