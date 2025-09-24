import React, { useEffect } from 'react'
import heroing from '../assets/hero.png'
import backgroundimage from '../assets/cyclax-hero.jpg'
import AOS from 'aos';
import 'aos/dist/aos.css';


export const Hero = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    }) 
  }, []);

  return (
    <div className='w-full h-auto flex lg:flex-row flex-col 
    justify-between items-center lg:px-[80px] px-[20px] lg:pt-[150px] pt-[120px]
    lg:pb-[80px] pb-[60px] lg:gap-[60px] gap-[40px] bg-cover bg-center' style={{
      backgroundImage: `url(${backgroundimage})` }}>
      <div className='lg:w-1/2 w-full flex flex-col gap-[20px] items-start justify-center'>
        <h1 data-aos="zoom-in" data-aos-delay="50" className='text-purple-400 uppercase text-sm font-poppins'>Seemless IT Solution</h1>
        <h1 data-aos="zoom-in" data-aos-delay="100" className='text-gray-300 lg:text-[70px] text-[40px] capitalize font-poppins 
        leading-[1.2em] font-poppins'>Transforming Ideas into Digital Solution</h1>
        <p data-aos="zoom-in" data-aos-delay="170" className='text-gray-300 text-md font-poppins'>Empowering business, organizations, and goverment with software and AI solutions that drives real value.
         That transform industires and accelerate Africa's future</p>
        <button data-aos="slide-up" data-aos-delay="200" className='bg-purple-900 hover:bg-white hover:text-black py-4 px-6
        text-white text-md font-semibold mt-5 rounded-md'>EXPLORE SOLUTION</button>
      </div>
      <div className='lg:w-1/2 w-full flex justify-center items-center'>
        <div data-aos="zoom-in" data-aos-delay="230" className='lg:w-[80%] w-full flex justify-center items-center px-5 pt-5 bg-purple-400 bg-opacity-30 z-10 rounded-md'>
          <div className='opacity-100'>
            <img src={heroing} alt="" />
          </div>
          
        </div>
      </div>
    </div>
  )
}


