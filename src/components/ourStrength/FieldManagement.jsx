import React from "react";
import FMImage from "../../assets/images/FMImage.png";
import SC1 from "../../assets/images/SC1.png";

const FieldManagement = () => {
  return (
    <div className="relative bg-[#E6E7E9] h-full p-4 md:p-12">
      <div
        className="relative overflow-hidden w-full max-w-7xl h-full mx-auto bg-[#006FB9] p-6 md:p-0 md:min-h-[300px]"
        data-aos="fade-up"
        data-aos-duration="600"
        data-aos-delay="1000"
      >
        <h3
          className="text-[#00C3F3] md:ml-24 md:pt-20 uppercase text-3xl font-bold"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1200"
        >
          Field Management & <br />
          Quality Control
        </h3>
        <p
          className="mt-4 text-white md:ml-24 tracking-wider"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1400"
        >
          Prosoft collaborates with a team of over 100 field enumerators, all of
          whom are closely monitored <br className="hidden md:block" />
          by field executives. We leverage advanced technology and call center
          capabilities to ensure that <br className="hidden md:block" />
          data collection is executed with the highest standards of quality.
        </p>
        <div className="hidden md:block absolute -top-[298px] -right-64 w-[600px] h-[600px] bg-[#00C3F3] rounded-full"></div>
      </div>
      <div
        className="w-full max-w-7xl h-full min-h-[350px] mx-auto bg-white flex flex-col md:flex-row items-start p-4 md:p-0"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <img
          src={FMImage}
          alt="Field Management"
          className="md:pt-8 w-full md:w-auto md:max-w-xs lg:max-w-sm"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        />
        <div className="flex flex-col md:flex-row gap-8 md:gap-16 mt-8 md:mt-0 md:ml-16 w-full">
          {/* Field Management Column */}
          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h3
              className="text-3xl uppercase text-[#00C3F3] font-bold mb-4 mt-4 md:mt-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Field Management
            </h3>
            <div
              className="space-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1000"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Covering all island, 25 districts including North and East
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1200"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  100+ enumerators
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1400"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Regular and project basis training to the enumerators
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1600"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Sinhala / Tamil /English Languages
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1800"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Monitored centrally by field executives
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="2000"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Field enumerators recruited on a project basis for{" "}
                  <br className="hidden md:block" />
                  special requirements
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="2200"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Experienced and specialized CLT enumerators
                </span>
              </div>
            </div>
          </div>
          {/* Quality Control Column */}
          <div
            className="w-full"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h3
              className="text-3xl uppercase text-[#00C3F3] font-bold mb-4 mt-4 md:mt-12"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              Quality Control
            </h3>
            <div
              className="space-y-2"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1000"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  50% total back checks
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1200"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Telephone back checks carried out by internal call center
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1400"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  100% back checks for recruited interviews, CLT, HUT, and IDI /
                  FGD
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1400"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Google location pin collected for all F2F interviews
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1600"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Telephonic interviews 100% audio recorded
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="1800"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Logical checks in-built in the data collection platform
                </span>
              </div>
              <div
                className="flex items-start"
                data-aos="fade-up"
                data-aos-duration="700"
                data-aos-delay="2000"
              >
                <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0 mt-1">
                  <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                </div>
                <span className="text-black font-bold whitespace-pre-line text-[13px] tracking-wide">
                  Pantry checks with photo proof
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FieldManagement;
