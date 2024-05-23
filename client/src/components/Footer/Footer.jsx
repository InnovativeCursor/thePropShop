import React from "react";
import logo from "../../assets/Images/propshop_logo.svg";
import { FaFacebook } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { IoLogoInstagram } from "react-icons/io5";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-4">
      <div className="container mx-auto flex flex-col md:flex-row justify-between items-center px-4">
        <div className="text-lg h-16 w-44 mb-4 md:mb-0">
          {/* <span className="font-bold text-xl">The</span> PROPSHOP WORLDWIDE */}
          <img src={logo} alt="Propshop Logo" />
        </div>
        <div className="text-sm mb-4 md:mb-0">
          © 2024 thepropshop. All rights reserved.
        </div>
        <div className="flex space-x-4">
          <a href="#" className="text-white">
            <FaFacebook />
          </a>
          <a href="#" className="text-white">
            <FaTwitter />
          </a>
          <a href="#" className="text-white">
            <IoLogoInstagram />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
