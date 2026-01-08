import React from "react";
import ProductList1 from "../../assets/images/productList/ProductList1.png";
import ProductList2 from "../../assets/images/productList/ProductList2.png";
import ProductList3 from "../../assets/images/productList/ProductList3.png";
import ProductList4 from "../../assets/images/productList/ProductList4.png";

const ProductList = () => {
  const products = {
    consumer: [
      { name: "Product Test" },
      { name: "Concept Test" },
      { name: "Ad Test" },
      { name: "NPS" },
      { name: "Customer Satisfaction" },
      { name: "Brand Health" },
      { name: "Corporate Equity" },
      { name: "Usage & Attitude" },
      { name: "Segmentation" },
      { name: "Mystery Shopping" },
    ],
    retailer: [
      { name: "Visibility" },
      { name: "Shelf Observation" },
      { name: "Census & Mapping" },
      { name: "Planogram \n Compilance" },
      { name: "Retailer \n Satisfaction" },
    ],
    social: [
      { name: "Opinion Polls" },
      { name: "Nationwide HH Surveys" },
      { name: "Impact Assessments" },
      { name: "Needs Assessments" },
      { name: "Evaluation" },
      { name: "Monitoring Surveys" },
      { name: "Enterprise Surveys" },
    ],
    CSR: [
      { name: "Employee Satisfaction" },
      { name: "CSR Awareness" },
      { name: "Impact Assessments" },
      { name: "Needs Assessments" },
      { name: "Monitoring" },
      { name: "Evaluation" },
    ],
  };

  return (
    <div className=" max-w-7xl min-h-screen overflow-hidden mx-auto mb-12 ">
      {/* Heading */}
      <div>
        <h3
          className="uppercase text-[#006FB9] text-4xl md:text-6xl ml-4 md:ml-16 pt-12 font-extralight"
          // data-aos="fade-up"
          // data-aos-duration="500"
          // data-aos-delay="1000"
        >
          Our Services
        </h3>
        <p
          className="text-[#00C3F3] py-3 ml-4 md:ml-16 font-semibold uppercase text-xl md:text-3xl tracking-wider"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="1000"
        >
          Services we offer
        </p>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 bg-[#006Fb9] p-6 md:p-16">
        {/* 1st Column - Consumer & Brand */}
        <div
          className="bg-[#00C3F3] min-h-[500px] h-full relative overflow-hidden"
          data-aos="fade-up"
          data-aos-duration="500"
          data-aos-delay="1000"
        >
          {/* Circular element - top center */}
          <div
            className=""
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            {/* <div className="absolute left-1/2 top-6 w-40 h-40 -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#006FB9]" />
            <div className="absolute left-1/2 top-6 w-[100px] h-[100px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-[#00C3F3]" /> */}
            <img src={ProductList1} alt="" className="absolute left-1/2 w-40 h-[100px] top-12 -translate-x-1/2 -translate-y-1/2"/>
          </div>
          {/* 1st Column Heading */}
          <h3
            className="uppercase text-[#006FB9] text-2xl mt-40 ml-8 font-bold tracking-wider"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            Consumer & <br /> Brand
          </h3>
          {/* Consumer & Brand List */}
          <div
            className="flex flex-col ml-8 mt-4 space-y-2 mb-16 md:mb-0"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            {products.consumer.map((product, index) => (
              <div key={product.name} className="flex items-center">
                <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                  <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                </div>
                <span className="text-white font-medium whitespace-pre-line tracking-wider">
                  {product.name}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* Second Column - Retailer & Visibility */}
        <div
          className="bg-[#00C3F3] min-h-[600px] h-full relative overflow-hidden flex flex-col"
          data-aos="fade-up"
          data-aos-duration="700"
          data-aos-delay="1000"
        >
          <div>
            {/* 2nd Column Heading */}
            <h3 className="uppercase text-[#006FB9] text-2xl mt-30 ml-8 font-bold tracking-wider">
              Retailer & <br /> Visibility
            </h3>
            {/* Retailer & Visibility List */}
            <div
              className="flex flex-col ml-10 mt-4 space-y-2 mb-12 md:mb-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              {products.retailer.map((product) => (
                <div key={product.name} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                  </div>
                  <span className="text-white font-medium whitespace-pre-line tracking-wider">
                    {product.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
          {/* Circular element - bottom center */}
          <div
            className="flex items-center justify-center mt-auto overflow-hidden -mb-16"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            {/* <div className="w-60 h-60 rounded-full bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
              <div className="w-36 h-36 rounded-full bg-[#00C3F3]"></div> */}
              <img src={ProductList2} alt="" className="px-6 "/>
            </div>
          {/* </div> */}
        </div>
        {/* Third Column - Social*/}
        <div
          className="bg-[#00C3F3] min-h-[600px] h-full relative overflow-hidden flex flex-col"
          data-aos="fade-up"
          data-aos-duration="900"
          data-aos-delay="1000"
        >
          <div>
            {/* Circular element - top center */}
            <div
              className="flex items-center justify-center mt-auto overflow-hidden -mb-16"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              {/* <div className="mt-10 w-56 h-56 rounded-full bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
                <div className="w-36 h-36 rounded-full bg-[#00C3F3]"></div>
              </div> */}
              <img src={ProductList3} alt="" className="px-6 pt-12 "/>
            </div>
            {/* 3rd Column Heading */}
            <h3 className="uppercase text-[#006FB9] text-2xl mt-30 ml-8 font-bold tracking-wider">
              Social
            </h3>
            {/* Social List */}
            <div
              className="flex flex-col ml-10 mt-4 space-y-2 mb-12 md:mb-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              {products.social.map((product) => (
                <div key={product.name} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                  </div>
                  <span className="text-white font-medium whitespace-pre-line tracking-wider">
                    {product.name}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Fourth Column - CSR */}
        <div
          className="bg-[#00C3F3] min-h-[600px] h-full relative overflow-hidden flex flex-col"
          data-aos="fade-up"
          data-aos-duration="1100"
          data-aos-delay="1000"
        >
          <div>
            {/* 4th Column Heading */}
            <h3 className="uppercase text-[#006FB9] text-2xl mt-12 md:mt-20 ml-8 font-bold tracking-wider">
              CSR & <br />
              Sustainability
            </h3>
            {/* CSR & Sustainability List */}
            <div
              className="flex flex-col ml-10 mt-4 space-y-2 -mb-12 md:mb-0"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              {products.CSR.map((product) => (
                <div key={product.name} className="flex items-center">
                  <div className="w-3 h-3 rounded-full bg-white flex items-center justify-center mr-3 shrink-0">
                    <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                  </div>
                  <span className="text-white font-medium whitespace-pre-line tracking-wider">
                    {product.name}
                  </span>
                </div>
              ))}
            </div>
            {/* Circular element - bottom center */}
            <div
              className="flex items-end justify-end mt-20 overflow-hidden -mb-40 -mr-24"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1000"
            >
              {/* <div className="mt-10 w-100 h-100 rounded-full bg-[#006FB9] flex items-center justify-center mr-3 shrink-0">
                <div className="w-68 h-68 rounded-full bg-[#00C3F3]"></div>
              </div> */}
              <img src={ProductList4} alt="" className="pl-4 -pb-8"/>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductList;
