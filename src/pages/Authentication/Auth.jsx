import { AuthContainer, ErrorInput } from "./AuthStyled.jsx";

import TwitterLogo from "../../assets/twitter-logo.png";
import Input from "../../components/Input/InputComponent.jsx";
import AuthButton from "../../components/AuthButton/AuthButtonComponent.jsx";

import { signinSchema } from "../../schemas/signinSchema.js";
import { signupSchema } from "../../schemas/signupSchema.js";
import { useFormHook } from "../../hooks/useFormHook.jsx";
import { useAuth } from "./useAuth.jsx";

const Auth = () => {
  const {
    register: registerSignup,
    handleSubmit: handleSubmitSignup,
    errors: errorsSignup,
  } = useFormHook(signupSchema);

  const {
    register: registerSignin,
    handleSubmit: handleSubmitSignin,
    errors: errorsSignin,
  } = useFormHook(signinSchema);

  const { inSubmit, InAuth } = useAuth();

  return (
    <AuthContainer>
      <img src={TwitterLogo} alt="X logo" />
      <section>
        <h1>Its Happening Now</h1>
        <h2>Sign up Today</h2>

        <div type="signup">
          <form onSubmit={handleSubmitSignup(inSubmit)}>
            <Input
              type="text"
              placeholder="Insert your username"
              name="name"
              register={registerSignup}
            />
            {errorsSignup.name && (
              <ErrorInput>{errorsSignup.name.message}</ErrorInput>
            )}

            <Input
              type="email"
              placeholder="Insert your email"
              name="email"
              register={registerSignup}
            />
            {errorsSignup.email && (
              <ErrorInput>{errorsSignup.email.message}</ErrorInput>
            )}

            <Input
              type="password"
              placeholder="Insert your password"
              name="password"
              register={registerSignup}
            />
            {errorsSignup.password && (
              <ErrorInput>{errorsSignup.password.message}</ErrorInput>
            )}

            <Input
              type="password"
              placeholder="Confirm your password"
              name="confirmPassword"
              register={registerSignup}
            />
            {errorsSignup.confirmPassword && (
              <ErrorInput>{errorsSignup.confirmPassword.message}</ErrorInput>
            )}

            <AuthButton type="submit" text="Sign up" />
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
            {errorsSignin.email && (
              <ErrorInput>{errorsSignin.email.message}</ErrorInput>
            )}

            <Input
              type="password"
              placeholder="Insert your password"
              name="password"
              register={registerSignin}
            />
            {errorsSignin.password && (
              <ErrorInput>{errorsSignin.password.message}</ErrorInput>
            )}

            <AuthButton type="submit" text="Sign in" />
          </form>
        </div>
      </section>
    </AuthContainer>
  );
};

export default Auth;
