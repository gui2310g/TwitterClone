import { AuthButton } from "./AuthButtonStyled";
import PropTypes from "prop-types"
const AuthButtonComponent = ({ type, text }) => {
    return <AuthButton type={type}>{text}</AuthButton>   
}

AuthButtonComponent.propTypes = {
    type: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired
}

export default AuthButtonComponent;