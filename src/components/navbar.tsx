// Packages:
import { useLocation, NavLink } from "react-router-dom"
import { useState } from "react"

// Icons:
import { FaBars } from "react-icons/fa6"

// Typescript:
import { RouterPathsType } from "../App"

interface NavigationLinkType {
    id?: number
    title: string
    currentPage: string
    toggleIsNavbarOpen: () => void
}


const NavigationLink = ({
    title,
    currentPage,
    toggleIsNavbarOpen
}: NavigationLinkType) =>   <NavLink 
                                className={`${currentPage === title ? 'font-bold pointer-events-none' : ' font-normal text-[#686763]' } 
                                            hover:font-bold hover:text-[#E3CD27]`}
                                to={title}
                                onClick={toggleIsNavbarOpen}
                                >
                                {title === '/' ? 'home' : title.slice(1)}          
</NavLink>

const Navbar = ({
    routerPaths
} : RouterPathsType) => {
    // Constants:
    const currentPage = useLocation()

    // States:
    const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false) 

    // Functions:
    const toggleIsNavbarOpen = () => setIsNavBarOpen(!isNavBarOpen)  

    // Return:
    return <div className='py-[25px] flex gap-[24px] items-center justify-between'> 
            <NavLink to='/' className='font-bold'>
                Alex <span className='text-[#E3CD27]'>Carter</span>
            </NavLink>

            {/* Hamburger Menu */}
            <div className='md:hidden'>
                <FaBars 
                    className={` cursor-pointer fill-[#E3CD27]`}
                    size={24} 
                    onClick={toggleIsNavbarOpen}
                />
            </div>

            <div className={`${ isNavBarOpen ? '' : 'hidden' } md:hidden z-[30] pointer-events-none bg-[rgba(0,0,0,0.75)] absolute top-0 bottom-0 left-0 right-0 block`}></div>

            <div className={`${ isNavBarOpen ? 'block' : 'hidden' } z-[50] py-[25px] px-[20px] md:z-[0] md:p-0 absolute right-0 top-0 bottom-0 w-[75%] sm:w-[35%] md:w-max bg-[#040404] md:bg-[transparent] md:block md:static`}>
                <div className='md:hidden'>
                    <FaBars 
                        className={`md:hidden cursor-pointer fill-[#E3CD27]`}
                        size={24} 
                        onClick={toggleIsNavbarOpen}
                    />
                </div>
                <div className={`mt-[30px] flex  flex-col gap-[44px] md:flex-row md:mt-[0px] items-center`}>
                {routerPaths?.map((page, index)=>
                    <NavigationLink 
                        key={index}
                        title={page.path ?? '/'}
                        currentPage={currentPage.pathname}
                        toggleIsNavbarOpen={toggleIsNavbarOpen}
                    />
                    )}
                </div>
            </div>
            
    </div>
}

export default Navbar