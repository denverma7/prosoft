import React from "react";
import CallCenterImage from "../../assets/images/CallCenter.png";
import { motion } from "framer-motion";

const CallCenter = () => {
  return (
    <div className="relative bg-[#dddedf] h-auto p-4 md:p-12">
      <div
        className="relative overflow-hidden w-full max-w-7xl h-full min-h-[300px] mx-auto bg-[#00C3F3]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/HalfLogo.png')] bg-cover h-20 w-20 md:h-28 md:w-28 ml-4 mt-4 md:ml-16 md:mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        ></div>
        <h2 className="ml-6 md:ml-48 mt-24 md:mt-12 text-[#006FB9] text-4xl md:text-7xl font-normal tracking-wide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          Prosoft
        </h2>
        <h2 className="ml-6 md:ml-48 mt-2 text-white text-4xl md:text-7xl font-extralight tracking-wide" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          Call Center
        </h2>
        <p className="ml-6 md:ml-48 mt-4 md:mt-2 text-white text-sm md:text-lg font-normal tracking-wide pr-4 md:pr-0" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="500">
          Prosoft internal call center offers you telephonic surveys at a
          minimal cost. Internally <br className="hidden md:block" />
          established call center with permanent staff, ensuring qiality and
          timely delivery.
        </p>
      </div>
      <div
        className="relative w-full max-w-7xl h-auto min-h-80 mx-auto bg-[#E6E7E9]"
        style={{ clipPath: "inset(-100% 0 0 0)" }}
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="flex flex-col md:flex-row gap-4 md:gap-6 p-4 md:p-12">
          <div className="md:w-1/2">
            <div
              className="absolute hidden md:flex items-center justify-center w-[720px] h-[730px] rounded-full bg-white -bottom-[330px] -left-52"
              data-aos="fade-up"
              data-aos-duration="800"
              data-aos-delay="1000"
            >
              <img
                src={CallCenterImage}
                alt=""
                className="ml-24 h-[300px] w-[500px] mb-32"
              />
            </div>
          </div>
          {/* Call center details */}
          <div className="mt-3 md:w-1/2 flex flex-col gap-1">
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                10+ staff members at a time on permenant and <br />
                contract basis
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                Internal monitoring for timely data collection
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                All calls recorded
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                Audio checking for quality on a weekly basis{" "}
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                Staffs are trained on regular basis
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                Internal briefings by researchers are provided to call <br />
                center staffs for each project
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                Sinhala / Tamil / English all three Languages
              </span>
            </motion.p>
            <motion.p
              className="flex"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              whileHover={{ scale: 1.1 }}
              transition={{ duration: 0.3, ease: "easeOut" }}
            >
              <span className="w-3 h-3 rounded-full mt-1 bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
              </span>
              <span className="text-[12px] md:text-[14px] font-bold text-[#006FB9]">
                {" "}
                Corporate Interviews, customer surveys, employee <br />{" "}
                satisfaction surveys, are also covered.
              </span>
            </motion.p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CallCenter;
