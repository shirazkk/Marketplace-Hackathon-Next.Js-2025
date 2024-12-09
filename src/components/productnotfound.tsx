import React from "react";
import { FaShoppingCart, FaSadTear } from "react-icons/fa";

const ProductNotFound = () => {
  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-yellow-100 to-orange-100">
      <div className="text-center p-8 bg-white rounded-lg shadow-2xl">
        <div className="flex items-center justify-center space-x-4 mb-6">
          <FaShoppingCart className="text-6xl text-yellow-600" />
          <FaSadTear className="text-6xl text-orange-600" />
        </div>
        <div className="text-4xl font-bold text-gray-800 mb-4">
          Product Not Found
        </div>
        <p className="text-gray-600 text-lg">
          Sorry, we couldn&apos;t find any products matching your search.
        </p>
      </div>
    </div>
  );
};

export default ProductNotFound;
