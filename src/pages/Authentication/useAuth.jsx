import { useNavigate } from "react-router-dom"
import { CreateAccount, LoginAccount } from "../../services/userServices.js";
import Cookies from "js-cookie";

export const useAuth = () => {
    const navigate = useNavigate();

    async function inSubmit(data) {
        try {
          const response = await CreateAccount(data);
          Cookies.set("token", response.data, { withCredentials: true });
          navigate("/");
        } catch (error){
          console.log(error)
        }
    }
    
    async function InAuth(data) {
        try {
          const response = await LoginAccount(data);
          Cookies.set("token", response.data, { withCredentials: true });
          navigate("/");
        } catch (error){
          console.log(error)
        }
    }

    return { inSubmit, InAuth };
}