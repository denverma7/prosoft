import React from "react";
import { FiPhone } from "react-icons/fi";
import { FaRegEnvelope } from "react-icons/fa6";
import { AiOutlineMail } from "react-icons/ai";
import { FaFacebookF } from "react-icons/fa6";
import { FiInstagram } from "react-icons/fi";
import Logo from "../assets/images/ProsoftLogoDark.png";
import MobileMenu from "./MobileMenu";
import { NavLink } from "react-router-dom";

const Header = () => {
  const getLinkClass = ({ isActive }) => {
    return isActive
      ? "font-medium text-[18px] text-[#006FBA] hover:text-[#009AD0] transition-transform hover:scale-105"
      : "text-[#00C2F3] hover:text-[#009AD0] font-medium transition-transform hover:scale-105";
  };

  return (
    <div className="flex justify-between items-center px-4 md:px-8 py-4 bg-white">
      {/* Logo - Mobile menu */}
      <MobileMenu />
      <div>
        {/* Logo */}
        <img src={Logo} alt="Logo" className="hidden md:flex h-16" />
      </div>
      {/* Nav Links */}
      <div className="hidden md:flex space-x-8 items-center font-bold flex-1 justify-center ">
        <NavLink to="/" className={getLinkClass} end>
          Who We Are
        </NavLink>
        <NavLink to="/products" className={getLinkClass}>
          What We Offer
        </NavLink>
        <NavLink to="/strength" className={getLinkClass}>
          Our Strengths
        </NavLink>
        <NavLink to="/contact" className={getLinkClass}>
          Contact Us
        </NavLink>
      </div>
      {/* Contact Info */}
      <div className="hidden md:flex items-center text-[16px] mr-24">
        <span>
          <AiOutlineMail className="w-5 h-5 mr-2 mt-1 font-bold text-[#006FBA]" />
        </span>
        <p className="mr-6 font-normal text-[#006FBA]">info@prosoft.lk</p>
        <p className="mr-6 mt-1">|</p>
        <span>
          <FiPhone className="w-4 h-4 mr-2 mt-1 text-[#006FBA]" />
        </span>
        <span className="font-normal text-[#006FBA]">+94 123 456 789</span>
      </div>
    </div>
  );
};

export default Header;
