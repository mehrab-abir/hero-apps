import React from "react";
import { FaStar } from "react-icons/fa6";
import { PiDownloadSimple } from "react-icons/pi";
import { Link } from "react-router";

const SingleApp = ({ app }) => {
  const { image, title, ratingAvg, downloads } = app;
  return (
    <Link to={`/appdetails/${app.id}`}>
      <div className="appCard p-2 bg-white rounded-md">
        <img src={image} alt="" className="rounded-md" />
        <h2 className="text-xl font-bold py-1">{title}</h2>
        <div className="flex justify-between items-center py-1">
          <span className="bg-gray-100 px-2 flex items-center gap-2 rounded-sm">
            <span>
              <PiDownloadSimple className="text-green-400 font-semibold" />
            </span>
            <span className="text-green-400 font-semibold">{downloads}</span>
          </span>
          <span className="bg-orange-100 px-2 flex items-center gap-2 rounded-sm">
            <span>
              <FaStar className="text-orange-400" />
            </span>
            <span className="text-orange-400">{ratingAvg}</span>
          </span>
        </div>
      </div>
    </Link>
  );
};

export default SingleApp;
