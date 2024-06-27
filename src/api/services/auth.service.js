import bcrypt from "bcrypt"
import authRepositories from "../repositories/auth.repositories.js"

const LoginService = async ({email, password}) => {
    const user = await authRepositories.loginRepository(email);

    if(!user) throw new Error("User or password not found")

    const passwordIsValid = bcrypt.compareSync(password, user.password)

    if(!passwordIsValid) throw new Error("Password incorrect")

    const token = authRepositories.generateTokenRepository(user.id, user.email)

    return {Token: token}
}

export default { LoginService };