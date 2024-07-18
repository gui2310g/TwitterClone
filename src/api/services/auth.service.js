import bcrypt from "bcrypt"
import authRepositories from "../repositories/auth.repositories.js"

const LoginService = async ({email, password}) => {
    const user = await authRepositories.loginRepository(email);

    if(!user) throw new Error("Wrong password or username")

    const passwordIsValid = await bcrypt.compare(password, user.password)

    if(!passwordIsValid) throw new Error("Password incorrect")

    const token = authRepositories.generateTokenRepository(user.id)

    return token
}

export default { LoginService };