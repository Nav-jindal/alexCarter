// Typescript:
interface SecondaryHeadingType {
    title: string
}

const SecondaryHeading = ({
    title
} : SecondaryHeadingType) => <div className='mb-[36px]'>
    <h2 className='text-[32.437px] font-bold mb-[10px]'>{title}</h2>
    <div className='flex gap-[4px] w-max'>
        {Array.from({ length: 5 }).map((_, index)=>
            <svg key={index} width={40} height={6} xmlns="http://www.w3.org/2000/svg" fill="#E3CD27">
                <rect x={0} y={0} width={30} height={6} transform="skewX(40)"/>
            </svg>
        )}
    </div>
</div>

export default SecondaryHeading