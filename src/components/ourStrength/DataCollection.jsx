import React from "react";
import DataCollectionLogo from "../../assets/images/dataCollection/DataCollectionLogo.png";
import DataCollectionCircle from "../../assets/images/dataCollection/DataCollectionCircle.png";
import DataCollectionImage from "../../assets/images/dataCollection/DataCollection.png";
import { motion } from "framer-motion";

const DataCollection = () => {
  const collection = [
    "Regular training for ﬁeld team to improve \ndata quality standards",
    "Quality based performance bonus to motivate \nﬁeld team",
    "Accompanied visits, back checks, telephone \nchecks use for monitoring",
    "Full transparency and client participation \nfor effective management of the project",
  ];

  return (
    <div className="relative bg-[#dddedf] h-full p-4 md:p-12">
      <div className="relative overflow-hidden w-full max-w-7xl h-full min-h-[680px] mx-auto bg-white p-6 ">
        <div
          className="w-full mx-auto relative flex flex-col justify-center items-start"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <img
            src={DataCollectionLogo}
            alt="Data Collection"
            className="relative md:absolute bg-cover h-20 w-20 md:-mt-24 md:h-28 md:w-28 ml-4 md:ml-16 mb-4 md:mb-0"
          />
          <h2 className="ml-6 md:ml-48 md:mt-16 text-[#006FB9] text-4xl md:text-7xl font-normal tracking-wide">
            Prosoft
          </h2>
          <h2 className="ml-6 md:ml-48 mt-2 text-[#006FB9] text-4xl md:text-7xl font-extralight tracking-wide">
            Data Collection <br />
            Platform
          </h2>
          {/* <img src={DataCollectionCircle} alt="Data Collection Circle" className="absolute bottom-52 -right-10 w-100 h-200 md:w-280 md:h-280" /> */}
          <div className="hidden md:block absolute -top-[950px] -right-144 w-[1200px] h-[1200px] bg-[#00C3F3] rounded-full"></div>
        </div>

        <div
          className="relative md:absolute bottom-0 left-0 w-full mx-auto grid grid-cols-1 md:grid-cols-3 mt-8 md:mt-0 gap-6 md:gap-0"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <div className="flex justify-center md:block">
            <img
              src={DataCollectionImage}
              alt="Data Collection"
              className="mt-auto md:-ml-6 md:-mb-6 w-full md:w-108 h-auto md:h-80 overflow-hidden object-contain"
            />
          </div>
          <div className="px-0 md:px-12 flex flex-col gap-4 text-[#006FB9] text-sm md:text-[16px] font-bold tracking-wide">
            <p>
              Internationally recognized survey <br /> platform, QuestionPro™
            </p>
            <table>
              <tbody>
                <tr>
                  <td>Internal Scripters </td>
                </tr>
                <tr>
                  <td>ensuring - Data </td>
                </tr>
                <tr>
                  <td>cleaning, validation </td>
                </tr>
                <tr>
                  <td>and processing for </td>
                </tr>
                <tr>
                  <td>analysis</td>
                </tr>
              </tbody>
            </table>
            <p>
              Built-in QC measures – LOI, Data & <br /> Time, GPS Coordinates,
              Recording <br />
              (Audio) and capturing photos, etc.{" "}
            </p>
          </div>
          <div className="space-y-2">
            {collection.map((item, index) => (
              <motion.div
                key={item}
                className="flex items-center"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay={100 * (index + 12)}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                whileHover={{ scale: 1.05 }}
                transition={{ duration: 0.3, ease: "easeOut" }}
              >
                <div className="w-4 h-4 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                  <div className="w-2 h-2 rounded-full bg-white"></div>
                </div>
                <span className=" font-bold text-sm tracking-wider whitespace-pre-line">
                  {item}
                </span>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DataCollection;
9;
