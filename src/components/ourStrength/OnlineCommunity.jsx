import React from "react";
import Image1 from "../../assets/images/communityImages/CommunityImage1.png";
import Image2 from "../../assets/images/communityImages/CommunityImage2.png";
import Image3 from "../../assets/images/communityImages/CommunityImage3.png";

const OnlineCommunity = () => {
  const chartData = [
    { label: "16-25", percentage: 25, color: "#006FB9" },
    { label: "26-35", percentage: 30, color: "#0085C8" },
    { label: "36-45", percentage: 20, color: "#009BD7" },
    { label: "46-55", percentage: 15, color: "#00B1E6" },
    { label: "55+", percentage: 10, color: "#00C7F5" },
  ];

  const secData = [
    { label: "SEC A", percentage: 32, color: "#006FB9" },
    { label: "SEC B", percentage: 39, color: "#0085C8" },
    { label: "SEC C", percentage: 25, color: "#009BD7" },
    { label: "SEC D", percentage: 4, color: "#00B1E6" },
  ];

  let cumulativePercent = 0;
  const gradient = `conic-gradient(${chartData
    .map((d) => {
      const start = cumulativePercent;
      cumulativePercent += d.percentage;
      return `${d.color} ${start}% ${cumulativePercent}%`;
    })
    .join(", ")})`;

  let cumulativePercentSec = 0;
  const secGradient = `conic-gradient(${secData
    .map((d) => {
      const start = cumulativePercentSec;
      cumulativePercentSec += d.percentage;
      return `${d.color} ${start}% ${cumulativePercentSec - 0.5}%, #58BDE0 ${
        cumulativePercentSec - 0.5
      }% ${cumulativePercentSec}%`;
    })
    .join(", ")})`;

  return (
    <div className="relative bg-[#dddedf] h-auto p-4 md:p-12">
      <div
        className="relative overflow-hidden w-full max-w-7xl h-full min-h-80 mx-auto bg-[#00C3F3]"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div
          className="absolute inset-0 bg-[url('/src/assets/images/HalfLogo.png')] bg-cover h-20 w-20 md:h-28 md:w-28 ml-4 mt-4 md:ml-16 md:mt-8"
          data-aos="fade-up"
          data-aos-duration="1000"
        ></div>
        <h2
          className="ml-6 md:ml-48 mt-24 md:mt-12 text-[#006FB9] text-4xl md:text-7xl font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          Prosoft
        </h2>
        <h2
          className="ml-6 md:ml-48 mt-2 text-white text-4xl md:text-7xl font-extralight tracking-wide"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          Online Community
        </h2>
        <p
          className="hidden md:block md:ml-48 md:mt-2 text-white md:text-lg font-normal tracking-wide"
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="800"
        >
          With Prosoft online community you can carry out online surveys at a
          minimal cost. Prosoft <br /> online community offers you a vast
          respondent base of a variety of consumer proﬁles with <br /> age,
          gender, SEC and geographical location.
        </p>
        <p className="md:hidden ml-6 mt-4 text-white text-sm font-normal tracking-wide pb-4 pr-4 ">
          With Prosoft online community you can carry out online surveys at a
          minimal cost. Prosoft online community offers you a vast respondent
          base of a variety of consumer proﬁles with age, gender, SEC and
          geographical location.
        </p>
        <div
          className="absolute hidden md:flex w-[800px] h-[800px] rounded-full bg-[#006FB9] -top-110 -right-120"
          data-aos="fade-up"
          data-aos-duration="800"
          data-aos-delay="1000"
        ></div>
      </div>
      <div
        className="relative w-full max-w-7xl h-auto min-h-80 mx-auto bg-[#E6E7E9] overflow-auto grid grid-cols-1 md:grid-cols-2"
        data-aos="fade-up"
        data-aos-duration="1000"
        data-aos-delay="500"
      >
        <div
          className="mx-auto "
          data-aos="fade-up"
          data-aos-duration="1000"
          data-aos-delay="700"
        >
          <img
            src={Image1}
            alt="Online Community"
            className=" md:w-100 md:h-70 object-cover mt-6"
          />
          {/* Percentage Indicator by gender */}
          <div
            className="flex"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="900"
          >
            <div className="flex flex-row mt-6 mb-6 ml-6">
              <img src={Image2} alt="Male Image" className="md:ml-10 mb-6" />
              <p className="my-auto font-bold text-3xl ml-2 pb-4">55%</p>
            </div>
            <div className="flex flex-row mt-6 mb-6 md:ml-3">
              <img src={Image3} alt="Male Image" className="ml-16 mb-6" />
              <p className="my-auto font-bold text-3xl ml-2 pb-4">45%</p>
            </div>
          </div>
        </div>

        <div className="flex flex-col md:flex-row">
          <div className="flex flex-col">
            {/* Percentage Indicator by age */}
            <div
              className="flex flex-row items-center justify-center gap-8 p-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1100"
            >
              <div
                className="relative w-36 h-36 rounded-full"
                style={{
                  background: gradient,
                }}
              >
                {chartData.map((item, index) => {
                  const totalPrev = chartData
                    .slice(0, index)
                    .reduce((acc, cur) => acc + cur.percentage, 0);
                  const midAngle = (totalPrev + item.percentage / 2) * 3.6;
                  const rad = (midAngle * Math.PI) / 180;
                  const dist = 32;
                  const left = 50 + dist * Math.sin(rad);
                  const top = 50 - dist * Math.cos(rad);

                  return (
                    <span
                      key={index}
                      className="absolute text-[10px] font-bold"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {item.percentage}
                    </span>
                  );
                })}
              </div>
              <div className="flex flex-col gap-2">
                {chartData.map((item, index) => (
                  <div key={index} className="flex items-center gap-2">
                    <div
                      className="w-3 h-3"
                      style={{ backgroundColor: item.color }}
                    ></div>
                    <span className="text-xs font-bold text-[#006FB9]">
                      {item.label}{" "}
                    </span>
                  </div>
                ))}
              </div>
            </div>
            {/* Percentage Indicator by SEC */}
            <div
              className="flex flex-col md:flex-row items-center justify-center gap-8 p-6"
              data-aos="fade-up"
              data-aos-duration="1000"
              data-aos-delay="1300"
            >
              <div
                className="relative w-44 h-44 rounded-full md:-ml-8 flex items-center justify-center"
                style={{
                  background: secGradient,
                }}
              >
                <div className="absolute w-24 h-24 bg-white rounded-full flex flex-col items-center justify-center z-10">
                  {secData.map((item, index) => (
                    <div key={index} className="flex items-center gap-1">
                      <div
                        className="w-2 h-2"
                        style={{ backgroundColor: item.color }}
                      ></div>
                      <span className="text-[10px] font-bold text-[#006FB9]">
                        {item.label}
                      </span>
                    </div>
                  ))}
                </div>
                {secData.map((item, index) => {
                  const totalPrev = secData
                    .slice(0, index)
                    .reduce((acc, cur) => acc + cur.percentage, 0);
                  const midAngle = (totalPrev + item.percentage / 2) * 3.6;
                  const rad = (midAngle * Math.PI) / 180;
                  const dist = 42;
                  const left = 50 + dist * Math.sin(rad);
                  const top = 50 - dist * Math.cos(rad);

                  return (
                    <span
                      key={index}
                      className="absolute text-[10px] font-bold z-20"
                      style={{
                        left: `${left}%`,
                        top: `${top}%`,
                        transform: "translate(-50%, -50%)",
                      }}
                    >
                      {item.percentage}
                    </span>
                  );
                })}
              </div>
            </div>
          </div>
          {/* Table Details */}
          <div
            className="mt-6"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1500"
          >
            <table>
              <thead>
                <tr className="">
                  <th className="text-left px-4 py-2 border text-[13px]">
                    Province
                  </th>
                  <th className="text-left px-4 py-2 border text-[13px]">
                    Population
                  </th>
                  <th className="text-center px-4 py-2 border text-[13px]">
                    Community <br />
                    Members
                  </th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Central
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    2,571,557
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    4,506
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Eastern
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,555,510
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,286
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    North Central
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,266,663
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    2,256
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    North Western
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    2,380,861
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    3,857
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Northern
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,061,315
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    321
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Sabaragamuwa
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,928,655
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    964
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Southern
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    2,477,285
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    4,533
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Uva
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,266,463
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    1,286
                  </td>
                </tr>
                <tr className="border-b">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Western
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    5,851,130
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    13,179
                  </td>
                </tr>
                <tr className="border-b font-bold">
                  <td className="px-4 py-2 border text-[13px] text-left">
                    Total
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    20,359,439
                  </td>
                  <td className="px-4 py-2 border text-[13px] text-right">
                    32,189
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OnlineCommunity;
