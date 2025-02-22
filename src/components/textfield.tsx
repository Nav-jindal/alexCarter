import { FieldErrors, RegisterOptions, UseFormRegister } from "react-hook-form"
import { isEmpty } from "lodash"

// Typescript:
import { ContactFormType } from "../pages/contact"

interface TextFieldType {
    register: UseFormRegister<ContactFormType>
    validationOptions: RegisterOptions<ContactFormType>
    errors: FieldErrors<ContactFormType> | undefined
    errorMessage: string | undefined
    allFields: ContactFormType
    name: keyof ContactFormType
    type?: string
    placeholder: string
}


const TextField = ({
    register,
    placeholder,
    validationOptions,
    errors,
    errorMessage,
    name,
    type,
    allFields,
} : TextFieldType) => <>
    <h3 className='text-[18px] text-[#505050] font-bold mb-[15px] capitalize'>{name}</h3>
        <input 
        className={` ${errors ? 'placeholder:!text-[#925d5d] !border-[#d34c4e] text-[#d34c4e]' : ''}
                    ${!isEmpty(allFields?.firstname) && !errors ? 'text-[20px] font-semibold !border-solid focus-visible:!font-normal' : '' }
                    w-full px-[16px] py-[12px] bg-transparent border
                    border-[#ffffff] border-solid hover:border-[#E3CD27] focus-visible:border-[#E3CD27] focus:border-2
                    focus-visible:outline-none focus-visible:pl-[30px] placeholder:text-[#68675e]`}
        type={type ?? 'text'}
        {...register(name, validationOptions
        )}
        placeholder={placeholder}
        />
        {errors && <p className='mt-[12px] text-[#d34c4e] text-[14px]'>{errorMessage}</p>}
</>


export default TextField