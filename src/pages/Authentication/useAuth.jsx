import { useNavigate } from "react-router-dom"
import { CreateAccount, LoginAccount } from "../../services/userServices.js";
import Cookies from "js-cookie";
import { fetchData } from "../../utils/fetchData.jsx";
export const useAuth = () => {
  const navigate = useNavigate();

  async function inSubmit(data) {
    await fetchData(
      () => CreateAccount(data), 
      (response) => {
        Cookies.set("token", response.data, { withCredentials: true });
        navigate("/");
      }
    )
  }
    
  async function InAuth(data) {
    await fetchData(
      () => LoginAccount(data), 
      (response) => {
        Cookies.set("token", response.data, { withCredentials: true });
        navigate("/");
      }
    )
  }

  return { inSubmit, InAuth };
}