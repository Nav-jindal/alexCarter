// Components:
import { JSX } from "react"
import SecondaryHeading from "../../components/secondaryHeading"

// Icons:
//import { LuArrowUpRight } from "react-icons/lu"
import { FaPhone, FaDumbbell, FaLeaf } from "react-icons/fa6"

// Typescript:
interface ServicesCardType {
    id?: number
    title: string
    desc: string
    icon: JSX.Element
}

// Functions:
const ServicesCard = ({
    title,
    desc,
    icon
} : ServicesCardType ) => <div className='sm:basis-[48%] lg:basis-[31.1%] bg-[#111111] p-[30px] hover:translate-x-[20px] hover:translate-y-[-20px] hover:shadow-[-20px_20px_0px_0px_#E3CD27] transition-all duration-[200ms] ease-in-out'>
    <div className='flex gap-[24px] items-center mb-[20px]'>
        {icon}
        <h3 className='font-bold text-[22.781px]'>{title}</h3>
        {/* <LuArrowUpRight size={48} color='#E3CD27'/> */}
    </div>
    <p className='text-[#5F5D5D] text-[16px]'>{desc}</p>
</div>

const Services = () => {
    // Constants:
    const servicesCardArr = [
    {
        id: 0,
        title: 'Personalized Session',
        desc: 'Get personalized guidance tailored to your goals in a private call. Ask questions, get expert advice, and take the next step with confidence.',
        icon: <FaPhone size={24} color='#E3CD27' />
    },
    {
        id: 1,
        title: 'Personal Training',
        desc: 'Achieve your fitness goals with personalized training tailored to your needs. Get expert guidance and a plan that works specifically for you.',
        icon: <FaDumbbell size={30} color='#E3CD27' />
    },
    {
        id: 2,
        title: 'Tailored Meals',
        desc: 'Get a customized nutrition plan tailored to your goals and lifestyle. Eat smarter, feel better, and fuel your body the right way.',
        icon: <FaLeaf size={30} color='#E3CD27' />
    },
]
    return <div className='my-[75px]'>
        <div className='mb-[45px] flex gap-[40px] flex-wrap'>
            <div className='max-w-[550px] order-2 lg:order-1'>
                <SecondaryHeading title='Luxury fitness, re-defined' />
                <p className='mb-[15px] text-[#5F5D5D]'>Experience elite, tailor-made fitness with world-class coaching, personalized programs, and a concierge-level approach to health and performance.</p>
                <p className='text-[#5F5D5D]'>Luxury fitness, redefined for those who demand the best</p>
            </div>
            <div className=' w-full lg:flex-1 order-1 lg:order-2'>
                <img
                    className='object-cover h-full w-full'
                    src='/assets/servicesHomeBackground.png'
                    alt='Bodybuilding'
                />
            </div>
        </div>
        <div className="flex gap-[24px] flex-wrap justify-between">
            {servicesCardArr?.map((serviceCardInfo:ServicesCardType)=>
                <ServicesCard 
                    key={serviceCardInfo?.id}
                    title={serviceCardInfo?.title}
                    desc={serviceCardInfo?.desc}
                    icon={serviceCardInfo?.icon}
                />
            )}
        </div>
    </div>
}

export default Services