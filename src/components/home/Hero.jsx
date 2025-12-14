import React, { useState, useEffect } from 'react'
import Picture1 from '../../assets/images/Picture1.png'
import Hero1 from '../../assets/images/hero/Hero1.jpg'
import Hero2 from '../../assets/images/hero/Hero7.jpg'
import Hero3 from '../../assets/images/hero/Hero3.jpg'
import Slider from "react-slick";
import "slick-carousel/slick/slick.css"; 
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import 'aos/dist/aos.css';


const Hero = () => {
  const [displayText, setDisplayText] = useState('');
  const [displaySubtext, setDisplaySubtext] = useState('');
  const [displayDescription, setDisplayDescription] = useState('');
  const fullText = 'PROSOFT';
  const fullSubtext = 'RESEARCH & INSIGHTS';
  const fullDescription = 'Think Ahead: Informed Choices for Your Brand';
  const charDelay = 100; // delay between each character

  const heroImages = [Hero1, Hero2, Hero3];

  useEffect(() => {
    AOS.init();
  }, [])

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
        await wait(500); // pause after first line completes

        // Type second line
        await typeoutLine(fullSubtext, setDisplaySubtext);
        await wait(500); // pause after second line completes

        // Type third line
        await typeoutLine(fullDescription, setDisplayDescription);
        await wait(1500); // pause before loop restarts

        // Clear all
        setDisplayText('');
        setDisplaySubtext('');
        setDisplayDescription('');
        await wait(500);
      }
    };

    run();
    return () => { mounted = false };
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
    cssEase: 'linear'
  };

  return (
    <div className="grid grid-cols-1 md:grid-cols-2 w-full bg-gray-50/60">
        <div className="relative flex items-center py-12 md:py-24">
            <img src={Picture1} alt="" className='w-35 h-50 md:w-70 md:h-100 ml-4 md:ml-24' data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'/>
            <div className="md:ml-4" data-aos='fade-right' data-aos-duration='1000' data-aos-delay='200'>
                <h3 className="uppercase md:tracking-wider text-[40px] md:text-[70px] font-extrabold text-[#ED7D31] min-h-0 md:min-h-24">{displayText}</h3>
                <p className="text-[16px] md:text-[32px] font-semibold text-[#ED7D31] min-h-0 md:min-h-10 leading-tight md:leading-normal">{displaySubtext}</p>
                <p className='text-[#7697D3] text-[8px] md:mt-2 md:text-[16px] font-bold min-h-5 leading-normal'>{displayDescription}</p>
            </div>
        </div>
        <div className='flex items-center p-8 md:p-12' data-aos='fade-left' data-aos-duration='1000' data-aos-delay='200'>
            <Slider {...sliderSettings} className="w-full">
                {heroImages.map((img, index) => (
                    <div key={index}>
                        <img src={img} alt={`Hero image ${index + 1}`} className='w-full h-auto object-cover rounded-lg' />
                    </div>
                ))}
            </Slider>
        </div>
    </div>
  )
}

export default Hero