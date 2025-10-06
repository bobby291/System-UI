import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import aboutimg from "../assets/fea.jpg";
import { Fea } from "../components/Fea";
import Indusimg from "../assets/feat.jpg"


export default function Features() {

    return (
        <div>
        <Header />
        <Fea />
        <div id='about'className='w-full h-auto flex flex-col items-center 
        justify-between lg:px-[80px] py-[60px] px-[20px] gap-[60px]'>
      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center
      justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start 
        gap-[10px]'>
          <h1 data-aos="zoom-in" data-aos-delay="50"className='text-purple-700 uppercase text-sm font-poppins'>WHO WE ARE</h1>
          <h1 data-aos="zoom-in" data-aos-delay="100"className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] 
          font-poppins'>Cyclax blends technology with business strategy.</h1>
          <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins'>Cyclax blends technology with business strategy, delivering AI-powered tools and enterprise solutions that drive growth, innovation, and real value.
          </p>
        </div>

        <div className='lg:w-[40%] w-full flex lg:justify-end justify-start
        items-start'>
          {/* <button data-aos="slide-up" data-aos-delay="50" className='bg-purple-700 hover:bg-black hover:text-white py-4 px-6 
          text-white text-md font-semibold mt-5 rounded-md'>LEARN MORE</button> */}
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
            font-poppins'>Cyclax Core Features</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>At Cyclax, we design and deliver technology solutions that blend innovation with real business strategy. Our features are built to empower businesses, organizations, governments, students, and SMEs with tools that solve today’s challenges while preparing for tomorrow’s opportunities. From cutting-edge web and mobile development to AI-powered automation, enterprise mobility, and advanced business intelligence, Cyclax creates software that drives measurable impact.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Scalability</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>We also offer robust cloud and testing solutions, ensuring that every product we deliver is scalable, secure, and reliable. Beyond enterprise services, Cyclax is pioneering AI-powered SaaS tools such as Quick Study for students and Brandex for SMEs, helping learners study smarter and small businesses scale affordably.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>These features work together to accelerate growth, improve efficiency, and unlock opportunities across industries including Banking and Finance, Education, Healthcare, Insurance, Retail, Travel, Real Estate, and the Public Sector. With Cyclax, technology becomes more than a service — it becomes a partner for progress.
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
                    CYCLALX CORE FEATURES
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Provides Smart, AI-Powered solutions That Accelerate Growth
                    (for Businesses, Organizations, Government)
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    Web & Mobile Development – Custom apps and platforms to help enterprises and startups scale.

                    AI Tools & Automation – Smart solutions that improve efficiency and decision-making.

                    Enterprise Mobility – Secure mobile-first strategies for workforce productivity.

                    Business Intelligence – Data-driven insights to guide smarter decisions.

                    Cloud & Testing – Scalable cloud deployment and end-to-end product testing.
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
                    Cyclax Industry Features
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Specific Industry solutions and features that scales grwoth.
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    Banking & Finance  → AI-powered fraud detection, secure payment systems.

                    Education → E-learning platforms, digital classrooms, AI study tools.

                    Healthcare → Patient management, AI diagnostics, telemedicine.

                    Insurance → Claims automation, data-driven risk management.

                    Retail & Consumer → Smart e-commerce platforms, AI product recommendations.

                    Travel & Real Estate → Booking platforms, property management software.

                    Public Sector → Digital governance, citizen engagement platforms.

                </p>
                {/* <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Learn more about monitoring 
                    
                </a> */}
                
            </div>

            {/* Right Side Content */}           
             <div 
                className='w-full md:w-1/2 relative'
            >
                <div 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='p-4'
                >
                    <img src={Indusimg}alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
                </div>
            </div>
        </div>
    </section>

    


    <Footer />
            
            
        </div>
  
);
};