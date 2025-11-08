import React from "react";
import { Link, NavLink } from "react-router";
import logo from "../assets/logo.png";
import { FaGithub } from "react-icons/fa";

const Header = () => {
  return (
    <div className="navbar bg-base-100 shadow-sm fixed w-full z-50">
      <div className="w-[90%] mx-auto flex justify-between items-center">
        <div className="navbar-start">
          <div className="dropdown mt-1">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>

            {/* menu for mobile devices  */}
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content rounded-box z-1 mt-3 w-52 p-2 shadow bg-white"
            >
              <li>
                <NavLink to='/' className="text-lg font-bold">Home</NavLink>
              </li>
              <li>
                <NavLink to='/apps' className="text-lg font-bold">Apps</NavLink>
              </li>
              <li>
                <NavLink to='/installation' className="text-lg font-bold">Installation</NavLink>
              </li>
            </ul>
          </div>
          {/* logo  */}
          <Link to="/" className="flex items-center">
            <img src={logo} alt="" className="hidden md:flex w-12" />
            <h1 className="text-2xl md:text-4xl font-bold bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent">
              AppSonic
            </h1>
          </Link>
        </div>

        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li className="text-lg font-bold hover:underline">
              <NavLink to="/">Home</NavLink>
            </li>
            <li className="text-lg font-bold hover:underline">
              <NavLink to="/apps">Apps</NavLink>
            </li>
            <li className="text-lg font-bold hover:underline">
              <NavLink to="/installation">Installation</NavLink>
            </li>
          </ul>
        </div>

        <div className="navbar-end">
          <Link to='https://github.com/mehrab-abir' target="blank" className="btn border-none text-white bg-linear-to-r from-[#632EE3] to-[#9F62F2] hover:shadow-lg transition-all">
            <FaGithub className="text-lg md:text-xl" /> Contribute
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;
