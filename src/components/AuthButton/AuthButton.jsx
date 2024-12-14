import { Button } from "./AuthButtonStyled";

const AuthButton = ({ type, text }) => {
    return <Button type={type}>{text}</Button>   
}

export default AuthButton;