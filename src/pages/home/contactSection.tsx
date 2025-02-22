// Packages:
import { NavLink } from "react-router-dom"

// Components:
import SecondaryHeading from "../../components/secondaryHeading"

// Icons:
import { FaArrowRightLong } from "react-icons/fa6";

const ContactSection = () => {
    return <div className='max-w-[600px] my-[75px]'>
        <SecondaryHeading title='So, are you interested in joining?' />
        <p className='text-[#5F5D5D] mb-[40px]'>Take the first step toward a stronger, healthier you! Subscribe now and get expert coaching, personalized plans, and the motivation to keep going</p>

        <NavLink to='contact' type='button' className='w-max flex items-center justify-center gap-[24px] px-[24px] py-[12px] md:px-[30px] bg-[#E3CD27] text-[#040404] text-[20.25px] font-semibold hover:gap-[50px] transition-all duration-[200ms] ease-in-out'>
            <span>I'm Interested</span>
            <FaArrowRightLong  
                color="#040404" 
                size={24}
            />
        </NavLink>
</div>
}

export default ContactSection