import React from 'react'
import JourneyImg from '../../assets/images/Journey1.png'
import JourneyMob from '../../assets/images/JourneyNew.png'
import { motion } from 'framer-motion'


const Journey = () => {
  return (
    <div className='bg-[#E6E7E9] px-2 md:px-24 py-6 md:py-12' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
        <div className='uppercase text-4xl text-[#0B96D2] font-bold mb-6 md:mb-8'>our journey</div>
        
        {/* Desktop Journey View */}
        <div className='w-full overflow-x-auto'>
          <div 
              data-aos="fade-up" 
              className="relative bg-cover bg-no-repeat h-[500px] md:h-[600px] min-w-[1000px] md:w-full overflow-hidden"
              data-aos-duration="1000" 
              data-aos-delay='1000'
              style={{ backgroundImage: `url(${JourneyImg})` }}
          >
            {/* Desktop Content */}
            <div className="relative z-10 p-8">
                <motion.div 
                  className='mt-[140px] ml-44 md:mt-[195px]  md:ml-56'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}  
                >
                  <p className='text-white text-[18px] font-semibold' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">2004</p>
                  <p className='ml-28 -mt-6 text-[#006FB9] font-bold' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Established as a data processing and handling company</p>
                </motion.div>
                <motion.div 
                  className='ml-52 mt-2 md:ml-72 md:mt-6'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} 
                >
                  <p className='text-white text-[18px] font-semibold' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">2005</p>
                  <p className='ml-32 -mt-8 text-[#006FB9] font-bold' data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">Provide data processing to Neilsen retail services (Census and store level data)</p>
                </motion.div>
                <motion.div 
                  className='ml-64 mt-8 md:ml-84 md:mt-10'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }}
                >
                  <p className='text-white text-[18px] font-semibold' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">2006</p>
                  <p className='ml-32 md:ml-40 -mt-12 text-[#006FB9] font-bold' data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">Expand data processing and handling service for government institutes <br /><span className='ml-8'>(Presidential Secretariat / RDB / Sustainable Energy Authority)</span></p>
                </motion.div>
                <motion.div 
                  className='ml-76 mt-5 md:ml-[400px] md:mt-8'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} 
                >
                  <p className='text-white text-[18px] font-semibold' data-aos="fade-up" data-aos-duration="1600" data-aos-delay="1000">2018</p>
                  <p className='ml-40 md:ml-52 -mt-8 text-[#006FB9] font-bold' data-aos="fade-up" data-aos-duration="1600" data-aos-delay="1000">Provide full service to clients including research and insights <span className="hidden md:inline">solutions</span></p>
                </motion.div>
                <motion.div 
                  className='ml-[350px] mt-4 md:ml-[460px] md:mt-8'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}  
                  whileHover={{ scale: 1.03, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} 
                >
                  <p className='text-white text-[18px] font-semibold' data-aos="fade-up" data-aos-duration="1800" data-aos-delay="1000">2019</p>
                  <p className='ml-48 md:ml-60 -mt-8 text-[#006FB9] font-bold' data-aos="fade-up" data-aos-duration="1800" data-aos-delay="1000">Partner with FMCG players for research services</p>
                </motion.div>
                <motion.div 
                  className='ml-[460px] mt-16 md:ml-[520px] md:mt-16'
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ scale: 1.03, rotateX: 5 }}
                  transition={{ duration: 0.3, ease: "easeOut" }} 
                >
                  <p className='text-white text-[18px] font-semibold' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">2020</p>
                  <p className='ml-40 md:ml-72 -mt-16 text-[#006FB9] font-bold' data-aos="fade-up" data-aos-duration="2000" data-aos-delay="1000">Relaunched as a research agency for all <br /><span className='ml-12'>research needs with new inclusions </span> <br /><span className='ml-20'>to the leadership team</span></p>
                </motion.div>
            </div>
          </div>
        </div>

        {/* Mobile Journey View */}
        {/* <div className='md:hidden bg-[#0B96D2] px-2 py-8 mt-6 mb-6'>
          <img src={JourneyMob} alt="Our Journey" className="w-full h-auto object-cover rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"/>
        </div> */}
    </div>
  )
}

export default Journey