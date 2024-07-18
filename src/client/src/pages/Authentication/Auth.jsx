import { useNavigate } from "react-router-dom";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import Cookies from "js-cookie"

import { AuthContainer, ErrorInput } from "./AuthStyled.jsx"

import TwitterLogo from "../../assets/imgs/twitter-logo.png"
import Input from "../../assets/components/Input/Input.jsx"
import { Button } from "../../assets/components/AuthButton/AuthButtonStyled.jsx"

import { signinSchema } from "../../schemas/signinSchema.js";
import { signupSchema } from "../../schemas/signupSchema.js";
import { CreateAccount, LoginAccount } from "../../services/userServices.js";

const Auth = () => {

    const {
        register: registerSignup,
        handleSubmit: handleSubmitSignup,
        formState: { errors: errorsSignup },
    } = useForm({ resolver: zodResolver(signupSchema) });

    const {
        register: registerSignin,
        handleSubmit: handleSubmitSignin,
        setError,
        formState: { errors: errorsSignin },
    } = useForm({ resolver: zodResolver(signinSchema) });

    const navigate = useNavigate()

    async function inSubmit(data) {
        try {
            const response = await CreateAccount(data)
            Cookies.set("token", response.data, { expires: 1, secure: true, sameSite: 'strict' })
            navigate("/")
        } catch (err) {
            console.log(err)
        }   
    }
    
        async function InAuth(data) {
            try {
                const response = await LoginAccount(data)
                Cookies.set("token", response.data, { expires: 1, secure: true, sameSite: 'strict' })
                navigate("/")
            } catch (err) {
                setError("password", { type: "manual", message: "Invalid email or password" });
                console.log(err)
            }
        }
    
    return (
        <AuthContainer>
            <img src={TwitterLogo} alt="X logo"/>
            <section>
                <h1>It's Happening Now</h1>
                <h2>Sign up Today</h2>
                
                <div type="signup">
                    <form onSubmit={handleSubmitSignup(inSubmit)}>
                        <Input 
                            type="text" 
                            placeholder="Insert your username" 
                            name="name" 
                            register={registerSignup}
                        />
                        {errorsSignup.name && <ErrorInput>{errorsSignup.name.message}</ErrorInput>}

                        <Input 
                            type="email" 
                            placeholder="Insert your email" 
                            name="email" 
                            register={registerSignup}
                        />
                        {errorsSignup.email && <ErrorInput>{errorsSignup.email.message}</ErrorInput>}

                        <Input 
                            type="password" 
                            placeholder="Insert your password" 
                            name="password" 
                            register={registerSignup}
                        />
                        {errorsSignup.password && <ErrorInput>{errorsSignup.password.message}</ErrorInput>}

                        <Input 
                            type="password" 
                            placeholder="Confirm your password" 
                            name="confirmPassword" 
                            register={registerSignup}
                        />
                        {errorsSignup.confirmPassword && <ErrorInput>{errorsSignup.confirmPassword.message}</ErrorInput>}

                        <Button type="submit">Sign up</Button>
                    </form>
                </div>

                <div type="signin">
                    <h2>Do you have an account?</h2>

                    <form onSubmit={handleSubmitSignin(InAuth)}>
                        <Input 
                            type="email" 
                            placeholder="Insert your email" 
                            name="email" 
                            register={registerSignin}
                        />
                        {errorsSignin.email && <ErrorInput>{errorsSignin.email.message}</ErrorInput>}

                        <Input 
                            type="password" 
                            placeholder="Insert your password" 
                            name="password" 
                            register={registerSignin}
                        />
                        {errorsSignin.password && <ErrorInput>{errorsSignin.password.message}</ErrorInput>}

                        <Button type="submit">Sign in</Button>
                    </form>
                </div> 
            </section>
        </AuthContainer>
    )
}

export default Auth;
