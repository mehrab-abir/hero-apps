import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router";
import useAppData from "../Hooks/useAppData";
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { AiOutlineLike } from "react-icons/ai";
import {
  ResponsiveContainer,
  BarChart,
  Tooltip,
  Bar,
  XAxis,
  YAxis,
} from "recharts";
import { getInstalledApps, installApp } from "../utilities/localStorage";
import AppError from "../assets/App-Error.png";
import { BallTriangle } from "react-loader-spinner";
import { ToastContainer, toast, Bounce } from "react-toastify";

const AppDetails = () => {
  const { id } = useParams();
  // console.log(id)

  const [apps, loading] = useAppData();
  const [isInstalled, setIsInstalled] = useState(false);

  useEffect(() => {
    const storedIds = getInstalledApps();
    const installed = storedIds.includes(Number(id));
    setIsInstalled(installed);
  }, [id]);

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

  const currentApp = apps.find((app) => app.id === Number(id));

  if (!currentApp) {
    return (
      <div className="flex items-center justify-center mt-20 ml-20">
        <div className="h-screen flex flex-col items-center justify-center">
          <img src={AppError} alt="" className="w-3/4" />
          <h1 className="text-4xl font-bold text-center text-red-500">
            App Not Found
          </h1>
          <p className="mt-3 text-gray-500">
            The App you are looking for does not exist or has been removed
          </p>
          <Link
            to="/"
            className="btn bg-black text-white mt-3 hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    );
  }

  const ratingsData = [...currentApp.ratings].slice().reverse();

  const handleInstall = () => {
    if (!isInstalled) {
      installApp(currentApp.id);
      setIsInstalled(true);

      toast.success("App Installed", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
        theme: "colored",
        transition: Bounce,
      });
    }
  };

  return (
    <div className="bg-gray-100 py-9">
      <div className="w-[90%] mx-auto">
        <div className="appCard grid grid-cols-1 md:grid-cols-4 gap-6 border-b border-gray-500">
          <div className="col-span-1">
            <img src={currentApp.image} alt="" className="" />
          </div>
          <div className="cols-span-1 md:col-span-3">
            <h1 className="text-4xl font-bold">{currentApp.title}</h1>
            <p>
              Developed By{" "}
              <span className="text-[#632EE3]">{currentApp.companyName}</span>
            </p>

            <div className="py-8 border-t border-gray-500 mt-5">
              <div className="flex items-center gap-8">
                <div>
                  <PiDownloadSimple className="text-green-400  text-2xl font-bold" />
                  <p>Downloads</p>
                  <p className="text-2xl font-bold">{currentApp.downloads}</p>
                </div>
                <div>
                  <FaStar className="text-orange-400 text-2xl" />
                  <p>Average Ratings</p>
                  <p className="text-2xl font-bold">{currentApp.ratingAvg}</p>
                </div>
                <div>
                  <AiOutlineLike className="text-2xl text-[#632EE3]" />
                  <p>Total Reviews</p>
                  <p className="text-2xl font-bold">{currentApp.reviews}</p>
                </div>
              </div>
              <button
                onClick={handleInstall}
                disabled={isInstalled}
                className={`btn bg-emerald-600 mt-12 text-white ${
                  isInstalled
                    ? "btn-disabled opacity-70 cursor-not-allowed"
                    : ""
                }`}
              >
                {isInstalled
                  ? "Installed"
                  : `Install Now (${currentApp.size} MB)`}
              </button>
            </div>
          </div>
        </div>

        <div className="chart mt-6">
          <h1 className="text-2xl font-bold">Ratings</h1>
          <ResponsiveContainer width="100%" height={200}>
            <BarChart
              data={ratingsData}
              layout="vertical"
              margin={{ top: 20, right: 20, bottom: 20, left: 0 }}
            >
              <XAxis type="number" />
              <YAxis type="category" dataKey="name" interval={0} />
              <Tooltip />
              <Bar dataKey="count" fill="#FF9800" />
            </BarChart>
          </ResponsiveContainer>
        </div>

        <div className="description py-4">
          <h1 className="text-2xl font-bold">Description</h1>
          <p className="mt-2 text-gray-600">{currentApp.description}</p>
        </div>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="colored"
        transition={Bounce}
      />
    </div>
  );
};

export default AppDetails;
