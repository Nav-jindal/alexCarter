// Packages:
import ReactStars from 'react-stars'

// Swiper:
import { Swiper, SwiperSlide } from 'swiper/react'
import { Pagination } from 'swiper/modules'

// Components:
import SecondaryHeading from "../../components/secondaryHeading"

// Typescript:
interface TestimonialCardType {
    id?: number
    title: string
    desc: string
    rating: number
    author: string
}

// Functions:
const TestimonialCard = ({
    //id,
    title,
    desc,
    rating,
    author,
} : TestimonialCardType ) => <>
    <div className='bg-[#111111] p-[30px] h-max'>
        <ReactStars
            className='mb-[10px]'
            count={5}
            size={24}
            value={rating}
            color2={'#E3CD27'}
            edit={false}
            half={true}
        />
        <h3 className='font-bold text-[20.25px] lg:text-[22.781px] mb-[20px]'>{title}</h3>
        <p className='text-[#5F5D5D] text-[16px] mb-[12px]'>{desc}</p>
        <div className='flex gap-[16px] items-center'>
            <div className='block h-[2px] w-[10px] bg-white'></div>
            <h4 className='text-[16px] font-bold'>{author}</h4>
        </div>
    </div>
</>

const Testimonials = () => {
    // Constants:
    const testimonialArr = [
        {
            id: 0,
            title: 'Life Changing Guidance',
            desc: '"Working with Alex Carter transformed my fitness journey. Their personalized approach kept me motivated, and I feel stronger than ever! Life-Changing Guidance',
            rating: 5,
            author: 'John Doe',
        },
        {
            id: 1,
            title: 'Amazing Meal & Coach',
            desc: '"Working with Alex Carter transformed my fitness journey. Their personalized approach kept me motivated, and I feel stronger than ever! Life-Changing Guidance',
            rating: 4.5,
            author: 'Jane Doe',
        },
        {
            id: 2,
            title: 'Elite & knowledgable coach',
            desc: '"Working with Alex Carter transformed my fitness journey. Their personalized approach kept me motivated, and I feel stronger than ever! Life-Changing Guidance',
            rating: 4,
            author: 'Varun Batra',
        },
        {
            id: 3,
            title: 'Dedicated coach',
            desc: '"Working with Alex Carter transformed my fitness journey. Their personalized approach kept me motivated, and I feel stronger than ever! Life-Changing Guidance',
            rating: 4,
            author: 'Rohan Sharma',
        },
        
    ]
    const pagination = {
        clickable: true,
        renderBullet: function (index:number, className:string) {
            return `<span class=${className} id=${index}></span>`;
        },
    }

    return <div className='my-[75px]'>
        <SecondaryHeading title='See what our clients are saying' />
        <Swiper
            modules={[ Pagination, ]}
            allowTouchMove={true} 
            pagination={pagination}
            slidesPerView={1}
            spaceBetween={10}
            breakpoints={{
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                        slidesPerView: 'auto',
                        spaceBetween: 30,
                    },
                }}
            loop={false}
            className="mySwiper"
        >
            {testimonialArr?.map((testimonial:TestimonialCardType)=>
                <SwiperSlide key={testimonial?.id}>
                    <TestimonialCard
                        title={testimonial?.title}
                        desc={testimonial?.desc}
                        rating={testimonial?.rating}
                        author={testimonial?.author}
                    />  
                </SwiperSlide>
            )}
        </Swiper>
    </div>
}

export default Testimonials