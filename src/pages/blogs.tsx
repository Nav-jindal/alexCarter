// Packages:
import { useEffect } from "react"

// Components:
import SecondaryHeading from "../components/secondaryHeading"

// Icons:
import { LuArrowUpRight } from "react-icons/lu"

// Typescipt: 
interface BlogsType {
    id?: number
    style: string
    title: string
    imgSrc: string
    date: string
}

// Functions:
const BlogsCard = ({
    title,
    imgSrc,
    style,
    date
} : BlogsType) => <div className='w-full sm:w-[48%] lg:w-[32%] cursor-pointer hover:translate-x-[20px] hover:translate-y-[-20px] hover:shadow-[-20px_20px_0px_0px_#E3CD27] transition-all duration-[200ms] ease-in-out'>
<div className='h-[200px]'>
        <img 
            className='w-full h-full object-cover'
            src={imgSrc} 
            alt={title} 
        />
</div>

<div className='bg-[#111111] py-[20px] px-[18px]'>
    <div className='flex items-center justify-between gap-[20px] mb-[10px]'>
        <div className='min-h-[90px]'>
            <p className='text-[14.222px] text-[#E3CD27] font-semibold mb-[8px]'>{style}</p>
            <h3 className='font-bold text-[16px] mb-[12px]'> {title} </h3>
        </div>
        <div>
            <LuArrowUpRight size={36} color='#E3CD27'/>
        </div>
    </div>
    <p className='text-[14.22px] font-medium text-[#5F5D5D]'>{date}</p>
</div>
</div>

const Blogs = () => {
    // Constants:
    const blogsArr = [
        {
            id: 0,
            style:'Lifestyle',
            title: 'Maximize Your Potential: Fitness Meets Lifestyle',
            imgSrc: '/assets/blog1.png',
            date: '24-04-2024',
        },
        {
            id: 1,
            style:'Diet Plan',
            title: 'What to eat during diabetes?',
            imgSrc: '/assets/blog2.png',
            date: '30-06-2024',
        },
    ]

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    // Return:
    return <div className='my-[75px]'>
        <div className='mb-[40px]'>
            <SecondaryHeading title='Explore Our Ideas' />
        </div>

        <div className='flex gap-[20px] lg:gap-[32px] flex-wrap '>
            {blogsArr?.map((blog:BlogsType)=>
                <BlogsCard
                    key={blog?.id}
                    title={blog?.title}
                    imgSrc={blog?.imgSrc}
                    style={blog?.style}
                    date={blog?.date}
                />
            )}
        </div>
    </div>
}

export default Blogs