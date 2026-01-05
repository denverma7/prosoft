import React, { useState, useEffect } from "react";
import Picture1 from "../../assets/images/Logo2.png";
import Hero1 from "../../assets/images/hero/Hero10.jpg";
import Hero2 from "../../assets/images/hero/Hero11.jpg";
import Hero3 from "../../assets/images/hero/Hero12.jpg";
// import CrowdGif from "../../assets/images/crowd-indycar-on-nbc.gif";
// import CrowdGif from "../../assets/images/crowd-walking.gif";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from "aos";
import "aos/dist/aos.css";

const Hero = () => {
  const [displayText, setDisplayText] = useState("");
  const [displaySubtext, setDisplaySubtext] = useState("");
  const [displayDescription, setDisplayDescription] = useState("");
  const fullText = "Prosoft";
  const fullSubtext = "Research & Insights";
  const fullDescription = "Think Ahead: Informed Choices for Your Brand";
  const charDelay = 100; // delay between each character

  const heroImages = [Hero1, Hero2, Hero3];

  useEffect(() => {
    AOS.init();
  }, []);

  useEffect(() => {
    let mounted = true;
    const wait = (ms) => new Promise((res) => setTimeout(res, ms));

    const typeoutLine = async (fullStr, setterFn) => {
      for (let i = 0; i <= fullStr.length; i++) {
        if (!mounted) return;
        setterFn(fullStr.slice(0, i));
        await wait(charDelay);
      }
    };

    const run = async () => {
      while (mounted) {
        // Type first line
        await typeoutLine(fullText, setDisplayText);
        if (!mounted) return;
        await wait(500); // pause after first line completes
        if (!mounted) return;

        // Type second line
        await typeoutLine(fullSubtext, setDisplaySubtext);
        if (!mounted) return;
        await wait(500); // pause after second line completes
        if (!mounted) return;

        // Type third line
        await typeoutLine(fullDescription, setDisplayDescription);
        if (!mounted) return;
        await wait(1500); // pause before loop restarts
        if (!mounted) return;

        // Clear all
        setDisplayText("");
        setDisplaySubtext("");
        setDisplayDescription("");
        await wait(500);
      }
    };

    run();
    return () => {
      mounted = false;
    };
  }, []);

  const sliderSettings = {
    dots: false,
    arrows: false,
    infinite: true,
    speed: 1500,
    fade: true,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    cssEase: "linear",
  };

  return (
    <div className="bg-white mb-12 md:mb-20 overflow-hidden">
      <div className="grid grid-cols-1 md:grid-cols-2 max-w-7xl mx-auto bg-white max-h-[500px] overflow-hidden">
        
        <div className="relative flex items-center py-12 md:py-24 md:-ml-1">
          <img
            src={Picture1}
            alt=""
            className="w-35 h-35 md:w-70 md:h-70 object-contain ml-6 md:mx-0"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          />
          <div
            className="md:ml-4"
            data-aos="fade-right"
            data-aos-duration="1000"
            data-aos-delay="200"
          >
            <h3 className="md:tracking-wider leading-tight font-light text-[40px] ml-2 md:ml-0 md:text-[80px] text-[#009BDF] min-h-0 md:min-h-24">
              {displayText}
            </h3>
            <p className="text-[14px] md:text-[24px] font-semibold text-[#D0C6BD] ml-2 md:ml-0 min-h-0 md:min-h-10 leading-tight md:leading-normal">
              {displaySubtext}
            </p>
            <p className="text-[#7697D3] text-[8px] ml-2 md:ml-0 md:mt-2 md:text-[14px] font-bold min-h-5 leading-normal">
              {displayDescription}
            </p>
          </div>
        </div>
        <div
          className="flex items-center md:ml-4 "
          data-aos="fade-left"
          data-aos-duration="1000"
          data-aos-delay="200"
        >
          <Slider {...sliderSettings} className="w-full">
            {heroImages.map((img, index) => (
              <div key={index}>
                <img
                  src={img}
                  alt={`Hero image ${index + 1}`}
                  className="w-full  md:h-[350px] object-cover rounded-lg"
                />
              </div>
            ))}
          </Slider>
          {/* <img
            src={CrowdGif}
            alt="Busy crowd of people walking"
            className="w-full h-full object-cover"
          /> */}
        </div>
      </div>
    </div>
  );
};

export default Hero;
