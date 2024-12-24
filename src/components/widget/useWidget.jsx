import { useEffect, useState } from "react";
import { GetAllUsers } from "../../services/userServices.js";
import { fetchData } from "../../utils/fetchData.jsx";

export const useWidget = () => {
    const [user, setUsers] = useState([]);

    async function findAllUsers() {
        await fetchData(() => GetAllUsers(), (response) => setUsers(response.data))
    }
   
    useEffect(() => {
        findAllUsers();
    }, []);

    return { user };
}