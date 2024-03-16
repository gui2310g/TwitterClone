import dotenv from "dotenv"
import userService from "../services/user.service.js";

import Jwt from "jsonwebtoken";
dotenv.config()

export const authMiddleware = async (req, res, next) => {
    
    try {

        const { authorization } = req.headers
        console.log(authorization);

        if(!authorization) {
            return res.sendStatus(401)
        }

        const parts = authorization.split(" ");

        if(parts.length !== 2) {
            return res.sendStatus(401);
        }
        
        const [schema, token] = parts

        if(schema !== "Bearer") {
            return res.sendStatus(401)
        }
        console.log(parts);

        Jwt.verify(token, process.env.JWT, async (error, decoded) => {
            if(error) {
                return res.Status(401).send({message: "Token Invalid!"});
            }

            console.log(decoded)

            const user = await userService.findByIdUserService(decoded.id);

            if(!user || !user.id) {
                return res.Status(401).send({message: "Token Invalid!"});
            }

            req.userId = user.id;   
            return next(); 
        })
    } catch (err) {
        res.status(500).send({message: err.message})
    }
}