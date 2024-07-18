
import authService from "../services/auth.service.js"

const LoginController = async (req, res) => {
    const {email, password} = req.body

    try {
        const token = await authService.LoginService({email, password});

        return res.send(token);
    } catch (err) {
        res.status(500).send(err.message)
    }
}

export default { LoginController };