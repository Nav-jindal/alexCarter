
const Quotation = () => {
    // Return:
    return <div className='my-[75px] py-[40px] grid grid-cols-2 items-center'>
        <div className='py-[15px] h-full row-start-1 row-end-1 col-span-full relative right-[50%] left-[50%] ml-[-50vw] mr-[-50vw] w-[99vw] z-[-2]'>
            <img 
                className='object-cover h-full w-full'
                src='/assets/quote.png' 
                alt='quote' />
        </div>
        <h2 className='row-start-1 row-end-1 col-span-full text-[32.437px] font-bold text-white'>Supporting You Every Step to Achieve a Strong, Confident Body</h2>
    </div>
}

export default Quotation