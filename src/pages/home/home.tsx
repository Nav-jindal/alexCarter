// Packages:
import { useEffect } from "react"

// Sections:
import Services from "./services"
import Quotation from "./quotation"
import Testimonials from "./testimonials"
import ContactSection from "./contactSection"

// Packages:
import { NavLink } from "react-router-dom"

// Icons:
import { FaArrowRightLong } from "react-icons/fa6"


const Home = () => {
    // Effects:
    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    // Return:
    return (
        <>
            <div className='mb-[100px]'>
                <div className='h-[calc(100vh-77px)] flex flex-col justify-center'>
                    <div className='mb-[42px] max-w-[600px]'>
                        <h1 className='text-[41.053px] sm:text-[58.452px] font-bold'>The <span className='text-[#E3CD27]'>Gold Standard</span> in Fitness </h1>
                    </div>
                    
                    <div className='flex items-center gap-[18px] flex-wrap'>
                    
                        <NavLink to='contact' type='button' className='flex items-center justify-center gap-[24px] px-[24px] py-[12px] md:px-[30px] bg-[#E3CD27] text-[#040404] text-[20.25px] font-semibold hover:gap-[50px] transition-all duration-[200ms] ease-in-out'>
                            <span>Enquire Now</span>
                            <FaArrowRightLong  
                                color="#040404" 
                                size={24}
                            />
                        </NavLink>

                        <NavLink to='about' type='button' className='px-[24px] py-[12px] md:px-[30px] border-[2px] border-solid bg-transparent border-[#E3CD27] text-[#E3CD27] text-[18px] sm:text-[20.25px] transition-all duration-[200ms] ease-in-out hover:pl-[50px]'>My Story</NavLink>
                    </div>
                </div>
                
                <div className='absolute z-[-2] w-full min-h-screen top-0 bottom-0 left-0 right-0 '>
                    <img 
                        className='h-full w-full object-cover'
                        src='/assets/heroBackground.png'
                        alt='Hero Background'
                    />
                </div>
            </div>

            <Services />
            <Quotation />
            <Testimonials />
            <ContactSection />
        </>
    )
}

export default Home