import { Input } from "./InputStyled.jsx"
import PropTypes from "prop-types";

const InputComponent = ({ type, placeholder, name, register }) => {
    return ( <Input type={type} placeholder={placeholder} {...register(name)} />)
}

InputComponent.propTypes = {
    type: PropTypes.string.isRequired,
    placeholder: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    register: PropTypes.func.isRequired,
};
  
export default InputComponent;