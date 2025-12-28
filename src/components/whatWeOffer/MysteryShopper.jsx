import React from "react";
// import MysteryShopperArrow from './MysteryShopperArrow'
import ArrowCircle from "../../assets/images/ArrowCircle.png";
import { motion } from "framer-motion";

const MysteryShopper = () => {
  return (
    <div className="relative bg-white mt-12 mb-12">
      <div className="relative overflow-hidden bg-[#00C3F3] min-h-[600px] h-full max-w-7xl w-full mx-auto">
        <div className="relative md:static">
          <span
            className="absolute w-[900px] h-[900px] rounded-full bg-[#006FB9] -top-[520px] -left-60"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          ></span>
          <span
            className="relative md:absolute block text-white px-6 md:pl-30 pt-16 text-5xl md:text-6xl font-extralight tracking-wide uppercase"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          >
            Consumer
          </span>
          <span
            className="relative md:absolute block uppercase text-[#00C3F3] px-6 md:pl-30 mt-2 md:mt-[130px] ml-2 text-3xl md:text-4xl font-semibold tracking-wide"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          >
            Mystery Shopper
          </span>
          <span
            className="relative md:absolute block text-[#00c3F3] mt-6 md:mt-46 ml-8 md:ml-32 font-medium pr-6 md:pr-0"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          >
            For Mystery Shopper Studies our trained{" "}
            <br className="hidden md:block" />
            enumerators pose are regular customers to{" "}
            <br className="hidden md:block" />
            assess the quality of service, customer{" "}
            <br className="hidden md:block" />
            experience, and operational standards at{" "}
            <br className="hidden md:block" />
            businesses, for retail, hospitality, or{" "}
            <br className="hidden md:block" />
            service industries.
          </span>
        </div>
        <div className="relative md:absolute mt-20 md:mt-100 ml-8 md:ml-32 pb-10 md:pb-0">
          <span className="uppercase text-[#006FB9] font-extrabold text-xl">
            Prosoft offers you
          </span>
          <ul className="mt-4 md:mt-0 md:absolute space-y-1 text-black">
            <li
              className="flex gap-3 items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
              </div>
              <span className="text-[#006FB9] text-[15px] font-semibold whitespace-nowrap">
                By gender, age category, SEC
              </span>
            </li>
            <li
              className="flex gap-3 items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
              </div>
              <span className="text-[#006FB9] text-[15px] font-semibold whitespace-nowrap">
                Covers all 25 districts or selected locations
              </span>
            </li>
            <li
              className="flex gap-3 items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
              </div>
              <span className="text-[#006FB9] text-[15px] font-semibold">
                Sinhala/Tamil/English
              </span>
            </li>
            <li
              className="flex gap-3 items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
              </div>
              <span className="text-[#006FB9] text-[15px] font-semibold">
                Covers premium products
              </span>
            </li>
            <li
              className="flex gap-3 items-start"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
              </div>
              <span className="text-[#006FB9] text-[15px] font-semibold">
                Monthly Tracker
              </span>
            </li>
          </ul>
        </div>
        <div
          className="relative md:absolute flex right-10 mt-10 md:mt-0 md:right-20 md:top-1/2 md:-translate-y-1/2 w-[500px] h-[500px] mx-auto scale-[0.6] sm:scale-75 md:scale-100 origin-top md:origin-center  -mb-[200px] md:mb-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <div className="relative w-full h-full">
            <img
              src={ArrowCircle}
              alt=""
              className="w-[400px] md:w-[500px] inset-0"
            />
            <div className="">
              <motion.div
                className="w-fit -ml-[81px] -mt-[180px] md:-mt-[210px]"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white">Ambiance</p>
              </motion.div>
              <motion.div
                className="mt-24"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white">
                  Service <br />
                  Information
                </p>
              </motion.div>
              <motion.div
                className="ml-36"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white">
                  Service <br />
                  Experience
                </p>
              </motion.div>
              <motion.div
                className="ml-84 -mt-12"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white ">
                  Transaction <br />
                  Process
                </p>
              </motion.div>
              <motion.div
                className="ml-[400px] md:ml-[450px] -mt-44"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="flex text-white ">
                  After Service <br />
                  Customer <br />
                  Support
                </p>
              </motion.div>
              <motion.div
                className=" ml-64 md:ml-80 -mt-88 md:-mt-104"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white">
                  Pre-Purchase <br />
                  experience
                </p>
              </motion.div>
              <motion.div
                className="ml-16"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white ">Arrival / Entry</p>
              </motion.div>
              <motion.div
                className="-ml-[74px] mt-20"
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.1 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <p className="text-white ">
                  Initial <br />
                  Interaction
                </p>
              </motion.div>
            </div>
          </div>
        </div>
      </div>
    </div>
    //  <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]'>
    //           <div className='relative w-full h-full'>
    //             <img src={ArrowCircle} alt="" className='absolute inset-0 w-full h-full'/>
  );
};

export default MysteryShopper;
