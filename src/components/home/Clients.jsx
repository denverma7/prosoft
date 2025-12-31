import React from 'react'
import Slider from "react-slick";
  import "slick-carousel/slick/slick.css";
  import "slick-carousel/slick/slick-theme.css";

import Nestle from '../../assets/images/clients/Nestle.png'
import Fonterra from '../../assets/images/clients/Fonterra.png'
import Sampath from '../../assets/images/clients/Sampath Bank.png'
import Keva from '../../assets/images/clients/Keva.png'
import Unilever from '../../assets/images/clients/Unilever.png'
import Anton from '../../assets/images/clients/Anton.png'
import CBL from '../../assets/images/clients/CBL.png'
import Dialog from '../../assets/images/clients/Dialog.png'
import CA from '../../assets/images/clients/CA.jpg'
import Hayleys from '../../assets/images/clients/Hayleys.png'
import Emami from '../../assets/images/clients/Emami.png'
import Nolimit from '../../assets/images/clients/Nolimit.png'

import HSBC from '../../assets/images/clients/HSBC.png'
import Hutch from '../../assets/images/clients/Hutch.png'
import Haleon from '../../assets/images/clients/Haleon.png'
import Givaudan from '../../assets/images/clients/Givaudan.png'
import Hansa from '../../assets/images/clients/Hansa.png'
import Chello from '../../assets/images/clients/Chello.png'
import Insee from '../../assets/images/clients/Insee.png'
import Hemas from '../../assets/images/clients/Hemas.jpg'
import Godrej from '../../assets/images/clients/Godrej.png'
import Heineken from '../../assets/images/clients/Heineken.png'
import NJoy from '../../assets/images/clients/NJoy.png'
import Limra from '../../assets/images/clients/Limra.png'

import Flora from '../../assets/images/clients/Flora.png'
import Daintee from '../../assets/images/clients/Daintee.png'
import IDL from '../../assets/images/clients/IDL.png'
import Keells from '../../assets/images/clients/Keells.png'
import KeellsFoods from '../../assets/images/clients/KeellsFoods.png'
import ICL from '../../assets/images/clients/ICL.png'
import Dominos from '../../assets/images/clients/Dominos.png'
import Maliban from '../../assets/images/clients/Maliban.png'
import NDB from '../../assets/images/clients/NDB.png'
import Atlas from '../../assets/images/clients/Atlas.png'
import Swadeshi from '../../assets/images/clients/Swadeshi.png'


