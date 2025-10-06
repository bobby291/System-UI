import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Firm } from "../components/company-hero"
import aboutimg from "../assets/comp.jpg";
import visionimg from "../assets/vision.jpg"
import missionimg from "../assets/mission.jpg"
import person1img from "../assets/person2.jpg"
import { useNavigate } from "react-router-dom";
export default function Company() {

  const navigate = useNavigate();
    return (
        <div>
        <Header />
        <Firm />
        <div id='about'className='w-full h-auto flex flex-col items-center 
        justify-between lg:px-[80px] py-[60px] px-[20px] gap-[60px]'>
      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center
      justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start 
        gap-[10px]'>
          <h1 data-aos="zoom-in" data-aos-delay="50"className='text-purple-700 uppercase text-sm font-poppins'>CYCLAX TECH HUB</h1>
          <h1 data-aos="zoom-in" data-aos-delay="100"className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] 
          font-poppins'>Blending Technology and Business for Africa's Growth</h1>
          <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins'>We provide innovative software and AI-powered solutions that empowers business, organizations, governments and student across Africa 
            economy
          </p>
        </div>

        <div className='lg:w-[40%] w-full flex lg:justify-end justify-start
        items-start'>
          <button onClick={() => navigate('/solutio')}  data-aos="slide-up" data-aos-delay="50" className='bg-purple-700 hover:bg-black hover:text-white py-4 px-6 
          text-white text-md font-semibold mt-5 rounded-md'>Explore Our Solution</button>
        </div>
      </div>

      <div className='w-full flex lg:flex-row flex-col
      justify-between items-center gap-[80px]'>
        <div data-aos="zoom-in" data-aos-delay="230" id='img-box' className='lg:w-[40%] w-full'>
          <img src={aboutimg} alt="" className='w-full bg-cover bg-center rounded'/>
        </div>
        <div id='content-box' className='lg:w-[60%] w-full flex flex-col items-start 
        justify-between gap-[60px]'>
          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 data-aos="zoom-in" data-aos-delay="50" className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Cyclax Overview</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Cyclax is a software and Technology Hub that blends the economy with Innovation by Delivery intelligent solutions for business, organization, government and students. We specialized in software services such as Web and Mobile Development, AI Tools & Automation, Enterprise Mobility, Business Intelligence, and Cloud Testing.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>We accelerate enterprise strategies across industries-Banking & Finance, Education, Healthcare, Insurance, Retail & E-commerce, Travel, Real Estate, and Public Sector, by providing tailored technology that delivers measurable value.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Currently, we are developing AI-Powered Saas tools which is Quick Study an academic companion for students, and Brandex, a business growth toolkit for SMEs, to solve real problems and empower Africa’s Digital transformation.
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
                    CYCLALX CORE VIEW
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Mission
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    Our Mission is to blend technology with economy progress by delivering affordable, intelligent, and scalable digital solutions. We aim to equip students, SMEs, enterprise, and government with tools that transform challenges into opportunities and unlock real business value. Through innovation, collaboration, and a deep understanding of Africa’s socio-economic landscape, we work to provide tailored digital solution across key industries such as banking, education, healthcare, insurance, retail & e-commerce, real estate, travel, and the public sector.
                  
                </p>
                {/* <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Learn more about monitoring 
                    
                </a> */}
            </div>

            {/* Right Side Content */}            <div 
                className='w-full md:w-1/2 relative'
            >
                <div 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='p-4'
                >
                    <img src={missionimg} alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
                </div>
            </div>
        </div>
    </section>

    <section 
        className='max-w-7xl mx-auto px-4 py-16 md:py-24'
    >
        <div className='flex flex-col md:flex-row items-center gap-12'>
            {/* Left Side Content */}
            <div 
                className='w-full md:w-1/2'
            >
                 {/* 
                 <span
                  data-aos="zoom-in" data-aos-delay="50" 
                    className='text-purple-500 font-semibold'
                >
                    CYCLALX CORE VIEW
                </span> */}
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Vision
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    To be Africa’s leading technology hub, empowering businesses, governments, and individuals with innovative software and AI solution that drives sustainable growth and global competitiveness. We envision a future where innovation is not just a privilege for advanced economies but a shared opportunities for Africa to solve its unique challenges through technology
                  
                </p>
                {/* <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Learn more about monitoring 
                    
                </a> */}
                
            </div>

            {/* Right Side Content */}            <div 
                className='w-full md:w-1/2 relative'
            >
                <div 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='p-4'
                >
                    <img src={visionimg} alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
                </div>
            </div>
        </div>
    </section>

    <h1 data-aos="zoom-in" data-aos-delay="120"  className="text-3xl font-medium text-scale-800 text-center">Meet Our Team</h1>
    <p data-aos="zoom-in" data-aos-delay="120"  className="text-scale-500 text-center">The people behind the building of Cyclax, passionate about what they do.</p>
    <div data-aos="zoom-in" data-aos-delay="50"  className="flex flex-wrap items-center justify-center gap-6 mt-12">
    <div className="max-w-80 bg-black text-white rounded-2xl">
        <div className="relative -mt-px overflow-hidden rounded-2xl">
          <img src={person1img} alt="" data-aos="zoom-in" data-aos-delay="100"  className="h-[270px] w-full rounded-2xl
          hover:scale-105 transition-all duration-300 object-cover object-top"/>
          <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
        </div>
        <div data-aos="zoom-in" data-aos-delay="50"  className="px-4 pb-6 text-center">
          <p data-aos="zoom-in" data-aos-delay="100"  className="mt-4 pb-6 text-lg">Ogbonna Paschal</p>
          <p data-aos="zoom-in" data-aos-delay="100"  className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent 
          bg-clip-text">Founder/Software Engineer</p>
        </div>
      </div>

       {/* <div className="max-w-80 bg-black text-white rounded-2xl">
        <div className="relative -mt-px overflow-hidden rounded-2xl">
          <img src="https://images.unsplash.com/photo- 1633332755192-727a05c4013d?q=80&w=600" alt="" className="h-[270px] w-full rounded-2xl
          hover:scale-105 transition-all duration-300 object-cover object-top"/>
          <div className="absolute bottom-0 z-10 h-60 w-full bg-gradient-to-t pointer-events-none from-black to-transparent"></div>
        </div>
        <div className="px-4 pb-6 text-center">
          <p className="mt-4 pb-6 text-lg">Ogbonna Paschal</p>
          <p className="text-sm font-medium bg-gradient-to-r from-[#8B5CF6] via-[#9938CA] to-[#E0724A] text-transparent 
          bg-clip-text">Founder/Software Engineer</p>
        </div>
      </div> */}
      
    </div>
    <Footer />
            
            
        </div>
  
);
};