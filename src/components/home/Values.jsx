import React from "react";
import ValuesBack from "../../assets/images/CoreValues.png";
import ValueList from "../../assets/images/ValueList.png";
import ValuesImg from "../../assets/images/Values.png";

const Values = () => {
  return (
    <div className="">
      <div
        className="px-2 md:px-24 py-6 md:py-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        {/* Heading */}
        <div
          className="uppercase text-4xl text-[#0B96D2] font-bold mb-6 md:mb-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        >
          Our Core Values
        </div>
        {/* Background Image with Overlay */}
        <div
          className="relative bg-cover bg-no-repeat h-[420px] md:h-[700px] md:w-full"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
          style={{ backgroundImage: `url(${ValuesBack})` }}
        >
          <div className="relative z-10 flex h-full">
            <div className="text-[#00C3F3] max-w-4xl md:p-16">
              <p
                className="text-center ml-32 md:ml-40 mt-24 md:mt-28 text-[9px] md:text-[16px]"
                data-aos="fade-up"
                data-aos-duration="1000"
                data-aos-delay="1000"
              >
                Founded in 2004, Prosoft <br />
                began its journey as a market <br /> research operations entity
                with a vision to <br /> fill the gap of a local entity in an
                industry that is <br /> largely dominated by multi national
                companies. <br /> Today, we are proud to offer a comprehensive
                suite of <br /> services that cater to businesses seeking to
                understand <br /> local and global markets more profoundly.
              </p>
              <p
                className="mt-6 text-center ml-28 md:ml-40 text-[9px] md:text-[16px]"
                data-aos="fade-up"
                data-aos-duration="1200"
                data-aos-delay="1000"
              >
                Our commitment to offering the best of both <br /> worlds -
                local expertise and international <br />
                best practices - sets us apart. <br />
                Our approach is built on four core values: <br />
                Integrity, Innovation, Customization, and <br />
                Transparency - values that guide <br /> everything we do and
                share the <br />
                services we offer.
              </p>
            </div>
            <div className="hidden md:flex flex-1 -mr-32">
              <div
                className="text-[#00C3F3] text-3xl font-semibold mt-80"
                data-aos="fade-up"
                data-aos-duration="1300"
                data-aos-delay="1000"
              >
                <p>CORE</p>
                <div className="flex items-center gap-x-2">
                  <p>VALUES</p>
                  <hr
                    className="w-[220px] mt-4 border-t border-[#00C3F3] -mr-20"
                    data-aos="fade-up"
                    data-aos-duration="1000"
                    data-aos-delay="1000"
                  />
                </div>
              </div>
            </div>
            <div>
              <img
                src={ValueList}
                alt=""
                className="hidden md:flex mt-[174.5px] mr-4 relative z-10"
                data-aos="fade-up"
                data-aos-duration="1400"
                data-aos-delay="1000"
              />
            </div>
            <div>
              <h5
                className="hidden md:flex uppercase text-white mt-48 mr-8 text-3xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="1500"
                data-aos-delay="1000"
              >
                Integrity
              </h5>
              <h5
                className="hidden md:flex uppercase text-white mt-20 mr-8 text-3xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="1700"
                data-aos-delay="1000"
              >
                Innovation
              </h5>
              <h5
                className="hidden md:flex uppercase text-white mt-20 mr-8 text-3xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="1900"
                data-aos-delay="1000"
              >
                Transparency
              </h5>
              <h5
                className="hidden md:flex uppercase text-white mt-20 mr-8 text-3xl font-semibold"
                data-aos="fade-up"
                data-aos-duration="2100"
                data-aos-delay="1000"
              >
                Customization
              </h5>
            </div>
          </div>
        </div>
      </div>
      <div>
        <img
          src={ValuesImg}
          alt="Values Image"
          className="md:hidden mt-6 -md:ml-6"
          data-aos="fade-up"
          data-aos-duration="1600"
          data-aos-delay="1000"
        />
      </div>
    </div>
  );
};

export default Values;
