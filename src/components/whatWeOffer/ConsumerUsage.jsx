import React from "react";
import WhoIcon from "../../assets/images/WhoIcon.png";
import WhenIcon from "../../assets/images/WhenIcon.png";
import WhereIcon from "../../assets/images/WhereIcon.png";
import WhatIcon from "../../assets/images/WhatIcon.png";
import WhyIcon from "../../assets/images/WhyIcon.png";
import HowIcon from "../../assets/images/HowIcon.png";

const ConsumerUsage = () => {
  return (
    <div className="bg-[#E6E7E9] py-12">
      <div
        className="w-full min-h-screen max-w-7xl mx-auto font-sans overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        {/* Top Section */}
        <div className="p-8 md:px-16 md:pt-16 pb-10 bg-white max-w-7xl">
          <h1
            className="text-4xl md:text-6xl font-extralight tracking-wide text-[#006FB9]"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            CONSUMER
          </h1>
          <h2
            className="text-3xl md:text-4xl font-semibold text-[#00c3F3] mt-2"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            USAGE &amp; ATTITUDE
          </h2>

          <p
            className="mt-6 max-w-3xl text-[#006FB9] text-base font-semibold leading-relaxed"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Our Usage &amp; Attitude studies offer you a well-rounded view of
            how a product or service is used and perceived by consumers, helping
            businesses improve customer satisfaction, enhance marketing efforts,
            and refine product offerings.
          </p>
        </div>

        {/* Bottom Section */}
        <div
          className="relative w-full bg-[#006FB9] flex flex-col lg:flex-row overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          {/* Left Content */}
          <div className="text-white p-8 md:px-16 py-14 w-full lg:w-2/3 space-y-3">
            {[
              {
                title: "WHO",
                text: "are current consumers?",
                img: WhoIcon,
              },
              {
                title: "WHEN",
                text: "the usage occasions that drive choice and consumption?",
                img: WhenIcon,
              },
              {
                title: "WHERE",
                text: "do consumption occasions occur?",
                img: WhereIcon,
              },
              {
                title: "WHAT",
                text: "products and brands are competing to address the needs of each Need state?",
                img: WhatIcon,
              },
              {
                title: "WHY/WHY NOT",
                text: "consumers choose, or not choose, a particular product / brand?",
                img: WhyIcon,
              },
              {
                title: "HOW",
                text: "do they consume the category, is there any other category consumed as complimentary to each other?",
                img: HowIcon,
              },
            ].map((item, index) => (
              <div key={index} className="flex items-start gap-4">
                <div
                  className="w-10 h-10 flex items-center justify-center rounded-full bg-cyan-400 text-blue-700 font-bold"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  {/* <img src={WhoIcon} alt="" /> */}
                  {item.img && <img src={item.img} alt="" />}
                </div>
                <div>
                  <h4
                    className="text-cyan-300 font-semibold"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    {item.title}
                  </h4>
                  <p
                    className="text-sm text-white leading-relaxed"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    {item.text}
                  </p>
                </div>
              </div>
            ))}
          </div>

          {/* Right Circular Panel */}
          <div className="relative lg:absolute lg:-right-40 lg:top-1/2 lg:-translate-y-1/2 flex justify-center items-center py-6 md:py-12 lg:py-0">
            <div
              className="relative w-[370px] h-[370px] md:w-[600px] md:h-[600px] rounded-full bg-[#00c3F3] flex items-center justify-center"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              <div
                className="w-[340px] h-[340px] md:w-[500px] md:h-[500px] rounded-full border-2 border-[#006FB9] flex flex-col justify-center items-center text-center p-4"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                <h3
                  className="text-3xl md:text-5xl font-semibold text-black mb-4"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  Prosoft
                </h3>

                <p
                  className="text-xl md:text-3xl font-semibold text-black mb-6"
                  data-aos="fade-up"
                  data-aos-duration="1000"
                  data-aos-delay="1000"
                >
                  offers you U&amp;A
                </p>

                <ul className="space-y-4 text-black text-left">
                  <li
                    className="flex gap-3 items-start"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  >
                    <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                    </div>
                    <span className="text-[#006FB9] text-sm md:text-base font-semibold">
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
                    <span className="text-[#006FB9] text-sm md:text-base font-semibold">
                      Covers all 25 districts or <br /> selected locations
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
                    <span className="text-[#006FB9] text-sm md:text-base font-semibold">
                      F2F, telephonic, online surveys
                    </span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConsumerUsage;
