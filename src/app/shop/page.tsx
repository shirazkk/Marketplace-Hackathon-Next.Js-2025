import React from "react";
import { FaStore, FaTools } from "react-icons/fa"; // Import icons from react-icons

const Shop = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-100 to-purple-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <FaStore className="text-6xl text-blue-600" />
          <FaTools className="text-6xl text-purple-600" />
        </div>
        <div className="text-4xl font-bold text-gray-800 mb-4">
          Our Shop Will Be Coming Soon!
        </div>
        <p className="text-gray-600 text-lg">
          We&apos;re working hard to bring you an amazing shopping experience
        </p>
      </div>
    </div>
  );
};

export default Shop;
