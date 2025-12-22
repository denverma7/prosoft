import React from "react";
import Detractors from "../../assets/images/Detractors.png";
import Passives from "../../assets/images/Passives.png";


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
        className="relative flex flex-col bg-white max-w-7xl mx-auto min-h-[350px] overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div className="flex items-center mt-6 ml-30">
            <p className="uppercase tracking-wider text-[#006FB9] text-2xl font-semibold">Detractors</p>
            <hr className="w-80 h-0.5 bg-[#006FB9] border-0 ml-4 mt-2"/>
            <p className="uppercase ml-1 tracking-wider text-[#00C3F3] text-2xl font-semibold">Passives</p>
            <hr className="w-40 h-0.5 bg-[#00C3F3] border-0 ml-2 mr-2 mt-2"/>
            <p className="uppercase text-[#acafb3] text-2xl font-semibold tracking-wider">Promoters</p>
            <hr className="w-20 h-0.5 bg-[#ACAFB3] border-0 ml-2 mr-2 mt-2"/>
        </div>
        <div className="flex items-center mt-6 ml-30">
            <img src={Detractors} alt="" className="w-125" />
            <img src={Passives} className="w-52 ml-3"alt="" />
        </div>
        <div
          className="absolute hidden md:flex w-[400px] h-[400px] rounded-full bg-[#00C3F3] -bottom-64 -left-40"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1000"
        ></div>
      </div>
    </div>
  );
};

export default NPS;
