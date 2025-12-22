import React, { useState, useEffect } from "react";
import { Menu, X } from "lucide-react";
import Logo from "../assets/images/ProsoftLogo.png";
import { NavLink } from "react-router-dom";

const mobileMenu = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isMenuOpen]);
  const currentPath = window.location.pathname;

  return (
    <>
      {/* Mobile Menu Button - centered on mobile, hidden on desktop  */}
      <NavLink to="/" className="cursor-pointer md:hidden">
        <img src={Logo} alt="Prosoft logo" className="h-16" />
      </NavLink>
      {/* <div className="md:hidden text-white z-20"> */}
      <div className="md:hidden">
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={`z-20 hover:text-teal-200 focus:outline-none transition-color duration-200 ${
            isMenuOpen
              ? "fixed top-4 right-6 text-[#006FBA]"
              : "absolute top-8 right-6 text-[#006FBA]"
          }`}
        >
          {isMenuOpen ? (
            <X className="h-8 w-8 font-bold text-[#006FBA]" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </button>
      </div>
      {isMenuOpen && (
        // <div className='md:hidden fixed inset-0 bg-green-900/90 z-10 animate-drop-in flex flex-col justify-center items-center'>
        <div className="md:hidden fixed top-0 h-full pt-40  left-0 right-0 bg-white z-50 animate-drop-in flex flex-col justify-start items-center">
          <div className="flex justify-between">
            <a href="/" className="absolute top-4 left-4">
              <img
                src={Logo}
                alt="Nature Foot care logo"
                className="h-16 z-50"
              />
            </a>
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className={`z-20 hover:text-teal-200 focus:outline-none transition-color duration-200 ${
                isMenuOpen
                  ? "fixed top-8 right-6 text-[#006FBA]"
                  : "absolute top-8 right-6 text-[#006FBA]"
              }`}
            >
              {isMenuOpen ? (
                <X className="h-8 w-8 font-bold text-[#006FBA]" />
              ) : (
                <Menu className="w-6 h-6" />
              )}
            </button>
          </div>
          {/* <div className='text-center text-[20px] space-y-2 sm:px-3'>
                <div className='px-2 pt-2 pb-3 text-center text-[20px] space-y-2 sm:px-3'> */}
          <div className="text-center text-[24px] mt-24 space-y-8 sm:px-3">
            <a
              className={`font-semibold block transition-color duration-200 ${
                currentPath === "/"
                  ? "text-[#00B0F0] px-20 py-1 border border-[#BECC5B] bg-[#ECD3B4] rounded-4xl"
                  : "text-[#00B0F0] hover:text-teal-400"
              }`}
              href="/"
            >
              Who We Are
            </a>
            <a
              className={`font-semibold block transition-color duration-200 ${
                currentPath === "/products"
                  ? "text-[#343929] px-20 py-1 border border-[#BECC5B] bg-[#ECD3B4] rounded-4xl"
                  : "text-[#00B0F0] hover:text-teal-400"
              }`}
              href="/products"
            >
              What We Offer
            </a>
            <a
              className={`font-semibold block transition-color duration-200 ${
                currentPath === "/strength"
                  ? "text-[#343929] px-20 py-1 border border-[#BECC5B] bg-[#ECD3B4] rounded-4xl"
                  : "text-[#00B0F0] hover:text-teal-400"
              }`}
              href="/strength"
            >
              Our Strengths
            </a>
            <a
              className={`font-semibold block px-4 py-1 border rounded-4xl transition-color duration-200 ${
                currentPath === "/contact"
                  ? "text-[#343929] px-20 py-1 border border-[#BECC5B] bg-[#ECD3B4] rounded-4xl"
                  : "border-[#BECC5B] text-[#00B0F0] hover:text-teal-400"
              }`}
              href="/contact"
            >
              Contact Us
            </a>
          </div>
        </div>
      )}
    </>
  );
};

export default mobileMenu;
