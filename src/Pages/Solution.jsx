import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import aboutimg from "../assets/about.jpg";
import { Solu } from "../components/Solu";

export default function Solution() {
    return (
        <div>
        <Header />
        <Solu />
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

    <section 
        className='max-w-7xl mx-auto px-4 py-16 md:py-24'
    >
        <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* Left Side Content */}
            <div 
                className='w-full md:w-1/2'
            >
                <span
                  data-aos="zoom-in" data-aos-delay="50"
                    className='text-purple-500 font-semibold'
                >
                    CYCLALX CORE SOLUTIONS
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Provides Smart, AI-Powered solutions That Drives Impact
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    At Cyclax, our core solutions are designed with one goal in mind to create real impact for business, organizations, and communities. 
                    From AI-Powered automation to enterprise software, cloud migration, and business Intelligence, we deliver technology that goes beyound 
                  
                </p>
                <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Learn more about monitoring 
                    
                </a>
            </div>

            {/* Right Side Content */}            <div 
                className='w-full md:w-1/2 relative'
            >
                <div 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='p-4'
                >
                    <img src="/strategy.jpg" alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
                </div>
            </div>
        </div>
    </section>
    <Footer />
            
            
        </div>
  
);
};