import { useEffect, useState } from "react";
import { GetAllUsers } from "../../services/userServices.js";

export const useWidget = () => {
    const [user, setUsers] = useState([]);

    async function findAllUsers() {
        try {
            const response = await GetAllUsers();
            setUsers(response.data);  
        } catch (err) {
            console.error(err);
        }
    }

    useEffect(() => {
        findAllUsers();
    }, []);

    return { user };
}