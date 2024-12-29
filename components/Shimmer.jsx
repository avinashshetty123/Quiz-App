import React from 'react';

const Shimmer = () => (
  <div className="relative overflow-hidden">
    <div className="bg-gray-200 rounded-lg w-full h-24">
      <div className="absolute top-0 left-[-100%] w-full h-full bg-gradient-to-r from-gray-300 via-gray-200 to-gray-300 animate-shimmer"></div>
    </div>
  </div>
);

export default Shimmer;
