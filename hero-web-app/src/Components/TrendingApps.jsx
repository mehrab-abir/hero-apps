import React from "react";
import useAppData from "../Hooks/useAppData";
import SingleApp from "./SingleApp";
import { Link } from "react-router";

const TrendingApps = () => {
  const [apps, loading] = useAppData();

  if (loading) {
    return <p>Loading....</p>;
  }
  // console.log(apps);
  const trendingApps = apps.slice(0, 8);
  return (
    <div className="bg-gray-100 py-9">
      <div className="w-[90%] mx-auto py-5">
        <h1 className="text-4xl font-bold text-center">Trending Apps</h1>
        <p className="text-center mt-3 text-gray-400">
          Explore All Trending Apps on the Market developed by us
        </p>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mt-8">
          {trendingApps.map((app) => {
            return <SingleApp key={app.id} app={app}></SingleApp>;
          })}
        </div>

        <div className="flex items-center justify-center mt-7">
          <Link
            to="/apps"
            className="btn border-none text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transition-all"
          >
            Show All
          </Link>
        </div>
      </div>
    </div>
  );
};

export default TrendingApps;
