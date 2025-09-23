import React, { useEffect } from 'react'
import backgroundImage from "../assets/hero_bg.jpg";
import { projects } from '../export';
import AOS from 'aos';
import 'aos/dist/aos.css'

export const Portfolio = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  return (
    <div id='project' className='w-full h-auto flex flex-col items-center justify-center lg:px-[80px] px-[20px] lg:py-[80px] py-[60px] gap-[20px] bg-cover'
    style={{ backgroundImage: `url(${backgroundImage})`}}>
      <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-themegreen uppercase text-sm font-poppins'>
        CYCLAX PORTFOLIO </h1>
      <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white lg:text-[45px] text-[30px] capitalize
      leading-[1.2em] font-poppins lg:w-50%] w-full text-center'>Explore Our Portfolio And Showcase our Solutions</h1>
      <p data-aos="zoom-in" data-aos-delay="50" className='text-gray-300 text-md font-poppins lg:w-[60%] text-center w-full '>
        Cyclax offers scalable Software and IT solutions and Deliver  Digital Services
      </p>

      <div className='grid lg:grid-cols-2 justify-center items-center gap-10 mt-8'>
        {projects.map((projects, index) => (
          <div key={index} className='w-full flex flex-col justify-center items-start'>
            <img src={projects.img} alt="" className='w-full bg-cover bg-center' data-aos="zoom-in" data-aos-delay="50"/>
            <div data-aos="zoom-in" data-aos-delay="50" className='bg-gray-600 p-8 flex flex-col justify-center items-start gap-4'>
              <h1 data-aos="zoom-in" data-aos-delay="50" className='text-white lg:text-[35px] text-[22px] capitalize leading-[1.2em] font-poppins text-left'>{projects.title}</h1>
              <p data-aos="zoom-in" data-aos-delay="50" className='text-gray-300 text-sm font-poppins text-left'>{projects.para}</p>
               <button className='text-themegreen hover:text-white text-sm font-semibold mt-5'>
                  VIEW MORE
               </button>
            </div>
          </div>
        ))}

      </div>

      
    </div>
  )
}
