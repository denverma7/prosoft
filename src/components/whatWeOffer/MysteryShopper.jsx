import React from 'react'
// import MysteryShopperArrow from './MysteryShopperArrow'
import ArrowCircle from '../../assets/images/ArrowCircle.png'

const MysteryShopper = () => {
  return (
    <div className='relative bg-white mt-12 mb-12 overflow-hidden' >
      <div className='relative overflow-hidden bg-[#00C3F3] min-h-[600px] h-fu w-7xl mx-auto'>
        <div>
          <span className='absolute w-[900px] h-[900px] rounded-full bg-[#006FB9] -top-[520px] -left-60' data-aos='fade-up' data-aos-duration="1200" data-aos-delay="1000"></span>
          <span className='absolute text-white px-16 pt-16 text-6xl font-extralight tracking-wide uppercase' data-aos='fade-up' data-aos-duration="1200" data-aos-delay="1000">Consumer</span>
          <span className='absolute uppercase text-[#00C3F3] px-16 mt-[130px] ml-2 text-4xl font-semibold tracking-wide' data-aos='fade-up' data-aos-duration="1200" data-aos-delay="1000">Mystery Shopper</span>
          <span className='absolute text-[#00c3F3] mt-46 ml-20 font-medium' data-aos='fade-up' data-aos-duration="1200" data-aos-delay="1000">For Mystery Shopper Studies our trained <br />enumerators pose are regular customers to <br />assess the quality of service, customer <br />experience, and operational standards at <br />businesses, for retail, hospitality, or <br />service industries.</span>
        </div>
        <div className='absolute mt-100 ml-20'>
          <span className='uppercase text-[#006FB9] font-extrabold text-xl'>Prosoft offers you</span>
          <ul className=" absolute space-y-1 text-black">
                  <li className="flex gap-3 items-start" data-aos='fade-up' data-aos-duration="1000" data-aos-delay="1000" >
                    <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                    </div>
                    <span className='text-[#006FB9] text-[15px] font-semibold whitespace-nowrap'>By gender, age category, SEC</span>
                  </li>
                  <li className="flex gap-3 items-start" data-aos='fade-up' data-aos-duration="1000" data-aos-delay="1000" >
                    <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                    </div>
                    <span className='text-[#006FB9] text-[15px] font-semibold whitespace-nowrap'>
                      Covers all 25 districts or selected locations
                    </span>
                  </li>
                  <li className="flex gap-3 items-start" data-aos='fade-up' data-aos-duration="1000" data-aos-delay="1000" >
                    <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                    </div>
                    <span className='text-[#006FB9] text-[15px] font-semibold'>Sinhala/Tamil/English</span>
                  </li>
                  <li className="flex gap-3 items-start" data-aos='fade-up' data-aos-duration="1000" data-aos-delay="1000" >
                    <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                    </div>
                    <span className='text-[#006FB9] text-[15px] font-semibold'>Covers premium products</span>
                  </li>
                  <li className="flex gap-3 items-start" data-aos='fade-up' data-aos-duration="1000" data-aos-delay="1000" >
                    <div className="w-3 h-3 rounded-full bg-white flex items-center mt-2 justify-center mr-3 shrink-0">
                        <div className="w-1.5 h-1.5 rounded-full bg-[#00C3F3]"></div>
                    </div>
                    <span className='text-[#006FB9] text-[15px] font-semibold'>Monthly Tracker</span>
                  </li>
                </ul>
        </div>
        <div className='absolute right-20 top-1/2 -translate-y-1/2 w-[500px] h-[500px]'>
            <div className='relative w-full h-full'>
              <img src={ArrowCircle} alt="" className='w-[500px] inset-0'/>
              <div className=''>
                <p className='text-white -ml-[81px] -mt-[210px]'>Ambiance</p>
                <p className='text-white mt-24'>Service <br />Information</p>
                <p className='text-white ml-36'>Service <br />Experience</p>
                <p className='text-white ml-100 -mt-16'>Transaction <br />Process</p>
                <p className='text-white ml-[450px] -mt-40'>After Service <br />Customer <br />Support</p>
                <p className='text-white ml-80 -mt-100'>Pre-Purchase <br />experience</p>
                <p className='text-white ml-16 -mt-88'>Arrival / Entry</p>
                <p className='text-white ml-4 -mt-68'>Initial <br />Interaction</p>
              </div>
            </div>
        </div>
      </div>
    </div>
    //  <div className='absolute right-0 top-1/2 -translate-y-1/2 w-[500px] h-[500px]'>
    //           <div className='relative w-full h-full'>
    //             <img src={ArrowCircle} alt="" className='absolute inset-0 w-full h-full'/>
  )
}

export default MysteryShopper