import React from "react";
import Detractors from "../../assets/images/Detractors.png";
import Passives from "../../assets/images/Passives.png";
import Promotors from "../../assets/images/Promotors.png";

const NPS = () => {
  return (
    <div className="bg-[#E6E7E9] p-4 md:p-12">
      {/* Top section */}
      <div
        className="relative bg-[#006FB9] min-h-[250px] max-w-7xl mx-auto overflow-hidden p-6 sm:p-10 md:p-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <h3
          className="text-white md:px-16 pt-6 md:pt-16 text-5xl md:text-6xl font-extralight tracking-wide uppercase"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          Consumer
        </h3>
        <p
          className="uppercase text-[#00C3F3] md:ml-16 text-2xl md:text-4xl font-semibold tracking-wide mt-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          Net Promoter Score
        </p>
        <p
          className="text-white mt-3 tracking-wide max-w-4xl md:ml-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          NPS (Net promoter Score) measures customer loyalty by asking
          respondents how likely they are to <br /> recommend to product or
          service to others. The results categorize customers as promoters,
          passives, <br /> or detractors, helping you understand overall
          satisfaction and areas for improvement.
        </p>
        <div
          className="hidden md:flex absolute w-[800px] h-[800px] rounded-full bg-[#00C3F3] -top-[450px] -right-100 "
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
        ></div>
      </div>
      {/* Bottom section */}
      <div
        className="relative flex flex-col bg-white max-w-7xl mx-auto min-h-[350px] overflow-x-auto md:overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="flex items-center mt-3 ml-6 md:ml-30 mx-auto">
          <p className="uppercase tracking-wider text-[#006FB9] text-2xl font-semibold">
            Detractors
          </p>
          <hr className="w-80 h-0.5 bg-[#006FB9] border-0 ml-4 mt-2 mr-4" />
          <p className="uppercase ml-1 tracking-wider text-[#00C3F3] text-2xl font-semibold">
            Passives
          </p>
          <hr className="w-24 h-0.5 bg-[#00C3F3] border-0 ml-2 mr-2 mt-2" />
          <p className="uppercase text-[#acafb3] text-2xl font-semibold tracking-wider">
            Promoters
          </p>
          <hr className="w-15 h-0.5 bg-[#ACAFB3] border-0 ml-2 mr-2 mt-2" />
        </div>
        <div className="flex items-center mt-2 ml-6 md:ml-30">
          <img src={Detractors} alt="" className="w-24 mr-2" />
          <img src={Detractors} alt="" className="w-24 mr-2" />
          <img src={Detractors} alt="" className="w-24 mr-2" />
          <img src={Detractors} alt="" className="w-24 mr-2" />
          <img src={Detractors} alt="" className="w-24 mr-2" />
          <img src={Passives} className="w-52" alt="" />
          <img src={Promotors} className="ml-3" alt="" />
        </div>
        <div className="flex min-w-max items-center pb-6 mt-4">
          <p className="ml-6 md:ml-30 text-[#006FB9] text-xl font-bold border-2 w-64 text-start border-[#006FB9] pl-2 py-2">
            NPS
          </p>
          <svg
            className="ml-8 mr-8"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="false"
            focusable="false"
          >
            <rect x="0" y="3" width="28" height="3" rx="1.5" fill="#006FB9" />
            <rect x="0" y="14" width="28" height="3" rx="1.5" fill="#006FB9" />
          </svg>
          <p className="ml-2 text-[#006FB9] text-xl font-bold border-2 w-64 text-start border-[#006FB9] pl-2 py-2">
            % Promotors
          </p>
          <svg
            className="ml-12 mr-12"
            width="28"
            height="20"
            viewBox="0 0 28 20"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            aria-hidden="true"
            focusable="false"
          >
            <rect x="0" y="3" width="16" height="3" rx="1.5" fill="#006FB9" />
            {/* <rect x="0" y="14" width="28" height="3" rx="1.5" fill="#006FB9" /> */}
          </svg>
          <p className="ml-2 text-[#006FB9] text-xl font-bold border-2 w-64 text-start border-[#006FB9] pl-2 py-2 mr-6 md:mr-0">
            % Promotors
          </p>
        </div>
        <div
          className="absolute hidden md:flex w-[400px] h-[400px] rounded-full bg-[#00C3F3] -bottom-64 -left-40"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1000"
        ></div>
        <div className="flex flex-row min-w-max md:min-w-0 md:justify-center ml-88 md:ml-0 gap-10 md:gap-20 md:mt-8 px-6 pb-8">
          <div className="space-y-2 md:ml-72">
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="text-[#006FB9] font-semibold text-[14px]">Measures customer loyalty</span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="text-[#006FB9] font-semibold text-[14px]">Identifies Promoters and Dertactors </span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="text-[#006FB9] font-semibold text-[14px]">Helps with growth strategy </span>
          </p>
          </div>
          <div className="space-y-2 ml-28 md:ml-16">
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="text-[#006FB9] font-semibold text-[14px]"> Customer feedback</span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1200"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className=" text-[#006FB9] font-semibold text-[14px]">Benckmarking against competitors</span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1400"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="text-[#006FB9] font-semibold text-[14px]">Predicts Business Outcomes</span>
          </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NPS;