const Clients = () => {
  // carousel settings
    const sliderSettings = {
      dots: false,
      infinite: true,
      speed: 500,
      slidesToShow: 6,
      slidesToScroll: 2,
      arrows: false,
      autoplay: true,
      autoplaySpeed: 3000,
      adaptiveHeight: true,
      responsive: [
        { breakpoint: 1024, settings: { slidesToShow: 3 } },
        { breakpoint: 768, settings: { slidesToShow: 2 } },
        { breakpoint: 480, settings: { slidesToShow: 4 } },
      ],
    };

  return (
    <div>
        <div>
            <h3 className='flex text-[#00B0F0] mt-12 text-4xl uppercase font-bold ml-6 md:ml-24' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Our Clients</h3>
        </div>

        {/* Client list 1 - Carousel */}
        <div className='mt-12 mb-6 ml-2 md:ml-24 md:mr-24' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">
            <Slider {...sliderSettings}>
                <div className='flex justify-center'>
                    <img src={Nestle} alt="Nestle logo" className='w-12 h-12 md:w-20 md:h-20 '/>
                </div>
                <div className='flex justify-center'>
                    <img src={Fonterra} alt="Fonterra Logo" className='w-12 h-12 md:w-20 md:h-20 '/>
                </div>
                <div className='flex justify-center'>
                    <img src={Sampath} alt="Sampath Bank Logo" className='w-24 h-12 md:w-48 md:h-18 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Keva} alt="Keva Logo" className='w-12 h-12 md:w-20 md:h-20 ml-4 md:ml-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Unilever} alt="Unilever Logo" className='w-12 h-12 md:w-20 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Anton} alt="Anton Logo" className='w-16 h-12 md:w-36 md:h-20 -ml-8' />
                </div>
                <div className='flex justify-center'>
                    <img src={CBL} alt="CBL Logo" className='w-16 h-12 md:w-36 md:h-20 -ml-8' />
                </div>
                <div className='flex justify-center'>
                    <img src={Dialog} alt="Dialog Logo" className='w-20 h-12 md:w-44 md:h-20 -ml-8' />
                </div>
                <div className='flex justify-center'>
                    <img src={CA} alt="CA Logo" className='w-20 h-12 md:w-36 md:h-20 -ml-4 md:ml-0' />
                </div>
                <div className='flex justify-center'>
                    <img src={Hayleys} alt="Hayleys Logo" className='w-16 h-12 md:w-36 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Emami} alt="Emami Logo" className='w-16 h-12 md:w-36 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Nolimit} alt="Nolimit Logo" className='w-16 h-12 md:w-28 md:h-20 ' />
                </div>
            </Slider>
            <Slider {...sliderSettings} className='mt-12'>
                <div className='flex justify-center'>
                    <img src={HSBC} alt="HSBC logo" className='w-12 h-10 md:w-24 md:h-20 '/>
                </div>
                <div className='flex justify-center'>
                    <img src={Hutch} alt="Hutch Logo" className='w-24 h-12 md:w-40 md:h-16 -ml-4'/>
                </div>
                <div className='flex justify-center'>
                    <img src={Haleon} alt="Haleon Logo" className='w-24 h-12 md:w-50 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Givaudan} alt="Givaudan Logo" className='w-20 h-10 md:w-40 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Hansa} alt="Hansa Logo" className='w-16 h-10 md:w-36 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Chello} alt="Chello Logo" className='w-16 h-12 md:w-28 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Insee} alt="Insee Logo" className='w-24 h-8 md:w-48 md:h-12 mt-2 md:mt-4 -ml-4 md:-ml-8 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Hemas} alt="Hemas Logo" className='w-20 h-10 md:w-40 md:h-18 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Godrej} alt="Godrej Logo" className='w-16 h-10 md:w-28 md:h-16 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Heineken} alt="Heineken Logo" className='w-16 h-12 md:w-36 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={NJoy} alt="NJoy Logo" className='w-16 h-12 md:w-36 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Limra} alt="Limra Logo" className='w-20 h-8 md:w-36 md:h-18 ' />
                </div>
            </Slider>

            <Slider {...sliderSettings} className='mt-12'>
                <div className='flex justify-center'>
                    <img src={Flora} alt="Flora logo" className='w-12 h-12 md:w-20 md:h-20 '/>
                </div>
                <div className='flex justify-center'>
                    <img src={Daintee} alt="Daintee Logo" className='w-12 h-12 md:w-20 md:h-20'/>
                </div>
                <div className='flex justify-center'>
                    <img src={IDL} alt="IDL Logo" className='w-20 h-10 md:w-40 md:h-20  ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Keells} alt="Keells Logo" className='w-12 h-12 md:w-20 md:h-20 ml-4 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={KeellsFoods} alt="KeellsFoods Logo" className='w-20 h-12 md:w-40 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={ICL} alt="ICL Logo" className='w-16 h-12 md:w-24 md:h-20 ml-4' />
                </div>
                <div className='flex justify-center'>
                    <img src={Dominos} alt="Dominos Logo" className='w-12 h-12 md:w-20 md:h-20 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Maliban} alt="Maliban Logo" className='w-20 h-12 md:w-40 md:h-20 -ml-4 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={NDB} alt="NDB Logo" className='w-20 h-11 md:w-40 md:h-18' />
                </div>
                <div className='flex justify-center'>
                    <img src={Atlas} alt="Atlas Logo" className='w-24 h-12 md:w-48 md:h-18 md:-ml-4 ' />
                </div>
                <div className='flex justify-center'>
                    <img src={Swadeshi} alt="Swadeshi Logo" className='w-16 h-12 md:w-28 md:h-20 ' />
                </div>
            </Slider>
        </div>
        
    </div>
  )
}

export default Clients