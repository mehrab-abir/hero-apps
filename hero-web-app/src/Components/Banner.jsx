import React from "react";
import hero from "../assets/hero.png";
import googlePlayLogo from "../assets/google-play-logo.png";
import appStoreLogo from "../assets/app-store-logo.png";
import { Link } from "react-router";

const Banner = () => {
  return (
    <div className="pt-8 bg-gray-100">
      <div className="w-[90%] mx-auto flex flex-col items-center justify-center">
        <h1 className="text-3xl md:text-4xl lg:text-6xl font-bold text-center">
          We Build
          <br />{" "}
          <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
            Productive&nbsp;
          </span>
          Apps
        </h1>
        <p className="mt-4 text-gray-500 w-full md:w-1/2 text-center">
          At HERO.IO, we craft innovative apps designed to make everyday life
          simpler, smarter, and more exciting.Our goal is to turn your ideas
          into digital experiences that truly make an impact.
        </p>

        <div className="flex items-center justify-between gap-4 my-8">
          <Link
            to="https://play.google.com/store/games?hl=en&pli=1"
            target="blank"
            className="border border-gray-300 py-2 px-3 flex items-center gap-2 cursor-pointer"
          >
            <img src={googlePlayLogo} alt="" className="w-6" />
            Google Play
          </Link>
          <Link
            to="https://www.apple.com/ca/app-store/"
            target="blank"
            className="border border-gray-300 py-2 px-3 flex items-center gap-2 cursor-pointer"
          >
            <img src={appStoreLogo} alt="" className="w-6" />
            App Store
          </Link>
        </div>

        <img src={hero} alt="" />
      </div>
    </div>
  );
};

export default Banner;
