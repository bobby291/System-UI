import { Header } from "../components/Header"
import { Footer } from "../components/Footer"
import aboutimg from "../assets/soludo.jpg";
import { Solu } from "../components/Solu";
import Edimg from "../assets/Edtech.jpg";
import SMEimg from "../assets/SMEs.jpg"

export default function Solution() {
    return (
        <div>
        <Header />
        <Solu />
        <div id='about'className='w-full h-auto flex flex-col items-center 
        justify-between lg:px-[80px] py-[60px] px-[20px] gap-[60px]'>
          <div 
      className='text-center mb-10'
    > 
      <h2
        data-aos="zoom-in" data-aos-delay="50" 
        className='text-3xl font-poppins font-medium mb-4'
      >
        AI-Powered SaaS Tools (Student & SME Solutions)
      </h2>
      <p 
        data-aos="zoom-in" data-aos-delay="50"
        className='text-gray-500 font-poppins items-center justify-center'
      >
        Cyclax is a AI-powered base innovation platform, designed to blend student, enterprises, organizations and goverment across African. 
        By combining smart tools with intutive design,Cyclax offers personalized solution in education, finance, productivity and Enterprenuership  etc. 
      </p>
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
                    Cyclax EdTech Product
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Cyclax Quick Study (for Students)

                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    Quick Study is a Cyclax Product designed to help students, professionals, and businesses access simplified learning materials, research support, and Ai-Powered study tools. it provides fast summaries, explanations, and actionable insight that make complex topics easier to understand. The goal is to improve productivity and knowledge retention with saving time.

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
                    <img src={Edimg}alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
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
                    Cyclax Product
                </span>
                <h2 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-3xl md:text-4xl font-bold text-navy-900 mt-4 mb-6 md:w-4/5'
                >
                    Brandex (for SMEs)
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    Brandex is a Cyclaxs smart branding and digital identity tool. it helps businesses and Individuals create, manage, and scale their brand presence with ease. From creating Logo concept and visual identity to content strategy and market position, Brandex combines creativity with AI-driven intelligence to give brands a unique edge in todays competitive market.

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
                    <img src={SMEimg}alt="" className='rounded-lg object-cover h-auto w-full'/>
                    
                </div>
            </div>
        </div>
    </section>

      <div id='top-box' className='w-full flex lg:flex-row flex-col items-center
      justify-between gap-[60px]'>
        <div className='lg:w-[60%] w-full flex flex-col justify-center items-start 
        gap-[10px]'>
          <h1 data-aos="zoom-in" data-aos-delay="50"className='text-purple-700 uppercase text-sm font-poppins'>CYCLAX TECH HUB</h1>
          <h1 data-aos="zoom-in" data-aos-delay="100"className='text-black lg:text-[45px] text-[30px] capitalize leading-[1.2em] 
          font-poppins'>Solutions that drivves real business value</h1>
          <p data-aos="zoom-in" data-aos-delay="150" className='text-gray-500 text-md font-poppins'>Cyclax delivers tailored technology solutions that help industries and enterprises innovate, grow, and create measurable impact. 
          
          </p>
        </div>

        <div className='lg:w-[40%] w-full flex lg:justify-end justify-start
        items-start'>
          <button data-aos="slide-up" data-aos-delay="50" className='bg-purple-700 hover:bg-black hover:text-white py-4 px-6 
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
            font-poppins'>Cyclax Tailored Industry Solution</h1>
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Banking & Finance:

              Secure payment platforms

              AI-driven fraud detection

              Digital banking solutions

              Mobile-first financial apps.
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Education:

            E-learning platforms

            AI study tools (Quick Study)

            Digital classrooms & school management systems
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Healthcare:

            Patient management systems

            AI diagnostics & telemedicine

            Healthcare data integration
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Insurance:

            Claims automation

            Data-driven risk analysis

            Customer self-service portals

            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Retail & E-commerce:

              Smart e-commerce platforms

              AI product recommendations

              Digital supply chain management
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Travel & Real Estate:

              Booking systems

              Property management solutions

              Smart listing & customer portals
            </p>
          </div>

          <div className='flex flex-col items-start justify-center gap-3'>
            {/* <h1 data-aos="zoom-in" data-aos-delay="50"  className='text-black text-[35px] capitalize leading-[1.2]
            font-poppins'>Security</h1> */}
            <p data-aos="zoom-in" data-aos-delay="120" className='text-gray-500 text-md font-poppins'>Public Sector

            E-governance platforms

            Digital citizen services

            AI-driven public policy insights
            </p>
          </div>
          {/*           <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Talk to our Expertise 
                    
                </a> */}

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
                    Why Chose Us
                </h2>
                <p 
                    data-aos="zoom-in" data-aos-delay="50"
                    className='text-gray-600 mb-8 md:w-4/5'
                >
                    At Cyclax, our core solutions are designed with one goal in mind to create real impact for business, organizations, and communities. 
                    From AI-Powered automation to enterprise software, cloud migration, and business Intelligence, we deliver technology that goes beyound. Cyclax is more than a software company — we are a technology partner committed to delivering innovation with real impact. We combine expertise in web and mobile development, AI, cloud, and business intelligence with a deep understanding of industry challenges across Africa. Our solutions are designed to be scalable, secure, and affordable, making advanced technology accessible to enterprises, governments, students, and SMEs. By blending local insight with global standards, Cyclax ensures that every solution we build drives measurable business value, accelerates growth, and empowers organizations and individuals to thrive in a digital economy


 
                  
                </p>
                {/* <a 
                    data-aos="zoom-in" data-aos-delay="50"
                    href="/student-core"
                    className='text-purple-900 hover:text-purple-500 font-semibold flex items-center gap-2 hover:gap-4 transition-all'
                >
                    Engage with Cyclax 
                    
                </a> */}
                
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