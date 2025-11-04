import React from "react";
import ErrorImg from "../assets/error-404.png";
import { Link } from "react-router";
import Header from "./Header";

const ErrorPage = () => {
  return (
    <>
      <div className="top-0 absolute">
        <Header></Header>
      </div>

      <div className="flex items-center justify-center mt-20 ml-20">
        <div className="h-screen flex flex-col items-center justify-center">
          <img src={ErrorImg} alt="" className="w-3/4" />
          <h1 className="text-4xl font-bold text-center text-red-500">
            404: Not Found
          </h1>
          <p className="mt-3 text-gray-500">
            The page you are looking for is unavilable
          </p>
          <Link
            to="/"
            className="btn bg-black text-white mt-3 hover:bg-gray-700"
          >
            Back to Home
          </Link>
        </div>
      </div>
    </>
  );
};

export default ErrorPage;
