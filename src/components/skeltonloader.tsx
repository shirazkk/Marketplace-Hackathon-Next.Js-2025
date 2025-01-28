import React from "react";

const Skeleton = () => {
  const skeletonArray = Array.from({ length: 13 }); // Adjust the length based on the number of products to show during loading.

  return (
    <div className="px-4 py-14 max-w-[1500px] mx-auto">
      {/* Skeleton Products Grid */}
      <div className="w-[85%] mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-7">
        {skeletonArray.map((_, index) => (
          <div key={index} className="flex flex-col">
            <div className="w-full h-64 bg-gray-300 rounded-lg animate-pulse relative"></div>
            <div className="mt-4 space-y-2">
              <div className="h-4 w-3/4 bg-gray-300 rounded-md animate-pulse"></div>
              <div className="flex items-center justify-between">
                <div className="space-y-1">
                  <div className="h-4 w-1/3 bg-gray-300 rounded-md animate-pulse"></div>
                  <div className="h-3 w-1/2 bg-gray-300 rounded-md animate-pulse"></div>
                </div>
                <div className="h-8 w-8 bg-gray-300 rounded-md animate-pulse"></div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skeleton;
