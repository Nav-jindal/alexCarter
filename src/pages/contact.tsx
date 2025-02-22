// Packages:
import { useForm, UseFormRegister } from "react-hook-form"
import { isEmpty } from "lodash"
import { useEffect, useState } from "react"
import { toast, ToastContainer } from "react-toastify"
import "react-toastify/dist/ReactToastify.css"
import axios from "axios"

// Components:
import SecondaryHeading from "../components/secondaryHeading"
import TextField from "../components/textfield"
import Loader from "../components/loader"

// Icons:
import { FaArrowRightLong } from "react-icons/fa6"
import { ToastOptions } from 'react-toastify/unstyled'

// Typescript:
export interface ContactFormType {
    reasonForEnquiry: string
    firstname: string
    lastname: string
    contactEmail: string
}

interface RadioBtnType {
    register: UseFormRegister<ContactFormType>
    name: string
}

// Funtions:

const RadioButtonComponent = ({
    register,
    name,
} : RadioBtnType) => <label 
        className='basis-[100%] md:basis-[max-content] flex gap-[10px] items-center cursor-pointer group'
        htmlFor={name.replace(/\s/g,'')}
    >
    <input 
        className='peer hidden'
        type="radio"
        {...register('reasonForEnquiry',{
            required: {
                value: true,
                message: 'Please, select a reason for your enquiry'
            }
        })} 
        value={name}
        id={name.replace(/\s/g,'')}
    /> 

    <div className='w-4 h-4 border-2 border-white rounded-full peer-checked:border-4 peer-checked:border-[#E3CD27] group-hover:border-[#E3CD27]'></div>
        <span className='peer-checked:text-[#E3CD27] group-hover:text-[#E3CD27]'>{name}</span>
    </label>


const Contact = () => {
    // Constant:
    const {
        register, 
        handleSubmit,
        watch,
        formState: { errors },
        reset,
    } = useForm<ContactFormType>({
        mode: 'all'
    })
    const allFields = watch()
    const radioBtnArr = [
        'Personal Training',
        'Online Enquiry',
        'General Enquiry',
    ]

    // States:
    const [isLoading, setIsLoading] = useState<boolean>(false)
    const [isFormFilled, setIsFormFilled] = useState<boolean>(false)

    // Function:
    const contactSubmit = (data: ContactFormType) => {
        const toastStyle: ToastOptions = { 
            position: 'top-right',
            autoClose: 3500,
            hideProgressBar: false,
            closeOnClick: true,
            pauseOnHover: true,
            draggable: false,
            theme: 'dark',
        }
        try {
            setIsLoading(true)

            // Sending to data to owner's email
            axios.post("https://formsubmit.co/your@email.com", {
                firstname: data?.firstname,
                lastname: data?.lastname,
                reasonforEnquiry: data?.reasonForEnquiry,
                email: data?.contactEmail
            })

            setIsLoading(false)
            toast.success('Message sent successfully!', toastStyle)
            reset() // Reset form after successful submission
    
        } catch (error) {
            setIsLoading(false)
            toast.warning(`Something wrong! couldn't sent the message`, toastStyle)
            console.error(error)
        }
        
    }

    // Effects:
    useEffect(() => {
        window.scrollTo(0, 0);
    }, [])

    useEffect(()=>{
        setIsFormFilled(Object.values(allFields).every((value) => value?.trim?.() !== ""))
    }, [allFields])

    // Return:
    return <>
    <ToastContainer  limit={2}/>
    {isLoading && <Loader />}
    <div className={`{${isLoading ? 'pointer-events-none' : '' } my-[75px] md:w-[75%] lg:w-[60%]`}>
        <div className='mb-[40px] lg:mb-[0px]'>
            <SecondaryHeading title='I’d Love to Hear from You!' />
        </div>
        <form 
            onSubmit={handleSubmit(contactSubmit)} 
            noValidate
        >
                <div className='flex gap-[24px] flex-wrap'>
                    <div className='flex-1 basis-[100%]'>
                        <h3 className='text-[18px] text-[#505050] font-bold mb-[15px]'>Reasons for enquiry</h3>
                        <div className='flex gap-[24px] md:gap-[36px] flex-wrap '>
                            {radioBtnArr?.map((radioBtn, index)=>
                                <RadioButtonComponent
                                    key={index}
                                    register={register}
                                    name={radioBtn}
                                />
                            )}
                        </div>
                        {errors?.reasonForEnquiry && <p className='mt-[12px] text-[#c93f42] text-[14px]'>{errors?.reasonForEnquiry?.message}</p>}
                    </div>
                    <div className='flex-1 basis-[47%]'>
                        <TextField
                            register={register}
                            name='firstname'
                            placeholder='John'
                            errors={errors?.firstname}
                            allFields={allFields}
                            validationOptions={{
                                required: {
                                    value: true,
                                    message: 'Please, enter your first name'
                                }
                            }}
                            errorMessage={errors?.firstname?.message}
                        />
                    </div>
                    <div className='flex-1 basis-[47%]'>
                        <TextField
                            register={register}
                            name='lastname'
                            placeholder='Doe'
                            errors={errors?.lastname}
                            allFields={allFields}
                            validationOptions={{
                                required: {
                                    value: true,
                                    message: 'Please, enter your last name'
                                }
                            }}
                            errorMessage={errors?.lastname?.message}
                        />
                    </div>
                    <div className='flex-1 basis-[47%]'>
                        <TextField
                            register={register}
                            name='contactEmail'
                            placeholder='johnDoe@example.com'
                            errors={errors?.contactEmail}
                            allFields={allFields}
                            validationOptions={{
                                required: {
                                    value: true,
                                    message: 'Please, enter your email'
                                },
                                pattern: {
                                    value: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
                                    message: 'Invalid email format',
                                }
                            }}
                            errorMessage={errors?.contactEmail?.message}
                        />
                    </div>
                </div>
            <button 
                type='submit'
                className={`${isEmpty(errors) && isFormFilled ? '' : 'pointer-events-none bg-[#bbb591] !text-[#4d4b45]' } flex items-center justify-center gap-[24px] mt-[50px] px-[24px] py-[12px] md:px-[30px] bg-[#E3CD27] text-[#040404] text-[20.25px] font-semibold hover:gap-[50px] transition-all duration-[200ms] cursor-pointer ease-in-out`}
                disabled={!isFormFilled}
                >
                    Message me
                    <FaArrowRightLong 
                        className={`${isEmpty(errors) && isFormFilled ? '' : ' !fill-[#4d4b45]' } `}
                        color="#040404" 
                        size={24}
                    />
            </button>
        </form>
    </div>
    </>
}
export default Contact