import React from "react";
import ServicesImage2 from "../../assets/images/services/ServiceImage2.png";
import ServiceImg1 from "../../assets/images/services/ServiceImg1.png";
import ServiceImg2 from "../../assets/images/services/ServiceImg2.png";

const ServiceAdvantages2 = () => {
  const quantitativeResearch = [
    "F2F / D2D",
    "Telephonic Surveys",
    "Online Surveys",
    "Corporate Interviews",
    "CLT",
    "Home Placement Tests",
    "Exit Interviews",
  ];

  const qualitativeResearch = [
    "In-depth Interviews",
    "Direct consumer connects \n/Home visits",
    "Triads",
    "Focus group discussions",
    "Mini Focus group discussions",
  ];

  const serviceDescription = [
    { text: "Prosoft", margin: "mr-[100px] md:mr-[93px]" },
    { text: "specializes", margin: "mr-24 md:mr-22" },
    { text: "in providing", margin: "mr-23 md:mr-21" },
    { text: "both", margin: "mr-[86px] md:mr-[80px]" },
    { text: "qualitative", margin: "mr-20 md:mr-19" },
    { text: "and quantitative", margin: "mr-[76px] md:mr-[72px]" },
    { text: "research services,", margin: "mr-17" },
    { text: "offering", margin: "mr-16" },
    { text: "comprehensive", margin: "mr-15 md:mr-[57px]" },
    { text: "insights to help", margin: "mr-13 md:mr-[51px]" },
    { text: "businesses make", margin: "mr-12" },
    { text: "data-driven decisions.", margin: "mr-10 md:mr-[40px]" },
    { text: "We employ advanced", margin: "mr-9 md:mr-[37px]" },
    { text: "methodologies and tools to", margin: "mr-7" },
    { text: "deliver accurate, actionable", margin: "mr-6 md:mr-[27px]" },
    { text: "results tailored to our clients'", margin: "mr-4 md:mr-[22px]" },
    { text: "specific needs..", margin: "mr-3 md:mr-[16px]" },
  ];

  return (
    <div className="relative bg-[#E6E8E9] h-full p-4 md:p-12">
      {/* Mobile View */}
      <div
        className="md:hidden bg-white p-6 rounded-lg"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <h3
          className="text-4xl font-extralight tracking-wide uppercase text-[#006FB9]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="600"
        >
          Our <span className="text-2xl font-bold">Service</span>
        </h3>
        <h3
          className="text-4xl font-extralight tracking-wide uppercase text-[#006FB9] mt-4"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          Advantages
        </h3>

        <div
          className="mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            <img
              src={ServicesImage2}
              alt="Our Service Advantages"
              className="w-full h-auto"
            />
            <div className="absolute top-60 right-6 flex flex-col items-end text-white font-normal text-sm drop-shadow-md">
              {serviceDescription.map((line, index) => (
                <span key={index} className={`${line.margin} text-right`}>
                  {line.text}
                </span>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-8 space-y-12">
          {/* Quantitative */}
          <div data-aos="fade-up" data-aos-duration="1000" data-aos-delay="900">
            <h3 className="text-2xl uppercase text-[#006FBA] font-bold">
              Quantitative <br />
              research
            </h3>
            <div className="flex items-start gap-4 mt-4">
              <img src={ServiceImg1} alt="" className="w-20 h-auto" />
              <div className="space-y-2">
                {quantitativeResearch.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={100 * (index + 10)}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <span className="text-[#006FB9] font-bold text-sm tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Qualitative */}
          <div
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <h3 className="text-2xl uppercase text-[#006FBA] font-bold">
              Qualitative <br />
              research
            </h3>
            <div className="flex items-start gap-4 mt-4">
              <img src={ServiceImg2} alt="" className="w-20 h-auto" />
              <div className="space-y-2">
                {qualitativeResearch.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={100 * (index + 12)}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <span className="text-[#006FB9] font-bold text-sm tracking-wider whitespace-pre-line">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Desktop View */}
      <div className="hidden md:block">
        <div
          className="w-7xl h-full min-h-[600px] mx-auto bg-white"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="500"
        >
          <h3
            className="px-16 pt-12 text-7xl font-extralight tracking-wide uppercase text-[#006FB9]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="600"
          >
            Our <span className="text-[40px] font-bold">Service</span>{" "}
          </h3>
        </div>
        <div
          className="absolute top-40 left-36 z-10"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <div
            className="relative"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1200"
          >
            <img
              src={ServicesImage2}
              alt="Our Service Advantages"
              className="max-h-[488px]"
            />
            <div className="absolute top-48 left-16 flex flex-col items-end text-white font-normal text-[11px] drop-shadow-md">
              {serviceDescription.map((line, index) => (
                <span key={index} className={`${line.margin} text-right`}>
                  {line.text}
                </span>
              ))}
            </div>
          </div>

          <h3
            className="px-60 -mt-[480px] text-7xl font-extralight tracking-wide uppercase text-[#006FB9]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="800"
          >
            Advantages
          </h3>
          <div
            className="flex ml-84 mt-12 justify-between w-[800px]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <div className="-mr-60">
              <h3 className="text-3xl uppercase text-[#006FBA] font-bold">
                Quantitative <br />
                research
              </h3>
              <img src={ServiceImg1} alt="" className="w-28 h-24 mt-4" />
              <div className="ml-32 -mt-20 space-y-2">
                {quantitativeResearch.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={100 * (index + 10)}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <span className="text-[#006FB9] font-bold whitespace-pre-line tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            <div className="flex">
              <div className="-mr-32 ">
                <h3 className="text-3xl uppercase text-[#006FBA] font-bold">
                  Qualitative <br />
                  research
                </h3>
                <img src={ServiceImg2} alt="" className="w-28 h-24 mt-4" />
              </div>
              <div className="ml-24 mt-24 space-y-2">
                {qualitativeResearch.map((item, index) => (
                  <div
                    key={item}
                    className="flex items-center"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay={100 * (index + 12)}
                  >
                    <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                    </div>
                    <span className="text-[#006FB9] font-bold whitespace-pre-line tracking-wider">
                      {item}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvantages2;
