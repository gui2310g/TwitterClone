import { useEffect, useState } from "react";
import { GetAllUsers } from "../../services/userServices.js";

export const useWidget = () => {
    const [user, setUsers] = useState([]);

    async function findAllUsers() {
        const response = await GetAllUsers();
        setUsers(response.data);
    }

    useEffect(() => {
        findAllUsers();
    }, []);

    return { user };
}