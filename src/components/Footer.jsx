import React, { useEffect } from "react";
import Logo from "../assets/images/ProsoftLogoDark.png";
import { Link, useLocation } from "react-router-dom";
import { motion } from "framer-motion";
import { FaFacebookF, FaLinkedinIn } from "react-icons/fa6";

const Footer = () => {
  const { pathname } = useLocation();

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  const QUICK_LINKS = [
    { label: "Who We Are", href: "/" },
    { label: "What We Offer", href: "/products" },
    { label: "Our Strength", href: "/strength" },
    { label: "Contact Us", href: "/contact" },
  ];

  const SOCIALS = [
    {
      icon: <FaFacebookF className="w-5 h-5" />,
      label: "Facebook",
      href: "https://www.facebook.com/ProsoftResearchInsights",
    },
    {
      icon: <FaLinkedinIn className="w-5 h-5" />,
      label: "LinkedIn",  
      href: "https://www.linkedin.com/company/prosoft-operations-soluions-pvt-ltd/",
    },
  ];

  return (
    <div className="w-full">
      {/* Main Footer */}
      <div className="bg-white text-[#006FB9] px-6 md:px-8 lg:px-16 py-10 md:py-12">
        <div className="mx-auto max-w-7xl grid gap-12 md:gap-10 lg:gap-16 grid-cols-1 md:grid-cols-3">
          {/* Logo, About and Social Icons */}
          <section className="space-y-6">
            <div
              className="flex items-center justify-center md:justify-start"
              data-aos="fade-up"
              data-aos-delay="200"
              data-aos-ease="linear"
            >
              <img
                src={Logo}
                alt="Prosoft Logo"
                className="h-8 md:h-16"
                loading="lazy"
                decoding="async"
              />
            </div>

            <p
              className="text-[#006FB9] font-bold opacity-80 text-justify md:text-justify text-sm md:text-base max-w-md mx-auto md:mx-0"
              data-aos="fade-up"
              data-aos-delay="220"
              data-aos-ease="linear"
            >
              Prosoft specializes in providing both quantitative and qualitative
              research services, offering comprehensive insights to help
              businesses make data-driven decisions. We employ advanced
              methodologies and tools to deliver accurate, actionable results
              tailored to our clients' specific needs..
            </p>

          </section>

          {/* Quick Links */}
          <nav
            className="md:mx-auto md:mt-6"
            data-aos="fade-up"
            data-aos-delay="300"
            data-aos-ease="linear"
          >
            <h3 className="text-sm md:text-base font-bold underline mb-4  text-center md:text-left">
              Quick link
            </h3>
            <motion.ul 
              className="space-y-3 md:space-x-2 text-[#006FB9] text-sm md:text-base font-medium text-center md:text-left"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              {QUICK_LINKS.map(({ label, href }) => (
                <motion.li
                  key={label}
                  className="w-fit mx-auto md:mx-0"
                  whileHover={{ scale: 1.05, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <Link to={href} className="hover:underline">
                    {label}
                  </Link>
                </motion.li>
              ))}
            </motion.ul>
          </nav>

          {/* Contact Links */}
          <section
            data-aos="fade-up"
            data-aos-delay="340"
            data-aos-ease="linear"
            className="text-center md:text-left md:mt-6"
          >
            <h3 className="text-sm md:text-base font-bold underline mb-4">
              Get In Touch
            </h3>
            <ul className="space-y-2 text-[#006FB9] text-sm md:text-base font-medium">
              {/* If you want the address back, uncomment: 
              <li>4679 Pin Oak Drive</li>
              <li>New Hyde Park, NC</li> 
              */}
              <li>
                <a
                  href="mailto:info@prosoft.com"
                  className="hover:underline wrap-break-words"
                >
                  info@prosoft.com
                </a>
              </li>
              {/* <li className="pt-2">
                <button
                  type="button"
                  // onClick={() => navigate("/signup")}
                  className="px-8 md:px-10 py-2 bg-[#006FB9] text-[#00C3F3] rounded-full font-bold hover:opacity-95 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-white/70"
                >
                  Join Us
                </button>
              </li> */}
            </ul>
            {/* Social Icons */}
            <div
              className="flex justify-center md:justify-start gap-3 mt-4"
              data-aos="fade-up"
              data-aos-delay="240"
              data-aos-ease="linear"
            >
              {SOCIALS.map(({ icon, label, href }) => (
                <a
                  key={label}
                  aria-label={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="p-2 rounded-full bg-[#E6E7E9] text-[#006FB9] hover:bg-[#006FB9] hover:text-white transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-[#006FB9]"
                >
                  {icon}
                </a>
              ))}
            </div>
          </section>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="md:flex mx-auto md:justify-between px-12 pb-4 pt-6 bg-[#006FB9] text-white text-sm ">
        <div className="text-center">
          <p>© {new Date().getFullYear()} Prosoft. All rights reserved.</p>
        </div>
        <div className="flex justify-center text-center">
          <a href="/terms" className="mt-4 md:mt-1">
            Terms & Conditions &nbsp;&nbsp;
          </a>
          <p className="mt-4 md:mt-1">|</p>
          <a href="/privacy" className="mt-4 md:mt-1">
            &nbsp; &nbsp; Privacy Policy
          </a>
        </div>
        <div className="text-center mt-4 md:mt-0 ext-sm">
          <p className="">
            Website Design & Developed By{" "}
            <a
              href="https://denver-manoj.netlify.app/"
              className="text-[#BECC5B]"
            >
              D M A
            </a>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Footer;
