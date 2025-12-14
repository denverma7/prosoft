import React from 'react'
import JourneyImg from '../../assets/images/Journey.png'
import JourneyBottom from '../../assets/images/JourneyBottom2.png'

const Journey = () => {
  return (
    <div className=' bg-[#ED7D31]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <h2 className='uppercase text-4xl text-white font-bold ml-4 md:ml-12 py-6 md:py-12' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">our journey</h2>
        <img src={JourneyImg} alt="Journey Image" className='mx-auto pl-4 pr-4 md:pl-12 md:pr-12' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"/>
        <img src={JourneyBottom} alt="" className='pb-12' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000"/>
    </div>
  )
}

export default Journey