import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import { Reso } from "../components/Reso"
import aboutimg from "../assets/reso.jpg";
import opporimg from "../assets/oppo.jpg"
import supportimg from "../assets/support.jpg"

export default function Resources() {
    return (
        <div>
        <Header />
        <Reso />
        <div id='about'className='w-full h-auto flex flex-col items-center 
        justify-between lg:px-[80px] py-[60px] px-[20px] gap-[60px]'>
      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center
      justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start 
        gap-[10px]'>
          <h1 data-aos="zoom-in" data-aos-delay="50"className='text-purple-700 uppercase text-sm font-poppins'>WHO WE ARE</h1>
          <h1 data-aos="zoom-in" data-aos-delay="100"className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] 
          font-poppins'>explore curated resources, guides, and tools from Cyclax.</h1>
          <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins'>At Cyclax, we believe excellence in technology delivery goes beyond writing
            code, it's about creating solution that drives measurable impact. From AI-Powered tools to Enterprise software, we combine innovation, 
            percision, and reliability to help business, organizations, goverments, student, and SMEs scale with confidence. Every
            solution we build is desgin to accelerate growth, unlock opportunities, and deliver lasting value in an ever-changing Digital 
            economy
          </p>
        </div>

        {/* <div className='lg:w-[40%] w-full flex lg:justify-end justify-start
        items-start'>
          <button data-aos="slide-up" data-aos-delay="50" className='bg-purple-700 hover:bg-black hover:text-white py-4 px-6 
          text-white text-md font-semibold mt-5 rounded-md'>LEARN MORE</button>
        </div> */}
        
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
            font-poppins'>Guides and Insights</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>At Cyclax, we believe knowledge is 
              the foundation for innovation. Our guides, whitepapers, and case studies provide practical insights into how technology is shaping 
              industries across Africa. From digital transformation in banking to AI-driven solutions in healthcare and education, these resources 
              are designed to help businesses, organizations, and governments make informed decisions and stay ahead of industry trends.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Industry Resources</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Every industry faces unique challenges, 
              and at Cyclax we provide tailored solutions that deliver real value. In this section, you’ll find resources for Banking & Finance, 
              Education, Healthcare, Insurance, Retail, Real Estate, Travel, and the Public Sector. Each collection of materials highlights how digital tools, 
              automation, and business intelligence can transform operations, improve customer experience, and unlock growth opportunities in your sector.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>AI Tools & SaaS Help Center</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Our AI-powered tools, 
              Quick Study and Brandex, are built to empower students and SMEs in Africa. This section provides step-by-step 
              tutorials, user guides, and practical tips to help students study more effectively and SMEs scale their businesses 
              with affordable technology. Whether you’re preparing for exams, building an online presence, or looking for smarter 
              ways to manage your business, these resources will help you get the best out of our AI solutions.

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
                    CYCLALX RESOURCES
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Community & Support
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    At Cyclax, we are building more than just software we are building a community. Through our blog, newsletters, events, and meetups, we bring together innovators, students, and businesses to exchange ideas and grow together. This section also provides access to FAQs, troubleshooting guides, and dedicated support resources, ensuring you always have the help you need on your journey with Cyclax.
                  
                </p>

                {/*  <a 
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
                    <img src={supportimg} alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
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
                    CYCLALX RESOURCES
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Opportunities
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                  Innovation grows stronger when opportunities are shared. That’s why we highlight scholarships, internships, hackathons, and collaboration opportunities that align with our vision of empowering Africa through technology. Whether you’re a student seeking growth, an SME looking for partnerships, or a business aiming to innovate, this section connects you with programs and initiatives that can accelerate your success.                  
                </p>
                <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Join Cyclax 
                    
                </a>
            </div>

            {/* Right Side Content */}
            <div 
                className='w-full md:w-1/2 relative'
            >
                <div 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='p-4'
                >
                    <img src={opporimg} alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
                </div>
            </div>
        </div>
    </section>
    <Footer />
            
            
        </div>
    );
};