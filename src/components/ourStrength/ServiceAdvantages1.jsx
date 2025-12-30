import React from "react";
import ServicesImage from "../../assets/images/services/ServicesImage.png";
import ServiceIcon1 from "../../assets/images/services/ServiceIcon1.png";
import ServiceIcon2 from "../../assets/images/services/ServiceIcon2.png";
import ServiceIcon3 from "../../assets/images/services/ServiceIcon3.png";
import ServiceIcon4 from "../../assets/images/services/ServiceIcon4.png";
import ServiceIcon5 from "../../assets/images/services/ServiceIcon5.png";
import ServiceIcon6 from "../../assets/images/services/ServiceIcon6.png";
import ServiceIcon7 from "../../assets/images/services/ServiceIcon7.png";
import ServiceIcon8 from "../../assets/images/services/ServiceIcon8.png";
import ServiceIcon9 from "../../assets/images/services/ServiceIcon9.png";

import { motion } from "framer-motion";

const ServiceAdvantages1 = () => {
  const advantages = [
    { icon: ServiceIcon1, text: "24/7 support service to clients" },
    { icon: ServiceIcon8, text: "Fast turnaround" },
    { icon: ServiceIcon2, text: "5 full time researchers" },
    {
      icon: ServiceIcon9,
      text: "Data processing with inbuilt checks to guaranteed data quality",
    },
    { icon: ServiceIcon3, text: "100+ experienced field team" },
    { icon: ServiceIcon4, text: "Competitive pricing" },
    { icon: ServiceIcon5, text: "Transparency in all activities" },
    { icon: ServiceIcon6, text: "Fulltime Field executives" },
    {
      icon: ServiceIcon7,
      text: "Network of External Consultants and Researchers",
    },
  ];

  return (
    <div className="bg-[#E6E7E9] h-full p-4 md:p-12">
      {/* Mobile view */}
      <div className="md:hidden bg-white p-4 rounded-lg">
        <h3 className="text-4xl font-extralight tracking-wide uppercase text-[#006FB9]">
          Our <span className="text-[25px] md:text-[40px] font-bold">Service</span>{" "}
        </h3>
        <h3 className="mt-4 text-4xl font-extralight tracking-wide uppercase text-[#006FB9]">
          Advantages
        </h3>
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          {advantages.map((advantage, index) => (
            <motion.div
              key={index}
              className="flex items-center gap-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay={100 * (index + 1)}
            >
              <img
                src={advantage.icon}
                alt=""
                className="w-12 h-11 shrink-0"
              />
              <p className="font-bold text-sm">{advantage.text}</p>
            </motion.div>
          ))}
        </div>
      </div>

      {/* Desktop view */}
      <div className="hidden md:block relative">
        <div
          className="w-7xl h-full min-h-[600px] mx-auto bg-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h3 className="px-16 pt-12 text-7xl font-extralight tracking-wide uppercase text-[#006FB9]">
            Our <span className="text-[40px] font-bold">Service</span>{" "}
          </h3>
        </div>
        <div
          className="absolute top-40 left-32 z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <img
            src={ServicesImage}
            alt="Our Service Advantages"
            className="max-h-[440px]"
          />
          <h3 className="px-60 md:-mt-[480px] text-7xl font-extralight tracking-wide uppercase text-[#006FB9]">
            Advantages
          </h3>
          <div>
            <div className="ml-68 mt-16">
              <motion.div
                className="w-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img src={ServiceIcon1} alt="" className="w-12 h-11" />
                <p className="-mt-8 ml-16 font-bold text-[#006FB9]">
                  24/7 support service to clients
                </p>
              </motion.div>
              <motion.div
                className="w-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img src={ServiceIcon8} alt="" className="-mt-10 ml-88" />
                <p className="-mt-8 ml-104 font-bold text-[#006FB9]">Fast turnaround</p>
              </motion.div>
            </div>
            <div className="ml-76 mt-2">
              <motion.div
                className="w-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img src={ServiceIcon2} alt="" className="w-12 h-11" />
                <p className="-mt-8 ml-16 font-bold text-[#006FB9]">5 full time researchers</p>
              </motion.div>
              <motion.div
                className="w-fit"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <img src={ServiceIcon9} alt="" className="-mt-8 ml-96 w-12 h-11" />
                <p className="-mt-10 ml-116 font-bold text-[#006FB9]">
                  Data processing with inbuilt checks to <br />
                  guaranteed data quality
                </p>
              </motion.div>
            </div>
            <motion.div
              className="ml-86 -mt-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={ServiceIcon3} alt="" className="w-12 h-11 mt-2" />
              <p className="-mt-8 ml-16 font-bold text-[#006FB9]">
                100+ experienced field team
              </p>
            </motion.div>
            <motion.div
              className="ml-100 mt-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={ServiceIcon4} alt="" className="w-12 h-11 mt-4" />
              <p className="-mt-8 ml-16 font-bold text-[#006FB9]">Competitive pricing</p>
            </motion.div>
            <motion.div
              className="ml-108 mt-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={ServiceIcon5} alt="" className="w-12 h-11" />
              <p className="-mt-8 ml-16 font-bold text-[#006FB9]">
                Transparency in all activities
              </p>
            </motion.div>
            <motion.div
              className="ml-120 mt-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={ServiceIcon6} alt="" className="w-12 h-11" />
              <p className="-mt-8 ml-16 font-bold text-[#006FB9]">Fulltime Field executives</p>
            </motion.div>
            <motion.div
              className="ml-128 mt-2 w-fit"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <img src={ServiceIcon7} alt="" className="w-12 h-11" />
              <p className="-mt-10 ml-16 font-bold text-[#006FB9]">
                Network of External Consultants <br />
                and Researchers
              </p>
            </motion.div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvantages1;
