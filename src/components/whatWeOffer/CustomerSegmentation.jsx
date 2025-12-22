import React from "react";

const CustomerSegmentation = () => {
  const segments = {
    who: [
      { name: "Demographics" },
      { name: "Geography" },
      { name: "Life stage" },
      { name: "Lifestyles" },
    ],
    think: [
      {
        name: "Attitudes towards \nadvertising fashion, \nhealth, travel, etc.",
      },
      { name: "Corporate social \nresponsibility" },
    ],
    do: [
      { name: "Activities & Interests" },
      { name: "Travel /Socializing" },
      { name: "Sports" },
      { name: "Music" },
    ],
    use: [
      { name: "Personal care /Beauty" },
      { name: "Food products" },
      { name: "Apparel/ \nFashion products" },
      { name: "Household products" },
    ],
    shop: [
      { name: "Shopping habits" },
      { name: "Supermarkets" },
      { name: "Retail outlets" },
    ],
    reach: [
      { name: "Media usage" },
      { name: "Mass media - \nTV, Radio, Newspapers, \nMagazines" },
      { name: "Pay TV, Cinema" },
      { name: "Internet" },
      { name: "Outdoor" },
      { name: "Direct mail" },
    ],
  };

  return (
    <div className="bg-[#E6E7E9]">
      <div
        className="max-w-7xl mx-auto bg-[#006FB9] min-h-[300px]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        {/* Top Section */}
        <div className=" relative p-8 md:px-16 md:pt-16 pb-10  max-w-7xl overflow-hidden">
          <h1
            className="text-4xl md:text-6xl font-extralight md:ml-12 tracking-wide text-white"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            CONSUMER
          </h1>
          <h2
            className="text-3xl md:text-4xl font-semibold md:ml-12 text-[#00c3F3] mt-2 uppercase"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            segmentation
          </h2>

          <p
            className="mt-6 max-w-3xl text-white text-base md:ml-12 font-semibold leading-relaxed tracking-wider"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Our segmentation studies can help you understand the diversity
            within the customer base and <br /> create more personalized and
            effective marketing strategies by identifying and creating to <br />
            specific customer groups to maximize chances of success.
          </p>
          <div className="hidden md:flex lg:absolute lg:top-0 -right-40 w-full -mt-20 lg:w-auto justify-center ">
            <div className="w-[400px] h-[400px] bg-[#00c3F3] rounded-full flex items-center justify-center">
              <div className="w-[250px] h-[250px] bg-[#006FB9] rounded-full "></div>
            </div>
          </div>
        </div>
      </div>
      <div className="relative flex flex-col max-w-7xl mx-auto bg-[#00C3F3] min-h-[300px] overflow-hidden">
        {/* Middle bar */}
        <div
          className="bg-[#006FB9] w-full h-16 mt-6 text-[12px] md:text-[16px]"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          <p className="hidden md:flex uppercase text-[#00C3F3] ml-6 md:ml-30 py-2 ">
            divide a broad consumer base into smaller, more manageable groups
            based on <br />
            shared characteristics, behaviors or needs.
          </p>
          <p className="md:hidden uppercase text-[#00C3F3] ml-6 md:ml-30 py-2 ">
            divide a broad consumer base into smaller, more manageable groups
            based on shared <br /> characteristics, behaviors or needs.
          </p>
        </div>

        {/* Bottom Section */}
        <div className="w-full ">
          <div className="absolute -bottom-16 -left-32 hidden md:flex items-center justify-center overflow-hidden">
            <div className="w-50 h-50 rounded-full bg-[#79daf2] flex items-center justify-center shrink-0">
              <div className="w-30 h-30 rounded-full bg-[#00C3F3]"></div>
            </div>
          </div>
          <div className="relative z-10 mx-auto mt-6 ">
          <div className="grid grid-cols-2 md:grid-cols-6 max-w-6xl mx-auto gap-1 p-4  md:p-4">
            {/* 1st Column - Who are they */}
            <div
              className="bg-[#006fb9] min-h-[300px] h-full min-w-[170px] relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              {/* 1st Column Heading */}
              <h3
                className="uppercase text-[#00C3F3] text-3xl mt-4 ml-4 font-bold tracking-wider leading-none"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                Who <br />
                <span className="font-extralight text-3xl leading-none">
                  are <br />
                  they
                </span>
              </h3>
              {/* Who are they List */}
              <div
                className="flex flex-col ml-4 mt-4 space-y-1 mb-16 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {segments.who.map((segment, index) => (
                  <div key={segment.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006FB9] flex items-center justify-center"></div>
                    </div>
                    <span className="text-white font-medium whitespace-pre-line tracking-wider text-[11px]">
                      {segment.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* 2nd Column - What they Think */}
            <div
              className="bg-[#006FB9] min-h-[300px] h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              {/* 2nd Column Heading */}
              <h3
                className="uppercase text-[#00C3F3] text-3xl mt-4 ml-4 font-bold tracking-wider leading-none"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                WHAT <br />
                <span className="font-extralight text-3xl leading-none">
                  they <br />
                  think
                </span>
              </h3>
              {/* What they Think List */}
              <div
                className="flex flex-col ml-4 mt-4 space-y-2 mb-16 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {segments.think.map((segment, index) => (
                  <div key={segment.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006FB9]"></div>
                    </div>
                    <span className="text-white font-medium whitespace-pre-line tracking-wider text-[11px]">
                      {segment.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* 3rd Column - What they Do */}
            <div
              className="bg-[#006fb9] min-h-[300px] h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              {/* 3rd Column Heading */}
              <h3
                className="uppercase text-[#00C3F3] text-3xl mt-4 ml-4 font-bold tracking-wider leading-none"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                WHAT <br />
                <span className="font-extralight text-3xl leading-none">
                  they <br />
                  do
                </span>
              </h3>
              {/* What they Do List */}
              <div
                className="flex flex-col ml-4 mt-4 space-y-1 mb-16 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {segments.do.map((segment, index) => (
                  <div key={segment.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006FB9]"></div>
                    </div>
                    <span className="text-white font-medium whitespace-pre-line tracking-wider text-[11px]">
                      {segment.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* 4th Column - What products they use */}
            <div
              className="bg-[#006fb9] min-h-[300px] h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              {/* 4th Column Heading */}
              <h3
                className="uppercase text-[#00C3F3] text-3xl mt-4 ml-4 font-bold tracking-wider leading-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                What <br />
                <span className="font-extralight text-[20px] leading-5">
                  products <br />
                  are user/ <br />
                  consumed
                </span>
              </h3>
              {/* What products they use List */}
              <div
                className="flex flex-col ml-4 mt-4 space-y-1 mb-16 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {segments.use.map((segment, index) => (
                  <div key={segment.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006FB9]"></div>
                    </div>
                    <span className="text-white font-medium whitespace-pre-line tracking-wider text-[11px]">
                      {segment.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* 5th Column - Where they shop */}
            <div
              className="bg-[#006fb9] min-h-[300px] h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              {/* 5th Column Heading */}
              <h3
                className="uppercase text-[#00C3F3] text-3xl mt-4 ml-4 font-bold tracking-wider leading-none"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                Where <br />
                <span className="font-extralight text-3xl leading-none">
                  they <br />
                  shop
                </span>
              </h3>
              {/* Where they shop List */}
              <div
                className="flex flex-col ml-4 mt-4 space-y-1 mb-16 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {segments.shop.map((segment, index) => (
                  <div key={segment.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006FB9]"></div>
                    </div>
                    <span className="text-white font-medium whitespace-pre-line tracking-wider text-[11px]">
                      {segment.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* 6th Column - How to reach them */}
            <div
              className="bg-[#006fb9] min-h-[300px] h-full relative overflow-hidden"
              data-aos="fade-up"
              data-aos-duration="500"
              data-aos-delay="1000"
            >
              {/* 6th Column Heading */}
              <h3
                className="uppercase text-[#00C3F3] text-3xl mt-4 ml-4 font-bold tracking-wider leading-5"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                How <br />
                <span className="font-extralight text-[22px] leading-5">
                  to <br />
                  reach <br />
                  them
                </span>
              </h3>
              <div
                className="flex flex-col ml-4 mt-4 space-y-1 mb-16 md:mb-0"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                {segments.reach.map((segment, index) => (
                  <div key={segment.name} className="flex items-center">
                    <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                      <div className="w-1.5 h-1.5 rounded-full bg-[#006FB9]"></div>
                    </div>
                    <span className="text-white font-medium whitespace-pre-line tracking-wider text-[10px]">
                      {segment.name}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
  );
};

export default CustomerSegmentation;
