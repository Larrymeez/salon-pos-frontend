import React from "react";

const ServiceCard = ({ name, description, price }) => {
  return (
    <div className="bg-white dark:bg-gray-800 shadow-md rounded-lg p-4 w-64">
      <h3 className="text-gray-900 dark:text-gray-100 font-bold text-xl">{name}</h3>
      <p className="text-gray-700 dark:text-gray-300 mt-2">{description}</p>
      <p className="text-gray-900 dark:text-gray-100 font-semibold mt-4">${price}</p>
      <button className="mt-4 px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600">
        Book
      </button>
    </div>
  );
};

export default ServiceCard;
