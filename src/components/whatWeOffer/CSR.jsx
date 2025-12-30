import React from "react";
import Arrow1 from "../../assets/images/csr/Arrow1.png";
import Arrow2 from "../../assets/images/csr/Arror2.png";
import Arrow3 from "../../assets/images/csr/Arrow3.png";

const CSR = () => {
  return (
    <div className="bg-[#E6E7E9] p-4 md:p-12">
      <div
        className="relative bg-[#006FB9] min-h-[300px] max-w-7xl mx-auto overflow-hidden p-6 sm:p-10 md:p-12"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <h3
          className="text-white md:px-16 pt-6 md:pt-16 text-5xl md:text-6xl font-extralight tracking-wide"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          CSR
        </h3>
        <p
          className="uppercase text-[#00C3F3] md:ml-16 text-2xl md:text-3xl font-semibold tracking-wide mt-2"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          Monitoring & Evaluation
        </p>
        <p
          className="text-white mt-3 tracking-wide max-w-4xl md:ml-16"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="1000"
        >
          Prosoft can help you access the performance of projects and programs
          by tracking progress, measuring outcomes, and determining their
          effectiveness with our research. These studies help you improve
          decision-making, ensure accountability, and enhance the impact of your
          interventions.
        </p>
        <div
          className="hidden md:flex absolute w-[800px] h-[800px] rounded-full bg-[#00C3F3] -top-[500px] -right-100 "
          data-aos="fade-up"
          data-aos-duration="1200"
          data-aos-delay="1000"
        ></div>
      </div>
      <div
        className="relative flex flex-col lg:flex-row justify-between bg-white max-w-7xl mx-auto min-h-[350px] overflow-hidden"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="1000"
      >
        <div
          className="absolute hidden md:flex w-[400px] h-[400px] rounded-full bg-[#00C3F3] -bottom-48 -left-56"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1000"
        ></div>
        {/* Circular Arrow section */}
        <div className="py-8 lg:py-0">
          <p className="-ml-8 lg:ml-32">
            <img
              src={Arrow1}
              alt=""
              className="mt-6 ml-8"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            />
            <img
              src={Arrow2}
              alt=""
              className="ml-[59px] mt-4"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            />
            <img
              src={Arrow3}
              alt=""
              className="ml-[272px] -mt-[276px]"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            />
          </p>
        </div>
        {/* CSR Stages list */}
        <div className="px-6 pb-8 lg:px-0 lg:pb-0 mt-8 md:mt-0 lg:mr-24">
          <p
            className="lg:mt-6 text-[#00C3F3] text-xl uppercase font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Project Planning Stage
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="font-bold text-sm text-[#006FB9]">
              Needs Assessment -
              <span className="font-normal">
                {" "}
                Identify where intervention is needed
              </span>
            </span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="font-bold text-sm text-[#006FB9]">
              Stakeholder Mapping -
              <span className="font-normal text-[#006FB9]">
                {" "}
                Identify all the stakeholders and their roles in your project
              </span>
            </span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="font-bold text-sm text-[#006FB9]">
              Baseline Assessment -
              <span className="font-normal">
                Understand the current state of things and set a benchmark
              </span>
            </span>
          </p>
          <p
            className="mt-4 text-[#00C3F3] text-xl uppercase font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Implementation Stage
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="font-bold text-sm text-[#006FB9]">
              Monitoring surveys -
              <span className="font-normal text-[#006FB9]">
                Assess the achievement of your project as opposed to the set
                KPIs
              </span>
            </span>
          </p>
          <p
            className="mt-4 text-[#00C3F3] text-xl uppercase font-semibold"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Evaluation Stage
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="font-bold text-sm text-[#006FB9]">
              Impact Assessment -
              <span className="font-normal">
                Measure the impact of your project
              </span>
            </span>
          </p>
          <p
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            <span className="w-3 h-3 rounded-full mt-1 bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
            </span>
            <span className="font-bold text-sm text-[#006FB9]">
              Final Evaluation -
              <span className="font-normal text-[#006FB9]">
                Evaluate the achievements of your project as opposed to the
                objects set out
              </span>
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default CSR;
