import React from 'react'
import Rasitha from '../../assets/images/team/Rasitha1.png'
import Thisaru from '../../assets/images/team/Thisaru1.png'
import Slider from "react-slick";


const members = [
    {
        name: "Rasitha Panagoda",
        Image: Rasitha,
        Desc: "With over 20 years of distinguished experience in research project management at Nielsen Sri Lanka, he has excelled in a senior leadership role, shaping impactful insights and solutions. \
        He has successfully led more than 1,000 diverse projects, including nationwide retail censuses and large-scale qualitative and quantitative studies. His expertise extends to managing data collection and backend operations for over 1,000 studies, spanning customer and retailer satisfaction, product and concept testing, and advertisement evaluations. \
        A seasoned professional, his legacy is defined by delivering data-driven strategies that drive success and innovation."
    },
    {
        name: "Thisaru Hemachandra",
        Image: Thisaru,
        Desc: "With over 07 years of experience in market research, blending both quantitative and qualitative approaches, she made her mark as a Senior Research Manager at Nielsen IQ Sri Lanka (formerly Nielsen Sri Lanka). \
        Armed with a BA in Sociology and a Master’s degree in Regional Development, she has expertly navigated projects for a diverse array of high-profile clients, including UNDP, IFC, World Bank, ILO, LIRNEasia, Dialog, and NBRO. \
        Her work reflects a deep understanding of regional dynamics and global perspectives, consistently delivering insights that drive impactful decisions."
    }
]

const Team = () => {
    const sliderSettings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: true,
        adaptiveHeight: true,
    };

    return (
        <div className="p-8 text-center bg-[#E6E7E9]">
            <h1 className='text-4xl mb-12 font-bold text-[#00B0F0] uppercase text-left ml-4 md:ml-24' data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">Our Team</h1>
            <div className="max-w-6xl mx-auto">
                <Slider {...sliderSettings}>
                    {members.map((member, index) => (
                        <div key={index}>
                            <div className="flex flex-col md:flex-row items-center gap-8 p-8 md:p-12 bg-[#00B0F0] rounded-lg" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000">
                                <div className="w-full md:w-1/3">
                                    <img src={member.Image} alt={member.name} className="rounded-lg w-full h-auto" data-aos="fade-up" data-aos-duration="1000" data-aos-delay="1000"/>
                                </div>
                                <div className="w-full md:w-2/3 text-left" >
                                    <h2 className="text-2xl font-bold mb-4" data-aos="fade-up" data-aos-duration="1200" data-aos-delay="1000">{member.name}</h2>
                                    <p data-aos="fade-up" data-aos-duration="1400" data-aos-delay="1000">{member.Desc}</p>
                                </div>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </div>
    )
}

export default Team