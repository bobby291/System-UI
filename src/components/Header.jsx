import React, { useState } from 'react'
import { Menu, X } from 'lucide-react'
import Logo from "../assets/cyclax-logo1.png"

export const Header = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false)
    const [activeLink, setActiveLink] = useState('#home')

    const navLinks = [
        {
            href: "#home",
            label: "Company"
        },
        {
            href: "#about",
            label: "Resources"
        },
        {
            href: "#serivces",
            label: "Features"
        },
        {
            href: "#testimonials",
            label: "Solutions"
        },
    ]

  return (
    <nav
        className='fixed top-0 left-0 right-0 bg-black backdrop-blur-sm z-50 shadow-sm'
        >
        <div className='w-full flex justify-between items-center container mx-auto px-4 sm:px-6 lg:px-8 md:h-20 h-16'>
            {/* logo */}
            <div
            className='flex items-center gap-1 cursor-pointer'>
                <img src={Logo} alt="Cylax Logo" className='h-8 md:h-12 w-auto' />
            </div>

            {/* mobile menu */}
            <button
            onClick={() => setIsMenuOpen(!isMenuOpen)} className='md:hidden p-2'>
                {
                    isMenuOpen ? <X className='size-6 text-white'/> : <Menu className='size-6 text-white'/>
                }
            </button>

            {/* desktop navitems */} 
            <div
                className='hidden md:flex items-center gap-10'>
                {
                    navLinks.map((link, index) => (
                        <a key={index} href={link.href} 
                        onClick={() => setActiveLink(link.href )}
                        className={`text-sm font-medium relative after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-0 hover:after:w-full after:bg-purple-600 after:transition-all ${activeLink === link.href ? "text-purple-600 after:w-full" : "text-white hover:text-purple-600 "}`}>
                            {link.label}
                        </a>
                    ))
                }
            </div>

            {/* get in touch button */}
            <button className='hidden md:block font-poppins bg-purple-600 items-center h-15 text-white px-6 py-2.5 rounded-lg hover:bg-blue-900 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500'>
                <a href="#newsletter">Learn More</a>
            </button>
        </div>

        {/* Mobile Menu Items  */}
        {
            isMenuOpen && (
                <div
                    className='md:hidden bg-white border-t border-gray-100 py-4'>
                    <div 
                        className='container mx-auto px-4 space-y-4'>
                        {navLinks.map((link, index) =>(
                            <a onClick={() => {
                                setActiveLink(link.href);
                                setIsMenuOpen(false);
                            }}
                            key={index} href={link.href} 
                            className={`block text-sm font-medium py-2 ${activeLink === link.href ? "text-blue-600" : "text-gray-600 hover:text-gray-900"}`}>{link.label}</a>
                        ))}

                        <button
                        className='w-full bg-purple-600 items-center h-15 text-white px-6 py-2.5 rounded-lg hover:bg-purple-900 text-sm font-medium transition-all hover:shadow-lg hover:shadow-blue-500'>
                        <a href="#newsletter">Learn More</a>
                        </button>
                    </div>
                </div>
            )
        }
    
    </nav>

  )
}
