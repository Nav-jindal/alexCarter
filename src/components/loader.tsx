import { ClipLoader } from "react-spinners"

const Loader = async () => {
    return  <div className='z-[100] pointer-events-none fixed top-0 left-0 right-0 bottom-0 w-full h-full bg-[rgba(0,0,0,0.95)] flex justify-center items-center'>
        <ClipLoader size={60} color="#0d0d0d" />
    </div>
}

export default Loader