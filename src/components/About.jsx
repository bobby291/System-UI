import React, { useEffect } from 'react'
import aboutimg from "../assets/about.jpg";
import AOS from 'aos';
import 'aos/dist/aos.css'

export const About = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div id='about'className='w-full h-auto flex flex-col items-center 
    justify-between lg:px-[80px] py-[60px] px-[20px] gap-[60px]'>
      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center
      justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start 
        gap-[10px]'>
          <h1 data-aos="zoom-in" data-aos-delay="50"className='text-purple-700 uppercase text-sm font-poppins'>WHO WE ARE</h1>
          <h1 data-aos="zoom-in" data-aos-delay="100"className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] 
          font-poppins'>Delivering Excellence in IT Solution</h1>
          <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins'>At Cyclax, we believe excellence in technology delivery goes beyond writing
            code, it's about creating solution that drives measurable impact. From AI-Powered tools to Enterprise software, we combine innovation, 
            percision, and reliability to help business, organizations, goverments, student, and SMEs scale with confidence. Every
            solution we build is desgin to accelerate growth, unlock opportunities, and deliver lasting value in an ever-changing Digital 
            economy
          </p>
        </div>

        <div className='lg:w-[40%] w-full flex lg:justify-end justify-start
        items-start'>
          <button data-aos="slide-up" data-aos-delay="50" className='bg-purple-700 hover:bg-black hover:text-white py-4 px-6 
          text-white text-md font-semibold mt-5 rounded-md'>LEARN MORE</button>
        </div>
      </div>

      <div className='w-full flex lg:flex-row flex-col
      justify-between items-center gap-[80px]'>
        <div data-aos="zoom-in" data-aos-delay="230" id='img-box' className='lg:w-[40%] w-full'>
          <img src={aboutimg} alt="" className='w-full bg-cover bg-center'/>
        </div>
        <div id='content-box' className='lg:w-[60%] w-full flex flex-col items-start 
        justify-between gap-[60px]'>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Expertise</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Harnessing deep expertise in 
              software, AI, and Enterprise solution to deliver innovation with impact. Blending technology and strategy to 
              solve complex challenges across industires.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Building technology with security at
             its core to protect your data, users, and business. We safeguard every solution with enterprise-grade security and compliance standard, 
             From cloud to AI, we embed security into every layer of our solutions.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Scalability</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Solution design to scale seemlessly as your business
              grows and evolves. From startups to enterprise, we build technology that expands with your vision. Blending organizations with scalable solutions
              built for long-term success.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}