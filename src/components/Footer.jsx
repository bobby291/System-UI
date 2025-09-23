import React from 'react'
import twitterIcon from "../assets/twitterIcon.svg"

export const Footer = () => {
  return (
<div className='bg-[#F6F9FC] text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    {/*<img src={assets.logo}alt="logo" className='mb-4 h-8 md:h-9 invert opacity-80' />*/}
                    <p className='text-sm'>
                        Discover the world's most extraordinary places to stay, form boutique hotels to luxury villas and private islands.
                    </p>
                    
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>SERVICES</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Web and Mobile Development</a></li>
                        <li><a href="#">AI tools and Automation</a></li>
                        <li><a href="#">Enterprise Mobility</a></li>
                        <li><a href="#">Business Intelligences</a></li>
                        <li><a href="#">Cloud and Testing</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-gray-800'>INDUSTRIES</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">Banking and Finance</a></li>
                        <li><a href="#">Insurance</a></li>
                        <li><a href="#">Manufacturing</a></li>
                        <li><a href="#">Retail and Consumer Products</a></li>
                        <li><a href="#">Travel</a></li>
                        <li><a href="#">Real Estate</a></li>
                        <li><a href="#">Public Sector</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                <div className='flex items-center gap-3 mt-4'>
                        <img src={twitterIcon} alt="twitter-icon" className='w-6'/>  
                    </div>
                    <p className='font-playfair text-lg text-gray-800'>CONTACT</p>
                    <ul className='mt-3 flex flex-col gap-2 text-sm'>
                        <li><a href="#">cyclax424@gmail.com</a></li>
                        <li><a href="#">+234 9064833829</a></li>
                    </ul>
                </div>

                
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row gap-2 items-center justify-center py-5'>
                <p>© {new Date().getFullYear()} Cyclax Tech. All rights reserved.</p>
            </div>
        </div>
  )
}

