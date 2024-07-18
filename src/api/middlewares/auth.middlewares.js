import "dotenv/config";
import jwt from "jsonwebtoken";
import userRepositories from "../repositories/user.repositories.js";

export const authMiddleware = async (req, res, next) => {
    const authHeader = req.headers.authorization;

    if (!authHeader) return res.status(401).send({ message: "The token was not informed!" });
            
    const parts = authHeader.split(" ");

    if(parts.length !== 2) return res.status(401).send("Token format invalid");
    
    const [schema, token] = parts

    if(schema !== "Bearer") return res.status(401).send("Token Schema invalid")
        
    jwt.verify(token, process.env.JWT, async (error, decoded) => {
        if(error) return res.status(401).send({message: "Token Invalid!"});
            
        const user = await userRepositories.findByIdUserRepository(decoded.id);

        if(!user || !user.id) return res.status(401).send({message: "User not Found"});
            
        req.userId = user.id;  

        return next(); 
    })
}
