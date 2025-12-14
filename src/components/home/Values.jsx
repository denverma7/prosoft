import React from 'react'
import ValuesBack from '../../assets/images/ValuesBack.png'
import ValuesImg from '../../assets/images/Values.png'


const Values = () => {
  return (
    <div className='grid grid-cols-1 md:grid-cols-2 mb-8 mt-10'>
        <div className="relative h-screen md:h-screen overflow-hidden min-h-[650px]" data-aos="fade-down"> 
            <div className='text-[#00B0F0] text-4xl font-bold uppercase ml-4  md:mt-0 md:ml-24' data-aos="fade-up" data-aos-duration="1000">Our Core Values</div>
            {/* Background Image with Overlay */}
            <div 
                className="absolute md:ml-24 mt-12 inset-0 bg-cover bg-no-repeat" 
                data-aos="fade-up" 
                data-aos-duration="1000" 
                style={{ backgroundImage: `url(${ValuesBack})` }}
                >
                {/* Dark overlay applied only to the background */}
                <div className="absolute inset-0 bg-[#1D4026]/50 z-10"></div>
            </div>
            {/* Content positioned above the background and overlay */}
            <div className="relative z-10">
                {/* Content */}
                <div className='text-white md:ml-24 '>
                    <p className='px-4 pt-6 md:pt-12 pb-8 md:pl-12 text-[16px] md:text-[20px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                        Founded in 2004, Prosoft began its journey as a market research operations entity with a vision to fill the gap of a local entity in an industry that is largely dominated by multi national companies. Today, we are proud to offer a comprehensive suite of services that cater to businesses seeking to understand local and global markets more profoundly.
                    </p>
                    <p className='px-4 md:px-12 text-[16px] md:text-[20px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1200">
                        Our commitment to offering the best of both worlds—local expertise and international best practices—sets us apart. Whether you’re looking for market trends, consumer insights, or strategic analysis, we deliver solutions that help our clients stay ahead of the curve.
                    </p>
                    <p className='px-4 md:px-12 py-6 text-[16px] md:text-[20px]' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1400">
                        At Prosoft, we are committed to providing market research solutions that empower businesses to make informed, strategic decisions. Our approach is built on four core values: Integrity, Innovation, Customization, and Transparency—values that guide everything we do and shape the services we offer.
                    </p>
                </div>
            </div>
        </div>
        <div>
            <img src={ValuesImg} alt="Values Image" className='mt-6 -md:ml-6' data-aos="fade-up" data-aos-duration="1600" data-aos-delay="1000"/>
        </div>
    </div>
  )
}

export default Values