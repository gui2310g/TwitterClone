import dotenv from "dotenv"
import userRepositories from "../repositories/user.repositories.js";

import Jwt from "jsonwebtoken";
dotenv.config()

export const authMiddleware = async (req, res, next) => {
    
    try {

        const { authorization } = req.headers
        

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
        
       
        Jwt.verify(token, process.env.JWT, async (error, decoded) => {
            if(error) {
                return res.status(401).send({message: "Token Invalid!"});
            }

            

            const user = await userRepositories.findByIdUserRepository(decoded.id);

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