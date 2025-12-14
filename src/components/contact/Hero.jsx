import React from 'react'
import Contact from '../../assets/images/Contact.jpg'

const Hero = () => {
  return (
    <div className='relative bg-[#fdf8e9]'>
        <img 
            src={Contact} 
            alt="Contact Image" 
            className='w-full h-[100px] md:h-[300px] object-cover'
            data-aos="fade-up"
            data-aos-duration="1000"
            data-aos-delay="300"
        />
        <h2 className='absolute top-1/2 left-12 md:left-48 transform  text-[#00B0F0] text-2xl md:text-6xl font-bold z-10' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="600">Contact Us</h2>
    </div>
  )
}

export default Hero