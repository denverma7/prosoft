import React from "react";
import ServicesImage from "../../assets/images/services/ServicesImage.png";
import ServiceIcon1 from "../../assets/images/services/ServiceIcon1.png";
import ServiceIcon2 from "../../assets/images/services/ServiceIcon2.png";
import ServiceIcon3 from "../../assets/images/services/ServiceIcon3.png";
import ServiceIcon4 from "../../assets/images/services/ServiceIcon4.png";
import ServiceIcon5 from "../../assets/images/services/ServiceIcon5.png";
import ServiceIcon6 from "../../assets/images/services/ServiceIcon6.png";
import ServiceIcon7 from "../../assets/images/services/ServiceIcon7.png";
import ServiceIcon8 from "../../assets/images/services/ServiceIcon8.png";
import ServiceIcon9 from "../../assets/images/services/ServiceIcon9.png";

const ServiceAdvantages1 = () => {
  return (
    <div className="relative bg-[#E6E7E9] h-full p-4 md:p-12">
      <div className="w-7xl h-full min-h-[600px] mx-auto bg-white">
        <h3 className="px-16 pt-12 text-7xl font-extralight tracking-wide uppercase text-[#006FB9]">
          Our <span className="text-[40px] font-bold">Service</span>{" "}
        </h3>
        {/* <h3 className='px-68  text-7xl font-extralight tracking-wide uppercase text-[#006FB9]'>Advantages</h3> */}
      </div>
      <div className="absolute top-40 left-32 z-10">
        <img
          src={ServicesImage}
          alt="Our Service Advantages"
          className="max-h-[488px]"
        />
        <h3 className="px-60 -mt-[480px] text-7xl font-extralight tracking-wide uppercase text-[#006FB9]">
          Advantages
        </h3>
        <div className="ml-68 mt-16">
          <img src={ServiceIcon1} alt="" className="w-12 h-11" />
          <p className="-mt-8 ml-16 font-bold">
            24/7 support service to clients
          </p>
          <img src={ServiceIcon8} alt="" className="-mt-10 ml-88" />
          <p className="-mt-8 ml-104 font-bold">Fast turnaround</p>
        </div>
        <div className="ml-76 mt-2">
          <img src={ServiceIcon2} alt="" className="w-12 h-11" />
          <p className="-mt-8 ml-16 font-bold">5 full time researchers</p>
          <img src={ServiceIcon9} alt="" className="-mt-10 ml-96" />
          <p className="-mt-12 ml-116 font-bold">
            Data processing with inbuilt checks to <br />
            guaranteed data quality
          </p>
        </div>
        <div className="ml-86 -mt-2">
          <img src={ServiceIcon3} alt="" className="w-12 h-11" />
          <p className="-mt-8 ml-16 font-bold">100+ experienced field team</p>
        </div>
        <div className="ml-100 mt-2">
          <img src={ServiceIcon4} alt="" className="w-12 h-11" />
          <p className="-mt-8 ml-16 font-bold">Competitive pricing</p>
        </div>
        <div className="ml-108 mt-2">
          <img src={ServiceIcon5} alt="" className="w-12 h-11" />
          <p className="-mt-8 ml-16 font-bold">
            Transparency in all activities
          </p>
        </div>
        <div className="ml-120 mt-2">
          <img src={ServiceIcon6} alt="" className="w-12 h-11" />
          <p className="-mt-8 ml-16 font-bold">Fulltime Field executives</p>
        </div>
        <div className="ml-128 mt-2">
          <img src={ServiceIcon7} alt="" className="w-12 h-11" />
          <p className="-mt-10 ml-16 font-bold">
            Network of External Consultants <br />
            and Researchers
          </p>
        </div>
      </div>
    </div>
  );
};

export default ServiceAdvantages1;
