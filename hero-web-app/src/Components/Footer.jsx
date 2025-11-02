import React from "react";
import { FaGithub } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { Link } from "react-router";

const Footer = () => {
  return (
    <footer className="py-12 bg-black">
        <div className="w-[90%] mx-auto flex justify-between items-center">
            <div className="text-white">
                <h1 className="text-4xl font-bold text-white">Hero</h1>
                <p>&copy;Copyrights Reserved - 2025</p>
                <p>Mehrab Jalil Abir</p>
            </div>
            
            <div>
                <h3 className="text-2xl font-bold text-white">Social</h3>
                <div className="flex items-center justify-center gap-5">
                    <Link to='' className="text-4xl text-white"><FaLinkedin /></Link>
                    <Link to='' className="text-4xl text-white"><FaGithub /></Link>
                    <Link to='' className="text-4xl text-white"><FaInstagram /></Link>
                </div>
            </div>
        </div>
    </footer>
  );
};

export default Footer;
