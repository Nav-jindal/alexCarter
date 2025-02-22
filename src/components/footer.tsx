// Packages:
import { IconContext } from 'react-icons'
import { NavLink } from "react-router-dom"

// Icons:
import { FaEnvelope, FaPhone, FaLocationDot } from "react-icons/fa6"

// Typescript:
import { RouterPathsType } from "../App"

interface FooterLinkType {
    id?: number
    title: string
}

// Functions:
const FooterLink = ({
    title,
}: FooterLinkType) =>   <NavLink to={title} 
                            className='block capitalize mb-[15px] text-[#E7DE73] hover:font-bold'
                        >
                            {title} 
                        </NavLink>

const Footer = ({
    routerPaths
} : RouterPathsType) => {
    // Constants:
    const socialLinks = [
        {
            id: 0,
            title: 'facebook',
        },
        {
            id: 1,
            title: 'instagram',
        },
        {
            id: 2,
            title: 'linkedin',
        },
    ]

    // Return:
    return <div className='bg-[#222222] mt-[150px] py-[75px] flex gap-[98px] flex-wrap fullBleedColor'>
        <div className=''>
            <div className='mb-[20px]'>
                <h3 className='font-bold text-[22.781px] mb-[10px]'>Get in touch</h3>
                <p className='text-[#85857e] text-[14.222px]'>Got questions? Get in touch and we would love to talk</p>
            </div>
            <IconContext.Provider 
                value={{  
                    className:'max-w-[150px]',
                    size: '18px', 
                    style: { backgroundColor:'none', fill:'#ffffff'}}}
            >

                <div className='flex gap-[12px] items-center mb-[10px]'>
                    <FaPhone />
                    <p className='text-[16px]'>+1 4444 444 444</p>
                </div>
                <div className='flex gap-[12px] items-center mb-[10px]'>
                    <FaEnvelope />
                    <p className='text-[16px]'>johndoe@john.com</p>
                </div>
                <div className='flex gap-[12px] items-center mb-[10px]'>
                    <FaLocationDot />
                    <p className='text-[16px]'>123 Main Street
                            Springfield, NY 12345
                            United States
                    </p>
                </div>
            </IconContext.Provider>
        </div>
        <div>
            <h3 className='font-bold text-[22.781px] mb-[10px]'>Navigation</h3>
            <div>
                {routerPaths?.map((page, index:number)=>
                    <FooterLink
                        key={index}
                        title={page?.path?.slice(1) ?? 'home'}
                    />
                )}
            </div>
        </div>
        <div>
            <h3 className='font-bold text-[22.781px] mb-[10px]'>Social Links</h3>
            <div>
                {socialLinks?.map((socialLink)=>
                    <FooterLink
                        key={socialLink?.id}
                        title={socialLink?.title}
                    />
                )}
            </div>
        </div>
    </div>
}

export default Footer