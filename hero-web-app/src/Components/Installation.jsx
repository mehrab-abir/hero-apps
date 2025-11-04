import React, { useEffect, useState } from "react";
import { getInstalledApps, uninstallApp } from "../utilities/localStorage";
import useAppData from "../Hooks/useAppData";
import { PiDownloadSimple } from "react-icons/pi";
import { FaStar } from "react-icons/fa6";
import { BallTriangle } from "react-loader-spinner";
import { ToastContainer, toast, Bounce } from "react-toastify";

const Installation = () => {
  const [installedApps, setInstalledApps] = useState([]);
  const [apps, loading] = useAppData();
  const [sort, setSort] = useState("");

  useEffect(() => {
    const storedIds = getInstalledApps();
    const installed = apps.filter((app) => storedIds.includes(app.id));
    setInstalledApps(installed);
  }, [apps]);

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

  //   console.log(installedApps);

  const unInstall = (id) => {
    uninstallApp(id);

    setInstalledApps((prev) => prev.filter((app) => app.id !== id));

    toast("App Uninstalled!", {
      position: "top-center",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: false,
      draggable: true,
      progress: undefined,
      theme: "colored",
      transition: Bounce,
    });
  };

  const handleSorting = (sortType) => {
    if (sortType === "asc") {
      setSort("Low -> High");
      const sortedApps = [...installedApps].sort(
        (a, b) => a.ratingAvg - b.ratingAvg
      );
      setInstalledApps(sortedApps);
    } else {
      setSort("High -> Low");
      const sortedApps = [...installedApps].sort(
        (a, b) => b.ratingAvg - a.ratingAvg
      );
      setInstalledApps(sortedApps);
    }
  };

  const noInstalledApps = (
    <div className="h-screen flex flex-col items-center mt-20 text-center">
      <h1 className="text-3xl font-bold text-purple-500">-No App is installed yet-</h1>
      <p className="text-gray-500">Installed Apps will appear here.</p>
    </div>
  );

  return (
    <div className="bg-gray-100 py-9">
      <div className="w-[90%] mx-auto">
        <h1 className="text-4xl font-bold text-center">Your Installed Apps</h1>
        <p className="text-center mt-3 text-gray-400">
          Explore All Apps on the Market developed by us. We code for Millions
        </p>

        <div className="flex justify-between items-center">
          <p className="text-lg font-bold">
            ({installedApps.length}) Apps Found
          </p>

          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn m-1">
              Sort By Ratings: {sort}
            </div>
            <ul
              tabIndex="-1"
              className="dropdown-content menu bg-base-100 rounded-box z-1 w-46 p-2 shadow-sm"
            >
              <li
                onClick={() => {
                  handleSorting("asc");
                  document.activeElement.blur();
                }}
                className="cursor-pointer py-2 text-lg border-b border-gray-300 hover:text-emerald-600"
              >
                Low -&gt; High
              </li>
              <li
                onClick={() => {
                  handleSorting("desc");
                  document.activeElement.blur();
                }}
                className="cursor-pointer py-2 text-lg hover:text-emerald-600"
              >
                High -&gt; Low
              </li>
            </ul>
          </div>
        </div>

        {installedApps.length > 0 ? (
          <div className="flex flex-col space-y-3 mt-5">
            {installedApps.map((app) => {
              return (
                <div
                  key={app.id}
                  className="flex items-center justify-between p-2 bg-white shadow-sm"
                >
                  <div className="flex gap-4">
                    <img src={app.image} alt="" className="w-20 rounded-md" />
                    <div>
                      <h1 className="text-lg font-bold">{app.title}</h1>
                      <div className="flex gap-4 item-center mt-3">
                        <div className="flex items-center text-green-500">
                          <PiDownloadSimple /> <span>{app.downloads}</span>
                        </div>
                        <div className="flex items-center text-orange-400">
                          <FaStar />
                          <span>{app.ratingAvg}</span>
                        </div>
                        <span className="text-gray-500">{app.size} MB</span>
                      </div>
                    </div>
                  </div>
                  <button
                    onClick={() => unInstall(app.id)}
                    className="btn bg-emerald-600 text-white"
                  >
                    Uninstall
                  </button>
                </div>
              );
            })}
          </div>
        ) : (
          noInstalledApps
        )}
      </div>
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick={true}
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

export default Installation;
