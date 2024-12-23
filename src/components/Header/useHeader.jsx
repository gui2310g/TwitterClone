import { useNavigate } from "react-router-dom";
import { useEffect, useContext } from "react";
import Cookies from "js-cookie";
import { UserContext } from "../../contexts/UserContent.jsx";
import { userLogged } from "../../services/userServices.js";
import { fetchData } from "../../utils/fetchData.jsx";

export const useHeader = () => {
    const { user, setUser } = useContext(UserContext);
    const navigate = useNavigate();

    async function finduserLogged() {
        await fetchData(() => userLogged(), (response) => setUser(response.data))
    }
    
    function logout() {
        Cookies.remove("token", { withCredentials: true });
        setUser(undefined);
        navigate("/auth");
    }

    useEffect(() => {
        if (Cookies.get("token", { withCredentials: true })) finduserLogged();
    })

    return { user, logout };
}