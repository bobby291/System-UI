import React from 'react'
import twitterIcon from "../assets/twitterIcon.svg"
import Logo from "../assets/cyclax-logo1.png"


export const Footer = () => {
  return (
<div className='bg-black mt-2 text-gray-500/80 pt-8 px-6 md:px-16 lg:px-24 xl:px-32'>
            <div className='flex flex-wrap justify-between gap-12 md:gap-6'>
                <div className='max-w-80'>
                    <img src={Logo} alt="Cylax Logo" className='h-8 md:h-12 w-auto' />        
                    <p className='text-sm text-white'>
                        From AI to enterprise solutions, Cyclax helps student, SMEs, and Industries scale with technology solutions and
                        service. Cyclax build software and AI-powered tools that transform
                    </p>
                    
                </div>

                <div>
                    <p className='font-playfair text-lg text-white font-semibold'>SERVICES</p>
                    <ul className='mt-3 flex flex-col text-white font-poppins gap-2 text-sm'>
                        <li><a href="#" className=' hover:text-purple-700'>WEB & MOBILE DEVELOPMENT</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>AI TOOLS AND AUTOMATION</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>ENTERPRISE MOBILITY</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>BUSINESS INTELLEGENCES</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>CLOUD AND TESTING</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-white font-semibold'>INDUSTRIES</p>
                    <ul className='mt-3 text-white font-poppins flex flex-col gap-2 text-sm'>
                        <li><a href="#" className=' hover:text-purple-700'>BANKING AND FINANCES</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>INSURANCE</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>INSURANCE</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>HEALTH</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>RETAIL & CONSUMER PRODUCTS</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>TRAVEL</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>REAL ESTATE</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>PUBLIC SECTOR</a></li>
                    </ul>
                </div>

                <div>
                    <p className='font-playfair text-lg text-white font-semibold'>SOLUTIONS</p>
                    <ul className='mt-3 text-white font-poppins flex flex-col gap-2 text-sm'>
                        <li><a href="#" className=' hover:text-purple-700'>SOFTWARE DEVELOPMENT</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>AI & AUTOMATION</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>CLOUD INTEGRATION</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>BUSINESS INTELLIGENCES & ANALYTICS</a></li>
                        <li><a href="#" className=' hover:text-purple-700'>ENTERPRISE MOBILITY </a></li>
                        <li><a href="#" className=' hover:text-purple-700'>DIGITAL TRANSFORMATION.</a></li>
                    </ul>
                </div>

                <div className='max-w-80'>
                <div className='flex items-center gap-3 mt-4'>
                        <img src={twitterIcon} alt="twitter-icon" className='w-6'/>  
                    </div>
                    <p className='font-playfair text-lg text-white'>CONTACT</p>
                    <ul className='mt-3 text-white flex flex-col gap-2 text-sm'>
                        <li><a href="#">cyclax424@gmail.com</a></li>
                        <li><a href="#">+234 9064833829</a></li>
                    </ul>
                </div>

                
            </div>
            <hr className='border-gray-300 mt-8' />
            <div className='flex flex-col md:flex-row text-white gap-2 items-center justify-center py-5'>
                <p>© {new Date().getFullYear()} Cyclax Tech. All rights reserved.</p>
            </div>
        </div>
  )
}

