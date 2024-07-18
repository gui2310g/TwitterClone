import { InputSpace } from "./InputStyled.jsx"


const Input = ({type, placeholder, name, register}) => {

    return (
        <InputSpace type={type} placeholder={placeholder} {...register(name)} />
    )
}

export default Input