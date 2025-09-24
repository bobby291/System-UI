import React, { useEffect } from 'react'
import AOS from 'aos';
import "aos/dist/aos.css"

export const Client = () => {

  useEffect(() => {
    AOS.init({
      duration: 800,
      delay: 200,
      once: false,
    });
  }, []);

  const features = [
    {
      icon: "🔍", 
      title: "Find out what you need",
      description: "Discover AI-Powered tools tailored to your goals whether you are a student looking for academic support, a young enterprenuer building your first business, or someone managinig personal finance"
    },
    {
      icon: "⚙️",
      title: "Work out the details", 
      description: "Cyclax helps you go beyound ideas we give you tools to structure you plans, fine-tune your goals and take pratical steps forward in shaping you business or startups"
    },
    {
      icon: "🚀",
      title: "We get to work fast",
      description: "No long setup, no confusion, just smart tools ready to help you move forward. Whether you are planing your finance or setting up small businesses or an idea."
    }
]
  return (
    <section 
    className=' bg-white mx-auto px-4 py-16'
  > 
    {/* heading text */}
    <div 
      className='text-center mb-10'
    > 
      <h2
        data-aos="zoom-in" data-aos-delay="50" 
        className='text-3xl font-poppins font-medium mb-4'
      >
        Transform your Ideas into Reality
      </h2>
      <p 
        data-aos="zoom-in" data-aos-delay="50"
        className='text-gray-500 font-poppins items-center justify-center'
      >
        Cyclax is a AI-powered base innovation platform, designed to blend student, enterprises, organizations and goverment across African. 
        By combining smart tools with intutive design,Cyclax offers personalized solution in education, finance, productivity and Enterprenuership  etc. 
      </p>
    </div>



    {/* feature boxes */}
    <div 
      className='grid grid-cols-1 md:grid-cols-3 gap-8'
    >
      {features.map((feature, index) =>(
            <div 
              key={index}
              className='flex flex-col text-center items-center p-6'
            >
              <div 
                  className='w-24 h-24 rounded-full items-center justify-center' 
                  style={{
                      backgroundColor: index === 0 ? "FF1EFFD" : 
                                      index === 1 ? "FEE7E3" : 
                                      "FFF3E4"
                  }}
                >
                  <div
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl'
                  >
                    {feature.icon}
                  </div>
                </div>

                <h3 
                  data-aos="zoom-in" data-aos-delay="50"
                  className='text-1xl uppercase font-poppins font-medium mb-3'
                >
                  {feature.title}
                </h3>
                <p 
                  data-aos="zoom-in" data-aos-delay="50"
                  className='text-gray-500 font-poppins text-center'
                > 
                  {feature.description}
                </p> 
            </div>
        ))}
    </div>



    {/* Button */}
    <div 
      className='text-center mt-12'
    >
      <button 
        className='bg-purple-700 text-white font-poppins cursor-pointer py-3 px-6 rounded-full hover:bg-black hover:text-white transition-colors shadow-2xl relative'
      > 
        Learn More
        </button>
    </div>
    

    </section>
  )
}

