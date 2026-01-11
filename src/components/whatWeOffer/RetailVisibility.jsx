import React from "react";
import Visibility from "../../assets/images/visibility/Visibility.png";
import Visibility1 from "../../assets/images/visibility/Visibility1.png";
import Visibility2 from "../../assets/images/visibility/Visibility2.png";
import Visibility3 from "../../assets/images/visibility/Visibility3.png";
import Visibility4 from "../../assets/images/visibility/Visibility4.png";
import Visibility5 from "../../assets/images/visibility/Visibility5.png";
import { motion } from "framer-motion";

const cardData = [
  {
    img: Visibility1,
    text: "The Strategic\npositioning of products on\nshelves or displays. A\nproduct placed at eye level\nor in high-traffic areas like\nstore entrances or checkout\ncounters is more likely\nto be noticed.",
    duration: "1100",
  },
  {
    img: Visibility2,
    text: "This includes banners,\nposters, digital screens, and\nother promotional materials\ndesigned to draw attention to a\nbrand or specific products.\nEffective signage communicates\nthe brand's message and helps\nguide customers to key\nproducts.",
    duration: "1300",
  },
  {
    img: Visibility3,
    text: "There are physical setups\ndesigned to showcase a brand's\nproducts more prominently.\nCustom displays, endcaps (shelves\nat the end of aisles), and other\ncreative setups help make a\nbrand's product stand out and\ncatch the shopper's eye.",
    duration: "700",
  },
  {
    img: Visibility4,
    text: "Consistency across\nall customer touchpoints,\nincluding in-store materials, the\nstore environment, and product\ndesign, reinforces brand identity.\nA cohesive look and feel make it\neasier for customers to recognize\nand connect with\nthe brand.",
    duration: "900",
  },
  {
    img: Visibility5,
    text: "Sales associates who are\nknowledgeable about the brand\nand can effectively promote it can\nenhance visibility. Training staff to\nengage with customers and offer\npersonalized recommendations\ncan elevate the brand's profile\nwithin the store.",
    duration: "1100",
  },
];

const InfoCard = ({ img, text, duration }) => (
  <div
    className="w-full"
    data-aos="fade-up"
    data-aos-duration={duration}
    data-aos-delay="1000"
  >
    <motion.div className="relative" initial="rest" whileHover="hover">
      <img src={img} alt={text.substring(0, 30)} className="w-full" />
      <motion.p
        className="absolute top-1/2 left-1/2 text-white font-semibold text-center text-[11px] md:text-[12px] leading-tight w-11/12 whitespace-pre-line"
        variants={{
          rest: { scale: 1, x: "-50%", y: "-50%" },
          hover: { scale: 1.05, x: "-50%", y: "-50%" },
        }}
        transition={{ duration: 0.3, ease: "easeOut" }}
      >
        {text}
      </motion.p>
    </motion.div>
  </div>
);

const RetailVisibility = () => {
  return (
    <div className="py-12 bg-white">
      <div
        className="bg-[#00C3F3] max-w-7xl mx-auto p-4 sm:p-8 md:p-12"
        data-aos="fade-up"
        data-aos-duration="500"
        data-aos-delay="1000"
      >
        <div className="flex flex-col">
          {/* Top Row: Stacks on mobile, row on desktop */}
          <div className="flex flex-col lg:flex-row mt-4 gap-4 lg:gap-0">
            <div
              className="flex flex-row"
              data-aos="fade-up"
              data-aos-duration="700"
              data-aos-delay="1000"
            >
              <img
                src={Visibility}
                alt="Retail Visibility"
                className="h-auto lg:h-4/5 w-1/2 lg:w-auto"
              />
              <div
                className="text-white ml-4"
                data-aos="fade-up"
                data-aos-duration="900"
                data-aos-delay="1000"
              >
                <h3 className="text-4xl md:text-6xl font-extralight tracking-wide uppercase mt-12 md:mt-24">
                  Retail
                </h3>
                <p className="text-xl md:text-3xl font-semibold md:tracking-wide uppercase leading-tight md:leading-10">
                  Visibility & <br />
                  self <br />
                  observation
                </p>
              </div>
            </div>

            {/* First two cards */}
            <div className="flex flex-col sm:flex-row lg:flex-row gap-4 lg:gap-0">
              <InfoCard {...cardData[0]} />
              <InfoCard {...cardData[1]} />
            </div>
          </div>

          {/* Bottom Row: Stacks on mobile, row on desktop */}
          <div
            className="flex flex-col sm:flex-row lg:flex-row gap-4 lg:gap-0 lg:-mt-1 lg:ml-12"
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="1000"
          >
            {/* Last three cards */}
            <InfoCard {...cardData[2]} />
            <InfoCard {...cardData[3]} />
            <InfoCard {...cardData[4]} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default RetailVisibility;
