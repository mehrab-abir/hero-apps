import React from "react";

const StatesSection = () => {
  return (
    <div className="bg-linear-to-b from-[#632EE3] to-[#9F62F2] py-11">
      <div className="w-[90%] mx-auto text-center">
        <h1 className="text-2xl font-bold text-white">
          Trusted by Millions, Built for You
        </h1>

        <div className="flex flex-col md:flex-row justify-between items-center gap-10 mt-5">
          <div>
            <p className="text-gray-200">Total Downloads</p>
            <h1 className="text-white font-bold text-3xl my-2">29.6M</h1>
            <p className="text-gray-200">21% more than last month</p>
          </div>

          <div>
            <p className="text-gray-200">Total Reviews</p>
            <h1 className="text-white font-bold text-3xl my-2">906K</h1>
            <p className="text-gray-200">46% more than last month</p>
          </div>
          <div>
            <p className="text-gray-200">Active Apps</p>
            <h1 className="text-white font-bold text-3xl my-2">132+</h1>
            <p className="text-gray-200">31 more will Launch</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default StatesSection;
