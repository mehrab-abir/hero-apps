import React, { useState } from "react";
import SingleApp from "./SingleApp";
import useAppData from "../Hooks/useAppData";
import { BallTriangle } from "react-loader-spinner";

const Apps = () => {
  const [apps, loading] = useAppData();
  const [searchValue, setSearchValue] = useState("");

  if (loading) {
    return (
      <div className="flex items-center justify-center h-screen">
        <BallTriangle
          height={100}
          width={300}
          radius={5}
          color="#632EE3"
          ariaLabel="ball-triangle-loading"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
        />
      </div>
    );
  }

  const searchInput = searchValue.trim().toLowerCase();
  const foundApps = searchInput
    ? apps.filter((app) => app.title.toLowerCase().includes(searchInput))
    : apps;

  const noAppFound = (
    <div className="h-screen flex justify-center mt-20">
      <h1 className="text-xl font-bold">No App Found. Try Something Else.</h1>
    </div>
  );

  return (
    <div className="bg-gray-100 py-9">
      <div className="w-[90%] mx-auto py-5">
        <h1 className="text-4xl font-bold text-center">Our All Applications</h1>
        <p className="text-center mt-3 text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex flex-col md:flex-row justify-between items-center mt-5">
          <p className="text-lg font-bold mb-4 md:mb-0">
            ({foundApps.length}) Apps found
          </p>

          <label className="input">
            <svg
              className="h-[1em] opacity-50"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
            >
              <g
                strokeLinejoin="round"
                strokeLinecap="round"
                strokeWidth="2.5"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </g>
            </svg>
            <input
              type="search"
              value={searchValue}
              onChange={(e) => setSearchValue(e.target.value)}
              required
              placeholder="Search"
            />
          </label>
        </div>

        {foundApps.length >= 1 ? (
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-4">
            {foundApps.map((app) => {
              return <SingleApp key={app.id} app={app}></SingleApp>;
            })}
          </div>
        ) : (
          noAppFound
        )}
      </div>
    </div>
  );
};

export default Apps;
