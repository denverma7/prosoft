import React from 'react'
import ServicesImage2 from '../../assets/images/services/ServiceImage3.png'
import ServiceImg1 from '../../assets/images/services/ServiceImg1.png'
import ServiceImg2 from '../../assets/images/services/ServiceImg2.png'

const ServiceAdvantages2 = () => {
  return (
    <div className='relative bg-[#E6E8E9] h-full p-4 md:p-12'>
        <div className='w-7xl h-full min-h-[600px] mx-auto bg-white'>
            <h3 className='px-16 pt-12 text-7xl font-extralight tracking-wide uppercase text-[#006FB9]'>Our <span className='text-[40px] font-bold'>Service</span> </h3>
            {/* <h3 className='px-68  text-7xl font-extralight tracking-wide uppercase text-[#006FB9]'>Advantages</h3> */}
        </div>
        <div className='absolute top-40 left-36 z-10'>
            <img src={ServicesImage2} alt="Our Service Advantages" className='max-h-[488px]' />
            <h3 className='px-60 -mt-[480px] text-7xl font-extralight tracking-wide uppercase text-[#006FB9]'>Advantages</h3>
            <div className='flex ml-72 mt-12 justify-between w-[800px]'>
                <div className='-mr-60'>
                    <h3 className='text-3xl uppercase text-[#006FBA] font-bold'>Quantitative <br />research</h3>
                    <img src={ServiceImg1} alt="" className='w-28 h-24 mt-4'/>
                    <div className='ml-32 -mt-20'>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider '>F2F / D2D</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Telephonic Surveys</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Online Surveys</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Corporate Interviews</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>CLT</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Home Placement Tests</span>
                        </div>
                        <div className='flex items-center'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Exit Interviews</span>
                        </div>
                    </div>
                </div>
                <div className='flex'>
                    <div className='-mr-32'>
                        <h3 className='text-3xl uppercase text-[#006FBA] font-bold'>Qualitative <br />research</h3>
                        <img src={ServiceImg2} alt="" className='w-28 h-24 mt-4'/>
                    </div>
                    <div className='ml-12 mt-24'>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>In-depth Interviews</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Direct consumer connects <br /> /Home visits</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Triads</span>
                        </div>
                        <div className='flex items-center mb-2'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Focus group discussions</span>
                        </div>
                        <div className='flex items-center'> 
                            <div className="w-3 h-3 rounded-full bg-[#00C3F3] flex items-center justify-center mr-3 shrink-0">
                                <div className="w-1.5 h-1.5 rounded-full bg-white"></div>
                            </div>
                            <span className='text-black font-bold whitespace-pre-line tracking-wider'>Mini Focus group discussions</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default ServiceAdvantages2